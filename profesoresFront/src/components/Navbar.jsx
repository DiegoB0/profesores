import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<div className="bg-gray-200 text-gray-600 p-10">
			<button
				onClick={() => navigate('/home')}
				className="uppercase font-extrabold text-lg text-gray-600 hover:text-gray-500"
			>
				Inicio
			</button>
		</div>
	);
}
