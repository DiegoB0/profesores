import { createContext, useContext, useState } from 'react';
import {
	createTutoriaGrupalRequest,
	deleteTutoriaGrupalRequest,
	getTutoriaGrupalRequest,
	getTutoriasGrupalesRequest,
	updateTutoriaGrupalRequest,
} from '../api/api.tutoriasGrupales';
import { useUsers } from '../context/UsersContext';

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
	const { users } = useUsers();

	let headers = {
		'x-access-token': users,
	};

	async function loadTutoriasGrupales() {
		const response = await getTutoriasGrupalesRequest(headers);
		console.log(response);
		setTutoriasGrupales(response.data.data);
	}

	const deleteTutoriaGrupal = async (id) => {
		try {
			const response = await deleteTutoriaGrupalRequest(id, headers);
			loadTutoriasGrupales();
		} catch (error) {
			console.error(error);
		}
	};

	const createTutoriaGrupal = async (tutoria) => {
		try {
			const response = await createTutoriaGrupalRequest(tutoria, headers);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const getTutoriaGrupal = async (id) => {
		try {
			const response = await getTutoriaGrupalRequest(id, headers);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const updateTutoriaGrupal = async (id, newFields) => {
		try {
			const response = await updateTutoriaGrupalRequest(id, newFields, headers);
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
