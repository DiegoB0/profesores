import { createContext, useContext, useState } from 'react';
import {
	createProfesorRequest,
	deleteProfesorRequest,
	getProfesoresRequest,
	getProfesorRequest,
	updateProfesorRequest,
} from '../api/api.profesores';

export const AppContext = createContext();

export const useApp = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useApp must be within a AppContextProvider');
	}
	return context;
};

export const AppContextProvider = ({ children }) => {
	const [profesores, setProfesores] = useState([]);

	async function loadProfesores() {
		const response = await getProfesoresRequest();
		setProfesores(response.data.data);
	}

	const deleteProfesor = async (id) => {
		try {
			const response = await deleteProfesorRequest(id);
			loadProfesores();
		} catch (error) {
			console.error(error);
		}
	};
	const createProfesor = async (profesor) => {
		try {
			const response = await createProfesorRequest(profesor);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const getProfesor = async (id) => {
		try {
			const response = await getProfesorRequest(id);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const updateProfesor = async (id, newFields) => {
		try {
			const response = await updateProfesorRequest(id, newFields);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AppContext.Provider
			value={{
				profesores,
				loadProfesores,
				deleteProfesor,
				createProfesor,
				getProfesor,
				updateProfesor,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
