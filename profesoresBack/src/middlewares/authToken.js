import jwt from 'jsonwebtoken';
import { connect } from '../database';

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers['x-access-token'];

		if (!token) {
			return res.status(403).json({ message: 'No se envio ningun token' });
		}

		const decoded = jwt.verify(token, process.env.SECRET);

		const id = decoded.id;

		const connection = await connect();
		const [user] = await connection.query(
			'SELECT * FROM profesores WHERE clave = ?',
			id
		);

		if (!user[0]) {
			return res.status(404).json({ message: 'Usuario no encontrado' });
		}

		next();
	} catch (err) {
		return res.status(401).json({ message: 'No autorizado' });
	}
};
