import { connect } from '../database';

export const getTutorias = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT tutoria_individual.id, tutoria_individual.fecha_inicio, tutoria_individual.fecha_fin, tutoria_individual.tipo_tutoria, tutoria_individual.acciones_implementadas, tutoria_individual.estatus, profesores.nombres as nombre_profesor, profesores.apellidos as apellido_profesor FROM tutoria_individual JOIN profesores ON tutoria_individual.profesor = profesores.clave'
	);
	console.log(rows);
	res.json({
		status: 200,
		data: rows,
	});
};

export const getTutoria = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT * FROM tutoria_individual WHERE id = ?',
		[req.params.id]
	);
	console.log(rows[0]);
	res.json(rows[0]);
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
	const tipo_tutoria = [
		req.body.atencion_academica +
			req.body.socioeconomica +
			req.body.personal +
			req.body.apoyo_conocimiento,
	];
	const [results] = await connection.query(
		'INSERT INTO tutoria_individual(fecha_inicio, fecha_fin, tipo_tutoria, acciones_implementadas, estatus, profesor) VALUES (?, ?, ?, ?, ?, ?)',
		[
			req.body.fecha_inicio,
			req.body.fecha_fin,
			tipo_tutoria,
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
	if (req.body.atencion_academica == null) {
		req.body.atencion_academica = '';
	}
	if (req.body.socioeconomica == null) {
		req.body.socioeconomica = '';
	}
	if (req.body.personal == null) {
		req.body.personal = '';
	}
	if (req.body.apoyo_conocimiento == null) {
		req.body.apoyo_conocimiento = '';
	}
	const tipo_tutoria = [
		req.body.atencion_academica +
			req.body.socioeconomica +
			req.body.personal +
			req.body.apoyo_conocimiento,
	];
	const results = await connection.query(
		'UPDATE tutoria_individual SET fecha_inicio = ?, fecha_fin = ?, tipo_tutoria = ?, acciones_implementadas = ?, estatus = ?, profesor = ? WHERE id = ?',
		[
			req.body.fecha_inicio,
			req.body.fecha_fin,
			tipo_tutoria,
			req.body.acciones_implementadas,
			req.body.estatus,
			req.body.profesor,
			req.params.id,
		]
	);
	console.log(results);
	res.sendStatus(200);
};
