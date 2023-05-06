import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
import CustomTextarea from '../../components/CustomTextarea';
import { useProfesores } from '../../context/ProfesoresContext';
import { useTutoriasIndividuales } from '../../context/TutoriasIndividualesContext';
import { tutoriasSchema } from '../../schemas/tutorias';

const TutoIndividualesAgregar = () => {
	const {
		createTutoriaIndividual,
		getTutoriaIndividual,
		updateTutoriaIndividual,
	} = useTutoriasIndividuales();
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

	const [tutorias, setTutorias] = useState({
		fecha_inicio: '',
		fecha_fin: '',
		atencion_academica: '',
		socioeconomica: '',
		personal: '',
		apoyo_conocimiento: '',
		acciones_implementadas: '',
		estatus: '',
		profesor: '',
	});

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const loadTutorias = async () => {
			if (params.id) {
				const tutoria = await getTutoriaIndividual(params.id);
				console.log(tutoria);
				setTutorias({
					fecha_inicio: tutoria.fecha_inicio,
					fecha_fin: tutoria.fecha_fin,
					tipo_tutoria: '',
					acciones_implementadas: tutoria.acciones_implementadas,
					estatus: tutoria.estatus,
					profesor: tutoria.profesor,
				});
			}
		};
		loadTutorias();
		loadProfesores();
	}, []);

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
				{params.id ? 'Actualizar Tutoría' : 'Nueva Tutoría'}
			</h1>

			<Formik
				initialValues={tutorias}
				validationSchema={tutoriasSchema}
				enableReinitialize={true}
				onSubmit={async (values) => {
					if (params.id) {
						await updateTutoriaIndividual(params.id, values);
						navigate('/tutorias/individuales');
						notifyUpdated();
					} else {
						await createTutoriaIndividual(values);
						navigate('/tutorias/individuales');
						notifyPosted();
					}

					setTutorias({
						fecha_inicio: '',
						fecha_fin: '',
						atencion_academica: '',
						socioeconomica: '',
						personal: '',
						apoyo_conocimiento: '',
						acciones_implementadas: '',
						estatus: '',
						profesor: '',
					});
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form
						onSubmit={handleSubmit}
						className="w-full max-w-lg mt-10 mb-10 rounded-xl bg-white p-10"
					>
						{/** Nuevo formulario con tailwind */}

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									htmlFor="message"
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Profesor
								</label>
								<div className="relative">
									<CustomSelect
										name="profesor"
										onChange={handleChange}
										value={values.profesor}
									>
										<option value="">Elige el profesor</option>
										{renderProfesores()}
									</CustomSelect>
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
									Tipo Tutoría
								</label>

								<ul className="items-center w-full text-sm font-medium border-gray-200 rounded-lg sm:flex bg-gray-200 ">
									<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
										<div className="flex items-center pl-3">
											<input
												name="atencion_academica"
												onChange={handleChange}
												value="Atencion academica "
												id="vue-checkbox-list"
												type="checkbox"
												className="w-4 h-4 bg-gray-200text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
											<label
												htmlFor="vue-checkbox-list"
												className="w-full py-3 ml-2 text-sm font-medium text-gray-700 dark:text-gray-400"
											>
												Atencion Academica
											</label>
										</div>
									</li>
									<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
										<div className="flex items-center pl-3">
											<input
												name="socioeconomica"
												onChange={handleChange}
												value="Socioeconomica "
												id="react-checkbox-list"
												type="checkbox"
												className="w-4 h-4 bg-gray-200text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
											<label
												htmlFor="react-checkbox-list"
												className="w-full py-3 ml-2 text-sm font-medium text-gray-700 dark:text-gray-400"
											>
												Socioeconomica
											</label>
										</div>
									</li>
									<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
										<div className="flex items-center pl-3">
											<input
												name="personal"
												onChange={handleChange}
												value="Personal "
												id="react-checkbox-list"
												type="checkbox"
												className="w-4 h-4 bg-gray-200text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
											<label
												htmlFor="react-checkbox-list"
												className="w-full py-3 ml-2 text-sm font-medium text-gray-700 dark:text-gray-400"
											>
												Personal
											</label>
										</div>
									</li>
									<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
										<div className="flex items-center pl-3">
											<input
												name="apoyo_conocimiento"
												onChange={handleChange}
												value="Apoyo al conocimiento "
												id="angular-checkbox-list"
												type="checkbox"
												className="w-4 h-4 bg-gray-200text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
											<label
												htmlFor="angular-checkbox-list"
												className="w-full py-3 ml-2 text-sm font-medium text-gray-700 dark:text-gray-400"
											>
												Apoyo area conocimiento
											</label>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 mt-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Fecha Inicio"
									type="date"
									placeholder="Selecciona la fecha de nacimiento"
									name="fecha_inicio"
									onChange={handleChange}
									value={values.fecha_inicio}
								/>
							</div>

							<div className="w-full md:w-1/2 px-3">
								<CustomInput
									label="Fecha Fin"
									type="date"
									placeholder="Selecciona la fecha de nacimiento"
									name="fecha_fin"
									onChange={handleChange}
									value={values.fecha_fin}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<CustomTextarea
									label="Acciones Implementadas"
									id="message"
									rows="6"
									placeholder="Escribe el tema..."
									name="acciones_implementadas"
									onChange={handleChange}
									value={values.acciones_implementadas}
								></CustomTextarea>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									htmlFor="message"
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Estatus
								</label>
								<div className="relative">
									<CustomSelect
										name="estatus"
										onChange={handleChange}
										value={values.estatus}
									>
										<option value="">Elige el estatus</option>
										<option value="En proceso">En Proceso</option>
										<option value="Concluida">Concluida</option>
									</CustomSelect>
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
};

export default TutoIndividualesAgregar;
