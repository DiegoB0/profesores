import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProfesores } from '../../context/ProfesoresContext';
import { useUsers } from '../../context/UsersContext';

const ProfesoresPerfil = () => {
	const { editProfile, profesoresFoto, setProfesoresFoto } = useProfesores();
	const { userData } = useUsers();
	const params = useParams();
	const navigate = useNavigate();

	return (
		<div className="h-full p-10 flex content-center justify-center">
			<div className="border-b-2 flex justify-center md:flex w-full">
				{/* COMIENZA TARJETA  */}

				<div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md ">
					<div className="flex justify-between">
						<span className="text-xl font-semibold block">
							Informacion actual
						</span>
					</div>
					<span className="text-gray-600">
						Esta información es secreta, manejela con cuidado
					</span>
					<div className="w-full p-8 mx-2 flex justify-center rounded-full">
						{profesoresFoto.foto ? (
							<img
								id="showImage"
								className="max-w-xs w-40 items-center border rounded-full h-40"
								src={profesoresFoto.foto}
								alt=""
							/>
						) : (
							<img
								id="showImage"
								className="max-w-xs w-40 items-center border rounded-full h-40"
								src={userData.foto}
								alt=""
							/>
						)}
					</div>

					<div className="pb-6">
						<label
							htmlFor="name"
							className="font-semibold text-gray-700 block pb-1"
						>
							Email
						</label>
						{profesoresFoto.email ? (
							<div className="flex">
								<input
									disabled
									id="username"
									className="border-1  rounded-r px-4 py-2 w-full"
									type="text"
									value={profesoresFoto.email}
								/>
							</div>
						) : (
							<div className="flex">
								<input
									disabled
									id="username"
									className="border-1  rounded-r px-4 py-2 w-full"
									type="text"
									value={userData.email}
								/>
							</div>
						)}
						<label
							htmlFor="name"
							className="font-semibold text-gray-700 block pb-1"
						>
							Foto
						</label>
						<div className="flex">
							<input
								disabled
								id="username"
								className="border-1  rounded-r px-4 py-2 w-full"
								type="text"
								value={userData.public_id}
							/>
						</div>
					</div>
					<div className="pb-4">
						<span className="text-gray-600 pt-4 block opacity-70">
							Información personal de su cuenta
						</span>
					</div>
				</div>

				{/*  NUEVA TARJETA */}

				<div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md ml-20">
					{' '}
					<Formik
						initialValues={{ email: '', foto: null }}
						onSubmit={async (values) => {
							// console.log(values);
							const result = await editProfile(params.id, values);
							if (result) {
								const updated = setProfesoresFoto(result);
							}

							navigate('/home');
						}}
					>
						{({
							handleChange,
							handleSubmit,
							values,
							isSubmitting,
							setFieldValue,
						}) => (
							<Form onSubmit={handleSubmit}>
								<div className="flex justify-between">
									<span className="text-xl font-semibold block">
										Nueva Informacion
									</span>
									<button
										type="submit"
										disabled={isSubmitting}
										className="-mt-2 text-md font-bold text-white bg-purple-700 rounded-full px-5 py-2 hover:bg-purple-800"
									>
										{isSubmitting ? 'Editando' : 'Editar'}
									</button>
								</div>

								<span className="text-gray-600">
									Esta información es secreta, manejela con cuidado
								</span>
								<div className="w-full p-8 mx-2 flex justify-center rounded-full">
									<img
										id="showImage"
										className="max-w-xs w-40 items-center border rounded-full h-40"
										src=""
										alt=""
									/>
								</div>

								<div className="pb-4">
									<label
										htmlFor="about"
										className="font-semibold text-gray-700 block pb-1"
									>
										Email
									</label>
									<input
										onChange={handleChange}
										name="email"
										className="border-1  rounded-r px-4 py-2 w-full"
										type="email"
										value={values.email}
									/>
									<label
										htmlFor="about"
										className="font-semibold text-gray-700 block pb-1"
									>
										Foto
									</label>
									<input
										onChange={(e) => setFieldValue('foto', e.target.files[0])}
										name="foto"
										className="border-1  rounded-r px-4 py-2 w-full"
										type="file"
									/>
									<span className="text-gray-600 pt-4 block opacity-70">
										Información personal de su cuenta
									</span>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ProfesoresPerfil;
