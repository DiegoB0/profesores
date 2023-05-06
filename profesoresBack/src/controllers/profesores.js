import bcrypt from 'bcrypt';
import fs from 'fs-extra';
import jwt from 'jsonwebtoken';
import { connect } from '../database';
import { deleteImage, uploadImage } from '../libs/cloudinary';

export const getProfesores = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM profesores');

	res.json({
		status: 200,
		data: rows,
	});
};

export const getProfesor = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT * FROM profesores WHERE clave = ?',
		[req.params.id]
	);

	if (rows[0]) {
		res.json(rows[0]);
	} else {
		res.json({ nuevo: 'Clave valida' });
	}
};

export const getProfesoresCount = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT COUNT(*) FROM profesores');
	console.log(rows[0]['COUNT(*)']);
	res.sendStatus(200);
};

export const saveProfesor = async (req, res) => {
	const clave = req.body.clave;
	const salt = await bcrypt.genSalt(10);
	const password = await bcrypt.hash(req.body.password, salt);
	const connection = await connect();
	const [results] = await connection.query(
		'INSERT INTO profesores(clave, nombres, apellidos, fnacimiento, email, sexo, estadocivil, tcasa, curp, tcelular, calle, colonia, cp, municipio, estado, estatus, password, foto, public_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "", "Not yet")',
		[
			clave,
			req.body.nombres,
			req.body.apellidos,
			req.body.fnacimiento,
			req.body.email,
			req.body.sexo,
			req.body.estadocivil,
			req.body.tcasa,
			req.body.curp,
			req.body.tcelular,
			req.body.calle,
			req.body.colonia,
			req.body.cp,
			req.body.municipio,
			req.body.estado,
			req.body.estatus,
			password,
		]
	);

	res.sendStatus(200);
};

export const authProfesores = async (req, res) => {
	const data = req.body;
	const connection = await connect();
	const [results] = await connection.query(
		'SELECT * FROM profesores WHERE clave = ?',
		[data.clave]
	);

	if (results.length > 0) {
		results.forEach((profesor) => {
			bcrypt.compare(data.password, profesor.password, (err, isMatch) => {
				if (!isMatch) {
					res.status(401).json({ token: null, message: 'Contraseña invalida' });
				} else {
					const token = jwt.sign({ id: profesor.clave }, process.env.SECRET, {
						expiresIn: 86400,
					});

					res.json({ token, user: profesor });
				}
			});
		});
	} else {
		res.status(400).json({ message: 'Usuario no encontrado' });
	}
};

export const deleteProfesor = async (req, res) => {
	const connection = await connect();
	const result = await connection.query(
		'DELETE FROM profesores WHERE clave = ?',
		[req.params.id]
	);

	if (result.public_id) {
		await deleteImage(result.public_id);
	}

	res.sendStatus(200);
};

export const updateProfesor = async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const password = await bcrypt.hash(req.body.password, salt);
	const connection = await connect();
	const results = await connection.query(
		'UPDATE profesores SET clave=?, nombres=?, apellidos=?, fnacimiento=?, email=?, sexo=?, estadocivil=?, tcasa=?, curp=?, tcelular=?, calle=?, colonia=?, cp=?, municipio=?, estado=?, estatus=?, password=? WHERE clave = ?',
		[
			req.body.clave,
			req.body.nombres,
			req.body.apellidos,
			req.body.fnacimiento,
			req.body.email,
			req.body.sexo,
			req.body.estadocivil,
			req.body.tcasa,
			req.body.curp,
			req.body.tcelular,
			req.body.calle,
			req.body.colonia,
			req.body.cp,
			req.body.municipio,
			req.body.estado,
			req.body.estatus,
			password,
			req.params.id,
		]
	);

	res.json({
		status: 200,
		data: results,
	});
};

export const editProfile = async (req, res) => {
	const { email } = req.body;
	let foto;
	let public_id;

	if (req.files.foto) {
		const result = await uploadImage(req.files.foto.tempFilePath);
		await fs.remove(req.files.foto.tempFilePath);
		console.log('Subido a cloudinary pitochico');

		foto = result.url;
		public_id = result.public_id;
	}
	console.log(req.params.id);
	const connection = await connect();
	const [results] = await connection.query(
		'UPDATE profesores SET email=?, foto=?, public_id=? WHERE clave=?',
		[email, foto, public_id, req.params.id]
	);

	if (results) {
		await connection.query(
			'INSERT INTO images (url, public_id, profesor) VALUES(?, ?, ?)',
			[foto, public_id, req.params.id]
		);
		console.log('Guardado en la tabla de imagenes pa');
	}

	res.json({
		status: 200,
		data: {
			email,
			foto,
		},
	});
};

export const postImage = async (req, res) => {};
