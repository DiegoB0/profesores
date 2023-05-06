import { createContext, useContext, useState } from 'react';
import { authUsersRequest } from '../api/api.login';

export const UsersContext = createContext();
export const useUsers = () => {
	const context = useContext(UsersContext);
	if (!context) {
		throw new Error('useUsers must be within a UsersContextProvider');
	}
	return context;
};

export const UsersContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [userData, setUserData] = useState([]);

	const authUsers = async (profesor) => {
		try {
			const response = await authUsersRequest(profesor);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<UsersContext.Provider
			value={{
				users,
				authUsers,
				setUsers,
				userData,
				setUserData,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};
