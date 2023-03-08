import axios from 'axios';

export const getTutoriasGrupalesRequest = async (headers) =>
	await axios.get('http://localhost:5000/tutorias/grupales', {
		headers: headers,
	});

export const createTutoriaGrupalRequest = async (prof, headers) =>
	await axios.post('http://localhost:5000/tutorias/grupales', prof, {
		headers: headers,
	});

export const deleteTutoriaGrupalRequest = async (id, headers) =>
	await axios.delete(`http://localhost:5000/tutorias/grupales/${id}`, {
		headers: headers,
	});

export const getTutoriaGrupalRequest = async (id, headers) =>
	await axios.get(`http://localhost:5000/tutorias/grupales/${id}`, {
		headers: headers,
	});

export const updateTutoriaGrupalRequest = async (id, newFields, headers) =>
	await axios.put(`http://localhost:5000/tutorias/grupales/${id}`, newFields, {
		headers: headers,
	});
