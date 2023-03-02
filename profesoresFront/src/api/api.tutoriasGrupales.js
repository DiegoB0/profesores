import axios from 'axios';

export const getTutoriasGrupalesRequest = async () =>
	await axios.get('http://localhost:5000/tutorias/grupales');

export const createTutoriaGrupalRequest = async (prof) =>
	await axios.post('http://localhost:5000/tutorias/grupales', prof);

export const deleteTutoriaGrupalRequest = async (id) =>
	await axios.delete(`http://localhost:5000/tutorias/grupales/${id}`);

export const getTutoriaGrupalRequest = async (id) =>
	await axios.get(`http://localhost:5000/tutorias/grupales/${id}`);

export const updateTutoriaGrupalRequest = async (id, newFields) =>
	await axios.put(`http://localhost:5000/tutorias/grupales/${id}`, newFields);
