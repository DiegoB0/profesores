import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import image from '../assets/login.png';
import CustomInput from '../components/CustomInput';
import { useUsers } from '../context/UsersContext';
import { loginSchema } from '../schemas/login';

const Login = () => {
	const { authUsers, setUsers, userData, setUserData } = useUsers();
	const navigate = useNavigate();

	const notifyError = () =>
		toast.warning('Por favor ingrese credenciales válidas', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	function LoggedIn() {
		Swal.fire({
			title: '<small>Bienvenido de nuevo </small> ',
			text: ` ¿Que tal? `,
			icon: 'success',
			confirmButtonText: 'OK',
			confirmButtonColor: '#9333EA',
		}).then(() => {
			navigate('/home');
		});
	}

	return (
		<div className="h-full bg-gray-200 px-3 py-16 rounded-xl">
			<div className="max-w-md mx-auto bg-white p-3 rounded-xl">
				<div className="px-3 py-5">
					<div className="text-center">
						<h1 className="text-2xl mb-4 text-gray-600 uppercase font-extrabold">
							Iniciar Sesion
						</h1>
					</div>
					<div className="flex justify-center">
						<img src={image} style={{ height: '150px' }} alt="" />
					</div>

					<div className="mt-5">
						<hr className="h-0.5 mt-3" />
						<div className="relative py-4 flex justify-center mt-10">
							<span className="absolute px-4 rounded -top-4 left-30 bg-white text-gray-500 font-bold">
								Ingrese sus credenciales
							</span>
						</div>
					</div>

					<Formik
						initialValues={{ clave: '', password: '' }}
						validationSchema={loginSchema}
						onSubmit={async (values, { resetForm }) => {
							const response = await authUsers(values);
							if (response) {
								setUserData(response.user);
								setUsers(response.token);
								LoggedIn();
							} else {
								notifyError();
							}
							resetForm({ values: '' });
						}}
					>
						{({ handleChange, handleSubmit, values, isSubmitting }) => (
							<Form onSubmit={handleSubmit}>
								<div className="relative mb-3">
									<CustomInput
										className="transition duration-500 border h-12 rounded w-full px-2 mb-2"
										label="clave"
										type="text"
										placeholder="12345"
										name="clave"
										onChange={handleChange}
										value={values.clave}
									/>
								</div>

								<div className="relative mb-1">
									<CustomInput
										className=" transition duration-500 border h-12 rounded w-full px-2 mb-2"
										label="contraseña"
										type="password"
										placeholder="******"
										name="password"
										onChange={handleChange}
										value={values.password}
									/>
								</div>

								<div className="text-right mb-3">
									<a className="cursor-pointer text-gray-500 hover:text-gray-600 font-extrabold">
										¿Olvidó su contraseña?
									</a>
								</div>
								<ToastContainer />
								<button
									className="h-12 w-full hover:bg-purple-800 focus:outline-none bg-purple-700 rounded-xl text-white mb-3 mt-10 uppercase font-extrabold"
									type="submit"
									disabled={isSubmitting}
								>
									{isSubmitting ? 'Enviando...' : 'Enviar'}
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Login;
