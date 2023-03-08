import axios from 'axios';

export const getTutoriasIndividualesRequest = async (headers) =>
	await axios.get('http://localhost:5000/tutorias/individuales', {
		headers: headers,
	});

export const createTutoriaIndividualRequest = async (prof, headers) =>
	await axios.post('http://localhost:5000/tutorias/individuales', prof, {
		headers: headers,
	});

export const deleteTutoriaIndividualRequest = async (id, headers) =>
	await axios.delete(`http://localhost:5000/tutorias/individuales/${id}`, {
		headers: headers,
	});

export const getTutoriaIndividualRequest = async (id, headers) =>
	await axios.get(`http://localhost:5000/tutorias/individuales/${id}`, {
		headers: headers,
	});

export const updateTutoriaIndividualRequest = async (id, newFields, headers) =>
	await axios.put(
		`http://localhost:5000/tutorias/individuales/${id}`,
		newFields,
		{
			headers: headers,
		}
	);
