import axios from 'axios';

export const getAsesoriasRequest = async () =>
	await axios.get('http://localhost:5000/asesorias');

export const createAsesoriaRequest = async (prof) =>
	await axios.post('http://localhost:5000/asesorias', prof);

export const deleteAsesoriaRequest = async (id) =>
	await axios.delete(`http://localhost:5000/asesorias/${id}`);

export const getAsesoriaRequest = async (id) =>
	await axios.get(`http://localhost:5000/asesorias/${id}`);

export const updateAsesoriaRequest = async (id, newFields) =>
	await axios.put(`http://localhost:5000/asesorias/${id}`, newFields);
