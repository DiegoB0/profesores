import { useNavigate } from 'react-router-dom';

function TutoriasCards() {
	const navigate = useNavigate();

	return (
		<section className="p-20 h-screen flex md:flex-row justify-center items-center bg-purple-500 flex-wrap sm:flex-col">
			<div
				className="h-4/5 w-2/5 relative cursor-pointer mb-20 mr-20"
				onClick={() => navigate('/tutorias/grupales')}
			>
				<div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
				<div className="absolute inset-0 transform  hover:-rotate-12 transition duration-300">
					<div className="h-full w-full bg-white rounded-lg shadow-2xl">
						<h1 className="flex align-items justify-center p-20 font-extrabold uppercase text-xl text-gray-700">
							Tutorías Grupales
						</h1>
					</div>
				</div>
			</div>

			<div
				className="h-4/5 w-2/5 relative cursor-pointer mb-20 ml-20"
				onClick={() => navigate('/tutorias/individuales')}
			>
				<div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
				<div className="absolute inset-0 transform  hover:rotate-12 transition duration-300">
					<div className="h-full w-full bg-white rounded-lg shadow-2xl">
						<h1 className="flex align-items justify-center p-20 font-extrabold uppercase text-xl text-gray-700">
							Tutorías Individuales
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TutoriasCards;
