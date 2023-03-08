import axios from 'axios';

export const getAsesoriasRequest = async (headers) =>
	await axios.get('http://localhost:5000/asesorias', { headers: headers });

export const createAsesoriaRequest = async (prof, headers) =>
	await axios.post('http://localhost:5000/asesorias', prof, {
		headers: headers,
	});

export const deleteAsesoriaRequest = async (id, headers) =>
	await axios.delete(`http://localhost:5000/asesorias/${id}`, {
		headers: headers,
	});

export const getAsesoriaRequest = async (id, headers) =>
	await axios.get(`http://localhost:5000/asesorias/${id}`, {
		headers: headers,
	});

export const updateAsesoriaRequest = async (id, newFields, headers) =>
	await axios.put(`http://localhost:5000/asesorias/${id}`, newFields, {
		headers: headers,
	});
