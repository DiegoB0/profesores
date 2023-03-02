import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlumnos } from '../../context/AlumnosContext';
import { useAsesorias } from '../../context/AsesoriasContext';
import { useProfesores } from '../../context/ProfesoresContext';

function AsesoriasAgregar() {
	const { createAsesoria, getAsesoria, updateAsesoria } = useAsesorias();
	const { alumnos, loadAlumnos } = useAlumnos();
	const { profesores, loadProfesores } = useProfesores();

	const notifyUpdated = () =>
		toast.success('Actualizado con exito!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const notifyPosted = () =>
		toast.success('Agregado con exito!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const [asesoria, setAsesorias] = useState({
		tema: '',
		observaciones: '',
		fecha_inicio: '',
		fecha_fin: '',
		profesor: '',
		alumno: '',
	});

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const loadAsesorias = async () => {
			if (params.id) {
				const asesoria = await getAsesoria(params.id);
				console.log(asesoria);
				setAsesorias({
					tema: asesoria.tema,
					observaciones: asesoria.observaciones,
					fecha_inicio: asesoria.fecha_inicio,
					fecha_fin: asesoria.fecha_fin,
					profesor: asesoria.profesor,
					alumno: asesoria.alumno,
				});
			}
		};
		loadAsesorias();
		loadAlumnos();
		loadProfesores();
	}, []);

	function renderAlumnos() {
		if (alumnos.length === 0)
			return <option>No hay alumnos registrados</option>;

		return alumnos.map((alumno) => (
			<option key={alumno.matricula} value={alumno.matricula}>
				{alumno.nombre}
			</option>
		));
	}

	function renderProfesores() {
		if (profesores.length === 0)
			return <option>No hay profesores registrados</option>;

		return profesores.map((profesor) => (
			<option key={profesor.clave} value={profesor.clave}>
				{profesor.nombres}
			</option>
		));
	}

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<h1 className="text-xl font-extrabold uppercase text-gray-700">
				{params.id ? 'Actualizar Asesoría' : 'Nueva Asesoría'}
			</h1>

			<Formik
				initialValues={asesoria}
				enableReinitialize={true}
				onSubmit={async (values) => {
					if (params.id) {
						await updateAsesoria(params.id, values);
						navigate('/asesorias');
						notifyUpdated();
					} else {
						await createAsesoria(values);
						navigate('/asesorias');
						notifyPosted();
					}

					setAsesorias({
						alumno: '',
						tema: '',
						observaciones: '',
						fecha_inicio: '',
						fecha_fin: '',
						tutor: '',
					});
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit} className="w-full max-w-lg mt-10">
						{/** Nuevo formulario con tailwind */}

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									htmlFor="message"
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Alumno
								</label>
								<div className="relative">
									<select
										className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										name="alumno"
										onChange={handleChange}
										value={values.alumno}
										required
									>
										<option>Elige el alumno</option>
										{renderAlumnos()}
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									htmlFor="message"
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Tema
								</label>

								<textarea
									id="message"
									rows="6"
									className="block p-2.5 w-full  bg-gray-50 rounded-lg border  dark:bg-gray-200  dark:placeholder-gray-400 dark:text-gray-700  resize-none text-base focus:outline-none focus:bg-white focus:border-gray-500"
									placeholder="Escribe el tema..."
									name="tema"
									onChange={handleChange}
									value={values.tema}
									required
								></textarea>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 mt-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Fecha Inicio
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="date"
									placeholder="Selecciona la fecha de nacimiento"
									name="fecha_inicio"
									onChange={handleChange}
									value={values.fecha_inicio}
									required
								/>
							</div>

							<div className="w-full md:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Fecha Fin
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="date"
									placeholder="Selecciona la fecha de nacimiento"
									name="fecha_fin"
									onChange={handleChange}
									value={values.fecha_fin}
									required
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									htmlFor="message"
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Observaciones
								</label>

								<textarea
									id="message"
									rows="6"
									className="block p-2.5 w-full  bg-gray-50 rounded-lg border  dark:bg-gray-200  dark:placeholder-gray-400 dark:text-gray-700  resize-none text-base focus:outline-none focus:bg-white focus:border-gray-500"
									placeholder="Escribe el tema..."
									name="observaciones"
									onChange={handleChange}
									value={values.observaciones}
									required
								></textarea>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									htmlFor="message"
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Tutor
								</label>
								<div className="relative">
									<select
										className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										name="profesor"
										onChange={handleChange}
										value={values.profesor}
										required
									>
										<option>Elige el profesor</option>
										{renderProfesores()}
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<ToastContainer />

						{/** Div del Boton */}
						<div className="block w-full mt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full"
							>
								{isSubmitting ? 'Guardando...' : 'Guardar'}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default AsesoriasAgregar;
