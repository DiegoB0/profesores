import axios from 'axios';

export const getProfesoresRequest = async (headers) =>
	await axios.get('http://localhost:5000/profesores', { headers: headers });

export const createProfesorRequest = async (prof, headers) =>
	await axios.post('http://localhost:5000/profesores', prof, {
		headers: headers,
	});

export const deleteProfesorRequest = async (id, headers) =>
	await axios.delete(`http://localhost:5000/profesores/${id}`, {
		headers: headers,
	});

export const getProfesorRequest = async (id, headers) =>
	await axios.get(`http://localhost:5000/profesores/${id}`, {
		headers: headers,
	});

export const validateProfesorRequest = async (id) =>
	await axios.get(`http://localhost:5000/profesores/validate/${id}`);

export const updateProfesorRequest = async (id, newFields, headers) =>
	await axios.put(`http://localhost:5000/profesores/${id}`, newFields, {
		headers: headers,
	});

export const editProfileRequest = async (id, newFields) => {
	const form = new FormData();

	for (let key in newFields) {
		form.append(key, newFields[key]);
	}

	return await axios.put(
		`http://localhost:5000/profesores/profile/${id}`,
		form,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
	);
};
