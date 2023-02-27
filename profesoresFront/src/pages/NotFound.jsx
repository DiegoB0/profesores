import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();

	return (
		<div className=" flex flex-col items-center justify-center mt-12">
			<h1 className="flex align-items-center justify-center text-5xl font-extrabold uppercase text-gray-700">
				UPSS, Esa ruta no Existe!
			</h1>
			<h2 className="mt-10 flex align-items-center justify-center text-xl font-extrabold uppercase text-gray-700">
				¿Te encuentras perdido?
			</h2>
			<div className="mt-20">
				<button
					className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-purple-500 rounded-xl group"
					onClick={() => navigate('/')}
				>
					<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-700 rounded group-hover:-mr-4 group-hover:-mt-4">
						<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
					</span>
					<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-purple-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
					<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
						Regresar al inicio
					</span>
				</button>
			</div>
		</div>
	);
}

export default NotFound;
