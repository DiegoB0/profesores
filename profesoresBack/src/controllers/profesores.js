import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import { connect } from '../database';
const bcrypt = require('bcrypt');
const myPlainTextPassword = 's0//P4$$w0rD';

export const getProfesores = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM profesores');
	console.log(rows[0]);
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
	console.log(rows[0]);
	res.json(rows[0]);
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
		'INSERT INTO profesores(clave, nombres, apellidos, fnacimiento, email, sexo, estadocivil, tcasa, curp, tcelular, calle, colonia, cp, municipio, estado, estatus, password, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "No hay")',
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
		console.log('La clave existe');

		results.forEach((profesor) => {
			bcrypt.compare(data.password, profesor.password, (err, isMatch) => {
				if (!isMatch) {
					res.status(401).json({ token: null, message: 'Contraseña invalida' });
				} else {
					console.log('Contraseña correcta');
					const token = jwt.sign({ id: profesor.clave }, SECRET, {
						expiresIn: 86400,
					});

					res.json({ token });
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
	res.sendStatus(200);
};

export const updateProfesor = async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const password = await bcrypt.hash(req.body.password, salt);
	const connection = await connect();
	const results = await connection.query(
		"UPDATE profesores SET clave=?, nombres=?, apellidos=?, fnacimiento=?, email=?, sexo=?, estadocivil=?, tcasa=?, curp=?, tcelular=?, calle=?, colonia=?, cp=?, municipio=?, estado=?, estatus=?, password=?, foto='No Hay' WHERE clave = ?",
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
	console.log(results);
	res.json({
		status: 200,
		data: results,
	});
};
