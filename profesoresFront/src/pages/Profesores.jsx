import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const Profesores = () => {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		traerDatos();
	}, []);

	const navigate = useNavigate();
	const traerDatos = async () => {
		await axios
			.get('http://localhost:5000/profesores/listar')
			.then(function (response) {
				setDatos(response.data.result);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container className="mt-5">
			<Row>
				<Col>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Clave</th>
								<th>Nombre</th>
								<th>email</th>
								<th>CURP</th>
								<th>Tel. Movil</th>
								<th>Estatus</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{datos.map((prof) => (
								<tr key={prof.clave}>
									<td>{prof.clave}</td>
									<td>
										{prof.nombres}
										{''}
										{prof.apellidos}
									</td>
									<td>{prof.email}</td>
									<td>{prof.curp}</td>
									<td>{prof.tcelular}</td>
									<td>{prof.estatus}</td>
									<td>
										<Button
											onClick={() =>
												navigate(`/profesores/modificar/${prof.clave}`)
											}
											variant="primary"
											className="me-3"
										>
											Modificar
										</Button>{' '}
										<Button variant="danger">Eliminar</Button>{' '}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
};

export default Profesores;
