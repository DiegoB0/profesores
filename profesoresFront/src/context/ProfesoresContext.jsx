import { createContext, useContext, useState } from 'react';
import {
	createProfesorRequest,
	deleteProfesorRequest,
	editProfileRequest,
	getProfesoresRequest,
	getProfesorRequest,
	updateProfesorRequest,
} from '../api/api.profesores';
import { useUsers } from '../context/UsersContext';

export const ProfesoresContext = createContext();

export const useProfesores = () => {
	const context = useContext(ProfesoresContext);
	if (!context) {
		throw new Error('useApp must be within a ProfesoresContextProvider');
	}
	return context;
};

export const ProfesoresContextProvider = ({ children }) => {
	const [profesores, setProfesores] = useState([]);
	const [profesoresFoto, setProfesoresFoto] = useState([]);
	const { users } = useUsers();

	let headers = {
		'x-access-token': users,
	};

	async function loadProfesores() {
		const response = await getProfesoresRequest(headers);
		console.log(response.data.data);
		setProfesores(response.data.data);
	}

	const deleteProfesor = async (id) => {
		try {
			const response = await deleteProfesorRequest(id, headers);
			loadProfesores();
		} catch (error) {
			console.error(error);
		}
	};

	const createProfesor = async (profesor) => {
		try {
			const response = await createProfesorRequest(profesor, headers);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const getProfesor = async (id) => {
		try {
			const response = await getProfesorRequest(id, headers);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const validateProfesor = async (id) => {
		try {
			const response = await getProfesorRequest(id, headers);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const updateProfesor = async (id, newFields) => {
		try {
			const response = await updateProfesorRequest(id, newFields, headers);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	const editProfile = async (id, newFields) => {
		try {
			const response = await editProfileRequest(id, newFields);
			// console.log(response.data.data.email);
			return response.data.data;
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ProfesoresContext.Provider
			value={{
				profesores,
				loadProfesores,
				deleteProfesor,
				createProfesor,
				getProfesor,
				updateProfesor,
				validateProfesor,
				editProfile,
				profesoresFoto,
				setProfesoresFoto,
			}}
		>
			{children}
		</ProfesoresContext.Provider>
	);
};
