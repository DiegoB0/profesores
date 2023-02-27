import { connect } from '../database';

export const getTutorias = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM tutoria_individual');
	console.log(rows);
	res.sendStatus(200);
};

export const getTutoria = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT * FROM tutoria_individual WHERE id = ?',
		[req.params.id]
	);
	console.log(rows[0]);
	res.sendStatus(200);
};

export const getTutoriasCount = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT COUNT(*) FROM tutoria_individual'
	);
	console.log(rows[0]['COUNT(*)']);

	res.sendStatus(200);
};

export const saveTutoria = async (req, res) => {
	const connection = await connect();
	const [results] = await connection.query(
		'INSERT INTO tutoria_individual(fecha_inicio, fecha_fin, tipo_tutoria, acciones_implementadas, estatus, profesor) VALUES (?, ?, ?, ?, ?, ?)',
		[
			req.body.fecha_inicio,
			req.body.fecha_fin,
			req.body.tipo_tutoria,
			req.body.acciones_implementadas,
			req.body.estatus,
			req.body.profesor,
		]
	);

	res.sendStatus(200);
};

export const deleteTutoria = async (req, res) => {
	const connection = await connect();
	const result = await connection.query(
		'DELETE FROM tutoria_individual WHERE id = ?',
		[req.params.id]
	);
	res.sendStatus(200);
};

export const updateTutoria = async (req, res) => {
	const connection = await connect();
	const results = await connection.query(
		'UPDATE tutoria_individual SET ? WHERE id = ?',
		[req.body, req.params.id]
	);
	console.log(results);
	res.sendStatus(200);
};
