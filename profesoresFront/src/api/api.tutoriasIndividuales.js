import axios from 'axios';

export const getTutoriasIndividualesRequest = async () =>
	await axios.get('http://localhost:5000/tutorias/individuales');

export const createTutoriaIndividualRequest = async (prof) =>
	await axios.post('http://localhost:5000/tutorias/individuales', prof);

export const deleteTutoriaIndividualRequest = async (id) =>
	await axios.delete(`http://localhost:5000/tutorias/individuales/${id}`);

export const getTutoriaIndividualRequest = async (id) =>
	await axios.get(`http://localhost:5000/tutorias/individuales/${id}`);

export const updateTutoriaIndividualRequest = async (id, newFields) =>
	await axios.put(
		`http://localhost:5000/tutorias/individuales/${id}`,
		newFields
	);
