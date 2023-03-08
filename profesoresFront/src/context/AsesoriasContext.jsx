import { createContext, useContext, useState } from 'react';
import {
	createAsesoriaRequest,
	deleteAsesoriaRequest,
	getAsesoriaRequest,
	getAsesoriasRequest,
	updateAsesoriaRequest,
} from '../api/api.asesorias';
import { useUsers } from '../context/UsersContext';

export const AsesoriasContext = createContext();

export const useAsesorias = () => {
	const context = useContext(AsesoriasContext);
	if (!context) {
		throw new Error('useApp must be within a AppContextProvider');
	}
	return context;
};

export const AsesoriasContextProvider = ({ children }) => {
	const [asesorias, setAsesorias] = useState([]);
	const { users } = useUsers();

	let headers = {
		'x-access-token': users,
	};

	async function loadAsesorias() {
		const response = await getAsesoriasRequest(headers);
		console.log(response.data.data);
		setAsesorias(response.data.data);
	}

	const deleteAsesoria = async (id) => {
		try {
			const response = await deleteAsesoriaRequest(id, headers);
			loadAsesorias();
		} catch (error) {
			console.error(error);
		}
	};

	const createAsesoria = async (asesoria) => {
		try {
			const response = await createAsesoriaRequest(asesoria, headers);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const getAsesoria = async (id) => {
		try {
			const response = await getAsesoriaRequest(id, headers);
			return response.data;
		} catch {
			console.error(error);
		}
	};

	const updateAsesoria = async (id, newFields) => {
		try {
			const response = await updateAsesoriaRequest(id, newFields, headers);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AsesoriasContext.Provider
			value={{
				asesorias,
				loadAsesorias,
				deleteAsesoria,
				createAsesoria,
				getAsesoria,
				updateAsesoria,
			}}
		>
			{children}
		</AsesoriasContext.Provider>
	);
};
