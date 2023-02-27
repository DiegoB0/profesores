import axios from 'axios';

export const getProfesoresRequest = async () =>
	await axios.get('http://localhost:5000/profesores');

export const createProfesorRequest = async (prof) =>
	await axios.post('http://localhost:5000/profesores', prof);

export const deleteProfesorRequest = async (id) =>
	await axios.delete(`http://localhost:5000/profesores/${id}`);

export const getProfesorRequest = async (id) =>
	await axios.get(`http://localhost:5000/profesores/${id}`);

export const updateProfesorRequest = async (id, newFields) =>
	await axios.put(`http://localhost:5000/profesores/${id}`, newFields);
