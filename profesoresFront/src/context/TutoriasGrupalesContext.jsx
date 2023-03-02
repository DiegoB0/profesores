import { createContext, useContext, useState } from 'react';
import {
	createTutoriaGrupalRequest,
	deleteTutoriaGrupalRequest,
	getTutoriaGrupalRequest,
	getTutoriasGrupalesRequest,
	updateTutoriaGrupalRequest,
} from '../api/api.tutoriasGrupales';

export const TutoriasGrupalesContext = createContext();

export const useTutoriasGrupales = () => {
	const context = useContext(TutoriasGrupalesContext);
	if (!context) {
		throw new Error(
			'useTutoriasGrupales must be within a TutoriasGrupalesContextProvider'
		);
	}
	return context;
};

export const TutoriasGrupalesContextProvider = ({ children }) => {
	const [tutoriasGrupales, setTutoriasGrupales] = useState([]);

	async function loadTutoriasGrupales() {
		const response = await getTutoriasGrupalesRequest();
		console.log(response);
		setTutoriasGrupales(response.data.data);
	}

	const deleteTutoriaGrupal = async (id) => {
		try {
			const response = await deleteTutoriaGrupalRequest(id);
			loadTutoriasGrupales();
		} catch (error) {
			console.error(error);
		}
	};

	const createTutoriaGrupal = async (tutoria) => {
		try {
			const response = await createTutoriaGrupalRequest(tutoria);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const getTutoriaGrupal = async (id) => {
		try {
			const response = await getTutoriaGrupalRequest(id);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const updateTutoriaGrupal = async (id, newFields) => {
		try {
			const response = await updateTutoriaGrupalRequest(id, newFields);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TutoriasGrupalesContext.Provider
			value={{
				tutoriasGrupales,
				loadTutoriasGrupales,
				getTutoriaGrupal,
				deleteTutoriaGrupal,
				createTutoriaGrupal,
				updateTutoriaGrupal,
			}}
		>
			{children}
		</TutoriasGrupalesContext.Provider>
	);
};
