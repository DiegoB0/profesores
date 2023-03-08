import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
import { useProfesores } from '../../context/ProfesoresContext';
import { profesoresSchema } from '../../schemas/profesores';

function ProfesoresAgregar() {
	const { createProfesor, getProfesor, updateProfesor } = useProfesores();

	const notifyProfesorUpdated = () =>
		toast.success('Profesor actualizado con exito!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const notifyProfesorPosted = () =>
		toast.success('Profesor agregado con exito!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const [profesor, setProfesor] = useState({
		clave: '',
		nombres: '',
		apellidos: '',
		fnacimiento: '',
		email: '',
		sexo: '',
		estadocivil: '',
		tcasa: '',
		curp: '',
		tcelular: '',
		calle: '',
		colonia: '',
		cp: '',
		municipio: '',
		estado: '',
		estatus: '',
		password: '',
	});

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const loadProfesor = async () => {
			if (params.id) {
				const profesor = await getProfesor(params.id);
				console.log(profesor);
				setProfesor({
					clave: profesor.clave,
					nombres: profesor.nombres,
					apellidos: profesor.apellidos,
					fnacimiento: profesor.fnacimiento,
					email: profesor.email,
					sexo: profesor.sexo,
					estadocivil: profesor.estadocivil,
					tcasa: profesor.tcasa,
					curp: profesor.curp,
					tcelular: profesor.tcelular,
					calle: profesor.calle,
					colonia: profesor.colonia,
					cp: profesor.cp,
					municipio: profesor.municipio,
					estado: profesor.estado,
					estatus: profesor.estatus,
					password: '',
				});
			}
		};
		loadProfesor();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<h1 className="text-xl font-extrabold uppercase text-gray-700">
				{params.id ? 'Actualizar Profesor' : 'Nuevo Profesor'}
			</h1>

			<Formik
				initialValues={profesor}
				validationSchema={profesoresSchema}
				enableReinitialize={true}
				onSubmit={async (values) => {
					if (params.id) {
						await updateProfesor(params.id, values);
						navigate('/profesores');
						notifyProfesorUpdated();
					} else {
						await createProfesor(values);
						navigate('/profesores');
						notifyProfesorPosted();
					}

					setProfesor({
						clave: '',
						nombres: '',
						apellidos: '',
						fnacimiento: '',
						email: '',
						sexo: '',
						estadocivil: '',
						tcasa: '',
						curp: '',
						tcelular: '',
						calle: '',
						colonia: '',
						cp: '',
						municipio: '',
						estado: '',
						estatus: '',
						password: '',
					});
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit} className="w-full max-w-lg mt-10">
						{/** Nuevo formulario con tailwind */}

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<CustomInput
									label="Clave"
									placeholder="1234"
									type="text"
									name="clave"
									onChange={handleChange}
									value={values.clave}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 mt-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Nombre"
									placeholder="Juan"
									type="text"
									name="nombres"
									onChange={handleChange}
									value={values.nombres}
								/>
							</div>

							<div className="w-full md:w-1/2 px-3">
								<CustomInput
									label="Apellido"
									type="text"
									placeholder="Perez"
									name="apellidos"
									onChange={handleChange}
									value={values.apellidos}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<CustomInput
									label="Fecha de Nacimiento"
									type="date"
									placeholder="Selecciona la fecha de nacimiento"
									name="fnacimiento"
									onChange={handleChange}
									value={values.fnacimiento}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<CustomInput
									label="Email"
									type="email"
									placeholder="example@gmail.com"
									name="email"
									onChange={handleChange}
									value={values.email}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 mt-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Estado Civil
								</label>
								<div className="relative">
									<CustomSelect
										name="sexo"
										onChange={handleChange}
										value={values.sexo}
									>
										<option value="">Selecciona el sexo</option>
										<option value="Masculino">Masculino</option>
										<option value="Femenino">Femenino</option>
										<option value="Otro">Otro</option>
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

							<div className="w-full md:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Estado Civil
								</label>
								<div className="relative">
									<CustomSelect
										name="estadocivil"
										onChange={handleChange}
										value={values.estadocivil}
									>
										<option value="">Selecciona el estado civil</option>
										<option value="Soltero">Soltero</option>
										<option value="Casado">Casado</option>
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
								<CustomInput
									label="CURP"
									type="text"
									placeholder="OEAF771012HMCRGR09"
									name="curp"
									onChange={handleChange}
									value={values.curp}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 mt-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Telefono de Casa"
									placeholder="(618)3210822"
									type="text"
									name="tcasa"
									onChange={handleChange}
									value={values.tcasa}
								/>
							</div>

							<div className="w-full md:w-1/2 px-3">
								<CustomInput
									label="Telefono Celular"
									type="text"
									placeholder="(618)3210822"
									name="tcelular"
									onChange={handleChange}
									value={values.tcelular}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 mt-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Calle"
									type="text"
									placeholder="Fuentes"
									name="calle"
									onChange={handleChange}
									value={values.calle}
								/>
							</div>

							<div className="w-full md:w-1/2 px-3">
								<CustomInput
									label="Colonia"
									type="text"
									placeholder="Roma"
									name="colonia"
									onChange={handleChange}
									value={values.colonia}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-2">
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Codigo Postal"
									type="text"
									placeholder="34166"
									name="cp"
									onChange={handleChange}
									value={values.cp}
								/>
							</div>

							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Municipio"
									type="text"
									placeholder="Durango"
									name="municipio"
									onChange={handleChange}
									value={values.municipio}
								/>
							</div>

							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<CustomInput
									label="Estado"
									type="text"
									placeholder="Durango"
									name="estado"
									onChange={handleChange}
									value={values.estado}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Estatus
								</label>
								<div className="relative">
									<CustomSelect
										name="estatus"
										onChange={handleChange}
										value={values.estatus}
									>
										<option value="">Selecciona el estatus</option>
										<option value="Inactivo">Inactivo</option>
										<option value="Activo">Activo</option>
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
								<CustomInput
									label="Contraseña"
									placeholder="1234"
									type="password"
									name="password"
									onChange={handleChange}
									value={values.password}
								/>
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

export default ProfesoresAgregar;
