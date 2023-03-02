import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		let style1 = document.createElement('style');
		let style2 = document.createElement('style');
		let after = document.getElementById('after-te1');
		let before = document.getElementById('before-te1');
		const setKeyframesRules = (n, start = 0) => {
			let steps = '';
			for (let i = start; i <= n; i++) {
				let percent = (i / n) * 100;
				let random1 = `${Math.random() * 150}px`;
				let random2 = `${Math.random() * 150}px`;
				steps = steps.concat(
					`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `
				);
			}
			return steps;
		};
		let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
		let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;
		style1.innerHTML = keyframes1;
		style2.innerHTML = keyframes2;
		after.appendChild(style1);
		before.appendChild(style2);
		after.style.animation =
			'glitch-anim-1 2.5s infinite linear alternate-reverse';
		before.style.animation =
			'glitch-anim-2 3s infinite linear alternate-reverse';
	}, []);

	return (
		<>
			<div className="h-full flex justify-center items-center mt-10">
				<h1 className="text-black text-4xl font-bold uppercase relative inline-block">
					<span
						id="before-te1"
						className="absolute top-0 left-0.5 w-full h-full bg-transparent"
						style={{
							textShadow: '-2px 0 #49FC00',
							clipPath: 'rect(24px, 550px, 90px, 0)',
						}}
						aria-hidden="true"
					>
						¡Bienvenido! ¿Que desea hacer?
					</span>{' '}
					{/* glitch::before */}
					¡Bienvenido! ¿Que desea hacer?
					<span
						id="after-te1"
						className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
						style={{
							textShadow: '-2px 0 spin(#49FC00, 180)',
							clipPath: 'rect(85px, 550px, 140px, 0)',
						}}
						aria-hidden="true"
					>
						!Bienvenido! ¿Que desea hacer?
					</span>{' '}
					{/* glitch::after */}
				</h1>
			</div>

			<div className="flex justify-center items-center mt-20">
				<button
					className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50"
					onClick={() => navigate('/profesores')}
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
					<span className="relative">Ir a profesores</span>
				</button>
			</div>

			<div className="flex justify-center items-center mt-10">
				<button
					className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50"
					onClick={() => navigate('/asesorias')}
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
					<span className="relative">Ir a asesorías</span>
				</button>
			</div>

			<div className="flex justify-center items-center mt-10">
				<button
					className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50"
					onClick={() => navigate('/tutorias')}
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
					<span className="relative">Ir a tutorías</span>
				</button>
			</div>
		</>
	);
};

export default Home;
