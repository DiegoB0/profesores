import axios from 'axios';

export const authUsersRequest = async (user) =>
	await axios.post('http://localhost:5000/profesores/login', user);
