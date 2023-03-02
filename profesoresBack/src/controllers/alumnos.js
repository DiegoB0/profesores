import { connect } from '../database';

export const getAlumnos = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM alumnos');
	console.log(rows);
	res.json({
		status: 200,
		data: rows,
	});
};
