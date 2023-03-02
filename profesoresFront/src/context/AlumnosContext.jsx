import { createContext, useContext, useState } from 'react';
import { getAlumnosRequest } from '../api/api.alumnos';

export const AlumnosContext = createContext();

export const useAlumnos = () => {
	const context = useContext(AlumnosContext);
	if (!context) {
		throw new Error('useApp must be within a AlumnosContextProvider');
	}
	return context;
};

export const AlumnosContextProvider = ({ children }) => {
	const [alumnos, setAlumnos] = useState([]);

	async function loadAlumnos() {
		const response = await getAlumnosRequest();
		console.log(response.data.data);
		setAlumnos(response.data.data);
	}

	return (
		<AlumnosContext.Provider
			value={{
				alumnos,
				loadAlumnos,
			}}
		>
			{children}
		</AlumnosContext.Provider>
	);
};
