import { Navigate, Outlet } from 'react-router-dom';
import { useUsers } from '../context/UsersContext';

const ProtectedRoute = ({ children }) => {
	const { users } = useUsers();

	if (users == '') {
		return <Navigate to="/" />;
	}

	return children ? children : <Outlet />;
};

export default ProtectedRoute;
