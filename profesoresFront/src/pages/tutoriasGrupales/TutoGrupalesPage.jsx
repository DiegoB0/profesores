import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { useTutoriasGrupales } from '../../context/TutoriasGrupalesContext';

const TutoGrupalesPage = () => {
	const { tutoriasGrupales, loadTutoriasGrupales, deleteTutoriaGrupal } =
		useTutoriasGrupales();

	const notifyEliminado = () =>
		toast.success('Tutoria eliminada con exito!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	function confirmDeleteDialog(id) {
		Swal.fire({
			title: 'Advertencia',
			text: '¿Esta seguro que desea eliminar la tutoria?',
			icon: 'warning',
			showDenyButton: true,
			denyButtonText: 'No',
			confirmButtonText: 'Sí',
			confirmButtonColor: '#9333EA',
			denyButtonColor: '#e04343',
		}).then((response) => {
			if (response.isConfirmed) {
				deleteTutoriaGrupal(id);
				notifyEliminado();
			}
		});
	}
	const navigate = useNavigate();

	useEffect(() => {
		loadTutoriasGrupales();
	}, []);

	function renderMain() {
		if (tutoriasGrupales.length === 0)
			return (
				<tr className="flex items-center w-full">
					<td className="w-full px-6 py-4 font-extrabold text-2xl text-gray-900 whitespace-nowrap dark:text-gray-700 ">
						No hay tutorías
					</td>
				</tr>
			);

		return tutoriasGrupales.map((tutoria) => (
			<tr className=" border-b bg-gray-200 hover:bg-gray-100" key={tutoria.id}>
				<td className="w-4 p-4">
					<div className="flex items-center"></div>
				</td>
				<th
					scope="row"
					className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700 "
				>
					{tutoria.nombre_profesor}
				</th>
				<td className="px-6 py-4 text-gray-500">{tutoria.tipo_tutoria}</td>
				<td className="px-6 py-4 text-gray-500">
					{tutoria.acciones_implementadas}
				</td>
				<td className="px-6 py-4 text-gray-500">
					{tutoria.fecha_inicio} {tutoria.fecha_fin}
				</td>
				<td className="px-6 py-4 text-gray-500">{tutoria.estatus}</td>
				<td className="px-6 py-4 text-gray-600">
					<button
						onClick={() => confirmDeleteDialog(tutoria.id)}
						className="mr-4"
					>
						<ion-icon name="trash-outline"></ion-icon>
					</button>
					<button
						onClick={() => navigate(`/tutorias/grupales/edit/${tutoria.id}`)}
					>
						<ion-icon name="create-outline"></ion-icon>
					</button>
				</td>
			</tr>
		));
	}

	return (
		<div className="m-20 p-10 rounded-xl bg-white">
			<h1 className="flex align-items-center justify-center text-xl font-extrabold uppercase text-gray-700">
				Tutorías
			</h1>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<div className="pb-4  bg-white rounded-lg">
					<label htmlFor="table-search" className="sr-only">
						Buscar
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
							className="block p-2 pl-10 text-sm text-gray-700 border rounded-lg w-80 bg-gray-200 placeholder-gray-600 border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
							placeholder="Buscar asesorias..."
						/>
					</div>

					<div className="absolute inset-y-0 right-0">
						<button
							className="inline-flex items-center justify-center w-10 h-10 mr-2 text-white transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow-outline hover:bg-purple-600"
							onClick={() => navigate('/tutorias/grupales/new')}
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
								Profesor
							</th>
							<th scope="col" className="px-6 py-3">
								Tipo de tutoria
							</th>
							<th scope="col" className="px-6 py-3">
								Acciones Implementadas
							</th>
							<th scope="col" className="px-6 py-3">
								Fecha
							</th>
							<th scope="col" className="px-6 py-3">
								Estatus
							</th>
							<th scope="col" className="px-6 py-3">
								Acción
							</th>
						</tr>
					</thead>
					<tbody className="rounded-lg">
						{/**Recorrer cada profesor */}
						{renderMain()}
					</tbody>
				</table>
				<ToastContainer />
			</div>
		</div>
	);
};
export default TutoGrupalesPage;
