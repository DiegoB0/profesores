import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfesores } from '../context/ProfesoresContext';
import { useUsers } from '../context/UsersContext';

export default function Navbar() {
	const { users, setUsers, userData, setUserData } = useUsers();
	const { profesoresFoto } = useProfesores();
	const navigate = useNavigate();

	const navigateTo = () => {
		users.length > 0 ? navigate('/home') : navigate('/');
	};
	const logout = () => {
		setUsers([]);
		setUserData([]);
	};

	return (
		<div className="bg-purple-700 text-white p-10 flex justify-between ">
			<button
				onClick={() => navigateTo()}
				className="uppercase font-extrabold text-lg text-white mr-5 items-start ml-36 hover:skew-y-3"
			>
				{users.length > 0 ? 'Home' : 'Inicio'}
			</button>

			{users.length > 0 ? (
				<div className="flex">
					{profesoresFoto.foto ? (
						<button onClick={() => navigate(`/perfil/${userData.clave}`)}>
							<img
								src={profesoresFoto.foto}
								alt="Perfil"
								title="Perfil"
								style={{ height: '50px', width: '50px', borderRadius: 50 }}
								className="transform motion-safe:hover:scale-110 ease-in duration-300 hover:shadow-2xl"
							/>
						</button>
					) : (
						<button onClick={() => navigate(`/perfil/${userData.clave}`)}>
							<img
								src={userData.foto}
								alt="Perfil"
								title="Perfil"
								style={{ height: '50px', width: '50px', borderRadius: 50 }}
								className="transform motion-safe:hover:scale-110 ease-in duration-300 hover:shadow-2xl"
							/>
						</button>
					)}

					<button
						onClick={logout}
						className="rounded ml-5 relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white mr-36"
					>
						<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-28 group-hover:h-28 opacity-10"></span>
						<span className="relative">Cerrar Sesion</span>
					</button>
				</div>
			) : (
				<div>
					<button
						onClick={() => navigate('/login')}
						className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white mr-36"
					>
						<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-28 group-hover:h-28 opacity-10"></span>
						<span className="relative">Iniciar Sesion</span>
					</button>
				</div>
			)}
		</div>
	);
}
