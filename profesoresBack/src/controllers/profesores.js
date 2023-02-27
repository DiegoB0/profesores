import { connect } from '../database';

export const getProfesores = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM profesores');
	console.log(rows);
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
	const connection = await connect();
	const [results] = await connection.query(
		'INSERT INTO profesores(clave, nombres, apellidos, fnacimiento, email, sexo, estadocivil, tcasa, curp, tcelular, calle, colonia, cp, municipio, estado, estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
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
		]
	);

	res.sendStatus(200);
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
	const connection = await connect();
	const results = await connection.query(
		'UPDATE profesores SET ? WHERE clave = ?',
		[req.body, req.params.id]
	);
	console.log(results);
	res.json({
		status: 200,
		data: results,
	});
};
