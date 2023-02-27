import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useApp } from '../context/AppContext';

function ProfesoresPage() {
	const { profesores, loadProfesores, deleteProfesor } = useApp();

	const navigate = useNavigate();

	useEffect(() => {
		loadProfesores();
	}, []);

	function renderMain() {
		if (profesores.length === 0)
			return (
				<tr className="flex items-center w-full">
					<td className="w-full px-6 py-4 font-extrabold text-2xl text-gray-900 whitespace-nowrap dark:text-gray-700 ">
						No hay profesores
					</td>
				</tr>
			);

		return profesores.map((profesores) => (
			<tr
				className=" border-b bg-gray-200 hover:bg-gray-100"
				key={profesores.clave}
			>
				<td className="w-4 p-4">
					<div className="flex items-center"></div>
				</td>
				<th
					scope="row"
					className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700 "
				>
					{profesores.nombres} {profesores.apellidos}
				</th>
				<td className="px-6 py-4 text-gray-500">{profesores.email}</td>
				<td className="px-6 py-4 text-gray-500">{profesores.tcasa}</td>
				<td className="px-6 py-4 text-gray-500">{profesores.tcelular}</td>
				<td className="px-6 py-4 text-gray-600">
					<button
						onClick={() => deleteProfesor(profesores.clave)}
						className="mr-4"
					>
						<ion-icon name="trash-outline"></ion-icon>
					</button>
					<button
						onClick={() => navigate(`/profesores/edit/${profesores.clave}`)}
					>
						<ion-icon name="create-outline"></ion-icon>
					</button>
				</td>
			</tr>
		));
	}

	return (
		<div className="m-8 p-5 rounded-lg bg-white">
			<h1 className="flex align-items-center justify-center text-xl font-extrabold uppercase text-gray-700">
				Profesores
			</h1>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<div className="pb-4  bg-white rounded-lg">
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<div className="relative mt-1 rounded-lg">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-lg">
							<svg
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="table-search"
							className="block p-2 pl-10 text-sm text-gray-700 border rounded-lg w-80  focus:ring-blue-500 focus:border-blue-500 bg-gray-200 border-gray-600 placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search for items"
						/>
					</div>

					<div className="absolute inset-y-0 right-0">
						<button
							className="inline-flex items-center justify-center w-10 h-10 mr-2 text-white transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow-outline hover:bg-purple-600"
							onClick={() => navigate('/profesores/new')}
						>
							<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
								<path
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
									fillRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
					<thead className="text-xs uppercase bg-purple-700 text-white dark:bg-purple-600 rounded-lg">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">
									<label htmlFor="checkbox-all-search" className="sr-only">
										checkbox
									</label>
								</div>
							</th>
							<th scope="col" className="px-6 py-3">
								Nombre
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Telefono de Casa
							</th>
							<th scope="col" className="px-6 py-3">
								Telefono Celular
							</th>
							<th scope="col" className="px-6 py-3">
								Accion
							</th>
						</tr>
					</thead>
					<tbody className="rounded-lg">
						{/**Recorrer cada profesor */}
						{renderMain()}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ProfesoresPage;
