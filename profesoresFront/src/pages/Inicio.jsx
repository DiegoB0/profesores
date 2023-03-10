import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login2 = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="full-h mt-20 py-6 flex flex-col justify-center sm:py-12">
				<div className="relative py-3 flex justify-center">
					<a className="font-display  text-3xl  leading-tight font-black text-center">
						<span className="link link-underline link-underline-black text-black ">
							!Bienvenido a tutorias! <br /> Administre asesorias, profesores y
							tutorias
						</span>
					</a>
				</div>
				<div className="relative py-3 flex justify-center mt-5">
					<h1 className="text-gray-500 uppercase text-4xl font-bold text-center">
						¿Nuevo por aqui? <br /> Comience por iniciar sesion
					</h1>
				</div>
				<div className="relative py-3 flex justify-center mt-10">
					<button
						className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50"
						onClick={() => navigate('/login')}
					>
						<span className="absolute left-0 block w-full h-0 transition-all bg-purple-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
						<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path>
							</svg>
						</span>
						<span className="relative">Siguiente</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Login2;
