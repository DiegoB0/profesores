import { createContext, useContext, useState } from 'react';
import {
	createTutoriaIndividualRequest,
	deleteTutoriaIndividualRequest,
	getTutoriaIndividualRequest,
	getTutoriasIndividualesRequest,
	updateTutoriaIndividualRequest,
} from '../api/api.tutoriasIndividuales';

export const TutoriasIndividualesContext = createContext();

export const useTutoriasIndividuales = () => {
	const context = useContext(TutoriasIndividualesContext);
	if (!context) {
		throw new Error(
			'useTutoriasIndividuales must be within a TutoriasIndividualesContextProvider'
		);
	}
	return context;
};

export const TutoriasIndividualesContextProvider = ({ children }) => {
	const [tutoriasIndividuales, setTutoriasIndividuales] = useState([]);

	async function loadTutoriasIndividuales() {
		const response = await getTutoriasIndividualesRequest();
		console.log(response);
		setTutoriasIndividuales(response.data.data);
	}

	const deleteTutoriaIndividual = async (id) => {
		try {
			const response = await deleteTutoriaIndividualRequest(id);
			loadTutoriasIndividuales();
		} catch (error) {
			console.error(error);
		}
	};

	const createTutoriaIndividual = async (tutoria) => {
		try {
			const response = await createTutoriaIndividualRequest(tutoria);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const getTutoriaIndividual = async (id) => {
		try {
			const response = await getTutoriaIndividualRequest(id);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const updateTutoriaIndividual = async (id, newFields) => {
		try {
			const response = await updateTutoriaIndividualRequest(id, newFields);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TutoriasIndividualesContext.Provider
			value={{
				tutoriasIndividuales,
				loadTutoriasIndividuales,
				getTutoriaIndividual,
				deleteTutoriaIndividual,
				createTutoriaIndividual,
				updateTutoriaIndividual,
			}}
		>
			{children}
		</TutoriasIndividualesContext.Provider>
	);
};
