import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
import CustomTextarea from '../../components/CustomTextarea';
import { useAlumnos } from '../../context/AlumnosContext';
import { useAsesorias } from '../../context/AsesoriasContext';
import { useProfesores } from '../../context/ProfesoresContext';
import { asesoriasSchema } from '../../schemas/asesorias';

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
				validationSchema={asesoriasSchema}
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
					<Form
						onSubmit={handleSubmit}
						className="w-full max-w-lg mt-10 mb-10 bg-white rounded-xl p-10"
					>
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
									<CustomSelect
										name="alumno"
										onChange={handleChange}
										value={values.alumno}
									>
										<option value="">Elige el alumno</option>
										{renderAlumnos()}
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
								<CustomTextarea
									label="Tema"
									id="message"
									rows="6"
									placeholder="Escribe el tema..."
									name="tema"
									onChange={handleChange}
									value={values.tema}
								></CustomTextarea>
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
									label="Observaciones"
									id="message"
									rows="6"
									placeholder="Escribe el tema..."
									name="observaciones"
									onChange={handleChange}
									value={values.observaciones}
								></CustomTextarea>
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
									<CustomSelect
										name="profesor"
										onChange={handleChange}
										value={values.profesor}
									>
										<option>Elige el profesor</option>
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
