import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../components/CustomInput';
import { useUsers } from '../context/UsersContext';
import { loginSchema } from '../schemas/login';

const Login = () => {
	const { users, authUsers, setUsers } = useUsers();

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

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<h1 className="text-xl font-extrabold uppercase text-gray-700">Login</h1>

			<Formik
				initialValues={{ clave: '', password: '' }}
				validationSchema={loginSchema}
				onSubmit={async (values, { resetForm }) => {
					const response = await authUsers(values);
					if (response) {
						navigate('/home');
						setUsers(response);
						console.log(users);
					} else {
						navigate('/');
						notifyError();
					}
					resetForm({ values: '' });
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit} className="w-full max-w-lg mt-10">
						{/** Nuevo formulario con tailwind */}

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<CustomInput
									label="Clave"
									type="text"
									placeholder="Ingrese su clave"
									name="clave"
									onChange={handleChange}
									value={values.clave}
								/>
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<CustomInput
									label="Contraseña"
									type="password"
									placeholder="Ingrese su contraseña"
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
								{isSubmitting ? 'Iniciando sesion...' : 'Iniciar sesion'}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
