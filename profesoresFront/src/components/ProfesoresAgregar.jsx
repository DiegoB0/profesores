import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfesoresAgregar = () => {
	const initialState = {
		clave: '',
		nombres: '',
		apellidos: '',
		fNacimiento: '',
		email: '',
		sexo: '',
		estadoCivil: '',
		tCasa: '',
		curp: '',
		tCelular: '',
		calle: '',
		colonia: '',
		cp: '',
		municipio: '',
		estado: '',
	};
	const [datos, setDatos] = useState(initialState);

	const {
		clave,
		nombres,
		apellidos,
		fNacimiento,
		email,
		sexo,
		estadoCivil,
		tCasa,
		curp,
		tCelular,
		calle,
		colonia,
		cp,
		municipio,
		estado,
	} = datos;
	const navigate = useNavigate();
	const handleChange = (e) => {
		let { name, value } = e.target;
		setDatos({ ...datos, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const {
			clave,
			nombres,
			apellidos,
			fNacimiento,
			email,
			sexo,
			estadoCivil,
			tCasa,
			curp,
			tCelular,
			calle,
			colonia,
			cp,
			municipio,
			estado,
		} = datos;
		const formData = new FormData();

		formData.append('clave', clave);
		formData.append('nombres', nombres);
		formData.append('apellidos', apellidos);
		formData.append('fNacimiento', fNacimiento);
		formData.append('email', email);
		formData.append('sexo', sexo);
		formData.append('estadoCivil', estadoCivil);
		formData.append('tCasa', tCasa);
		formData.append('curp', curp);
		formData.append('tCelular', tCelular);
		formData.append('calle', calle);
		formData.append('colonia', colonia);
		formData.append('cp', cp);
		formData.append('municipio', municipio);
		formData.append('estado', estado);

		await axios
			.post('http://localhost:5000/profesores/agregar', formData)
			.then((response) => {
				// console.log(response);
				notify(response.status);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	function notify(num) {
		if (num === 200) {
			toast.success('Profesor agregando', {
				postition: toast.POSITION.TOP_CENTER,
				onClose: () => {
					handleCancelar();
					navigate('/profesores');
				},
				autoClose: 800,
				theme: 'colored',
			});
		}
	}

	const handleCancelar = () => {
		setDatos(initialState);
		return 0;
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<ToastContainer></ToastContainer>
					</Col>
				</Row>
				<Row>
					<Col></Col>
					<Col>
						<Form onSubmit={handleSubmit}>
							{/* Campos para la base de datos */}
							<Form.Group className="mb-3" controlId="formClave">
								<Form.Label>Clave: </Form.Label>
								<Form.Control
									type="text"
									name="clave"
									placeholder="Ingresa tu clave"
									value={clave}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formNombres">
								<Form.Label>Nombres: </Form.Label>
								<Form.Control
									type="text"
									name="nombres"
									placeholder="Ingresa tus nombres"
									value={nombres}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formApellidos">
								<Form.Label>Apellidos: </Form.Label>
								<Form.Control
									type="text"
									name="apellidos"
									placeholder="Ingresa tus apellidos"
									value={apellidos}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formfNacimiento">
								<Form.Label>Fecha de Nacimiento: </Form.Label>
								<Form.Control
									type="date"
									name="fNacimiento"
									placeholder="Ingresa tu fecha de nacimiento"
									value={fNacimiento}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Label>Email: </Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="Ingresa tu correo electronico"
									value={email}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formSexo">
								<Form.Label>Sexo: </Form.Label>
								<Form.Select
									aria-label="Sexo"
									name="sexo"
									value={sexo}
									onChange={handleChange}
									required
								>
									<option>Selecciona tu sexo</option>
									<option value="Femenino">Femenino</option>
									<option value="Masculino">Masculino</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formestadoCivil">
								<Form.Label>Estado Civil: </Form.Label>
								<Form.Select
									aria-label="Estado Civil"
									name="estadoCivil"
									value={estadoCivil}
									onChange={handleChange}
									required
								>
									<option>Selecciona tu estado civil</option>
									<option value="Soltero">Soltero (a) </option>
									<option value="Casado">Casado (a) </option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formtCasa">
								<Form.Label>Telefono de casa: </Form.Label>
								<Form.Control
									type="text"
									name="tCasa"
									placeholder="Ingresa tu telefono de casa"
									pattern="[(][0-9]{3}[)][0-9]{7}"
									value={tCasa}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formCurp">
								<Form.Label>CURP: </Form.Label>
								<Form.Control
									type="text"
									name="curp"
									placeholder="Ingresa tu curp"
									pattern="^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$"
									value={curp}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formtCelular">
								<Form.Label>Telefono Celular: </Form.Label>
								<Form.Control
									type="text"
									name="tCelular"
									placeholder="Ingresa tu telefono celular"
									pattern="[(][0-9]{3}[)][0-9]{7}"
									value={tCelular}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formCalle">
								<Form.Label>Calle: </Form.Label>
								<Form.Control
									type="text"
									name="calle"
									placeholder="Ingresa tu calle"
									value={calle}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formColonia">
								<Form.Label>Colonia: </Form.Label>
								<Form.Control
									type="text"
									name="colonia"
									placeholder="Ingresa tu colonia"
									value={colonia}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formCp">
								<Form.Label>Codigo Postal: </Form.Label>
								<Form.Control
									type="number"
									name="cp"
									placeholder="Ingresa tu codigo postal"
									pattern="[0]{5}"
									value={cp}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formMunicipio">
								<Form.Label>Municipio: </Form.Label>
								<Form.Control
									type="text"
									name="municipio"
									placeholder="Ingresa tu municipio"
									value={municipio}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formEstado">
								<Form.Label>Estado: </Form.Label>
								<Form.Control
									type="text"
									name="estado"
									placeholder="Ingresa tu estado"
									value={estado}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Guardar
							</Button>
							<Button variant="info" onClick={handleCancelar} className="ms-3">
								Cancelar
							</Button>
						</Form>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</>
	);
};

export default ProfesoresAgregar;
