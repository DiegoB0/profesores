import { connect } from '../database';

export const getAsesorias = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM asesorias');
	console.log(rows);
	res.json(rows);
};

export const getAsesoria = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT * FROM asesorias WHERE id = ?',
		[req.params.id]
	);
	console.log(rows);
	res.sendStatus(200);
};

export const getAsesoriasCount = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT COUNT(*) FROM asesorias');
	console.log(rows[0]['COUNT(*)']);

	res.sendStatus(200);
};

export const saveAsesoria = async (req, res) => {
	const connection = await connect();
	const [results] = await connection.query(
		'INSERT INTO asesorias(nombre_alumno, tema, observaciones, fecha_inicio, fecha_fin, profesor) VALUES (?, ?, ?, ?, ?, ?)',
		[
			req.body.nombre_alumno,
			req.body.tema,
			req.body.observaciones,
			req.body.fecha_inicio,
			req.body.fecha_fin,
			req.body.profesor,
		]
	);
	res.sendStatus(200);
};

export const deleteAsesoria = async (req, res) => {
	const connection = await connect();
	const result = await connection.query('DELETE FROM asesorias WHERE id = ?', [
		req.params.id,
	]);

	res.sendStatus(200);
};

export const updateAsesoria = async (req, res) => {
	const connection = await connect();
	const results = await connection.query(
		'UPDATE asesorias SET ? WHERE id = ?',
		[req.body, req.params.id]
	);
	console.log(results);
	res.sendStatus(200);
};
