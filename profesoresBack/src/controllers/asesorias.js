import { connect } from '../database';

export const getAsesorias = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT alumnos.nombre as nombre_alumno, alumnos.aPaterno as apellido_alumno, alumnos.matricula, profesores.nombres as nombre_profesor, profesores.apellidos as apellido_profesor, asesorias.tema, asesorias.observaciones, asesorias.fecha_inicio, asesorias.fecha_fin, asesorias.id FROM asesorias JOIN profesores ON asesorias.profesor = profesores.clave JOIN alumnos ON asesorias.alumno = alumnos.matricula'
	);
	console.log(rows);
	res.json({
		status: 200,
		data: rows,
	});
};

export const getAsesoria = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query(
		'SELECT * FROM asesorias WHERE id = ?',
		[req.params.id]
	);
	console.log(rows);
	res.json(rows[0]);
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
		'INSERT INTO asesorias(tema, observaciones, fecha_inicio, fecha_fin, profesor, alumno) VALUES (?, ?, ?, ?, ?, ?)',
		[
			req.body.tema,
			req.body.observaciones,
			req.body.fecha_inicio,
			req.body.fecha_fin,
			req.body.profesor,
			req.body.alumno,
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
