import axios from 'axios';
import * as yup from 'yup';

const curpRules =
	/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
const phoneRules = /^[(][0-9]{3}[)][0-9]{7}$/;
const passwordRules =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const namesRules = /^[A-Za-z ]*$/;
const cpRules = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;

export const profesoresSchema = yup.object().shape({
	clave: yup
		.number()
		.typeError('Debe ser un numero entero')
		.positive('Debe ser positivo')
		.integer()
		.required('Este campo es requerido')
		.test('Clave unica', 'Esta clave ya existe', function (id) {
			return new Promise((resolve, reject) => {
				axios
					.get(`http://localhost:5000/profesores/validate/${id}`)
					.then((res) => {
						const nuevo = res.data.nuevo;

						if (nuevo == 'Clave valida') {
							resolve(true);
						} else {
							resolve(false);
						}
					})
					.catch((error) => {
						console.error(error);
					});
			});
		}),
	nombres: yup
		.string()
		.min(3, 'Debe contener al menos tres caracteres')
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.required('Este campo es requerido'),
	apellidos: yup
		.string()
		.min(3, 'Debe contener al menos tres caracteres')
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.required('Este campo es requerido'),
	fnacimiento: yup
		.date('Debe ingresar una fecha valida')
		.required('Este campo es requerido'),
	email: yup
		.string()
		.email('Por favor ingresa un email valido')
		.required('Este campo es requerido'),
	sexo: yup
		.string()
		.oneOf(['Femenino', 'Masculino', 'Otro'], {
			message: 'Tiene que elegir alguna de las opciones',
		})
		.required('Elige alguna de las opciones'),
	estadocivil: yup
		.string()
		.oneOf(['Casado', 'Soltero'], {
			message: 'Tiene que elegir alguna de las opciones',
		})
		.required('Elige alguna de las opciones'),
	tcasa: yup
		.string()
		.matches(phoneRules, {
			message: 'Ingrese un numero de telefono valido',
		})
		.required('Este campo es requedido'),
	curp: yup
		.string()
		.matches(curpRules, { message: 'Ingrese una CURP valida' })
		.required('Este campo es requedido'),
	tcelular: yup
		.string()
		.matches(phoneRules, {
			message: 'Ingrese un numero de telefono valido ',
		})
		.required('Este campo es requerido'),
	calle: yup.string().required('Este campo es requedido'),
	colonia: yup
		.string()
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.required('Este campo es requedido'),
	cp: yup
		.string()
		.matches(cpRules, { message: 'Ingrese un codigo postal valido' })
		.required('Este campo es requedido'),
	municipio: yup
		.string()
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.min(4, 'Ingrese un municipio')
		.required('Este campo es requedido'),
	estado: yup
		.string()
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.min(4, 'Ingrese un estado')
		.required('Este campo es requedido'),
	estatus: yup
		.string()
		.oneOf(['Activo', 'Inactivo'], {
			message: 'Tiene que elegir alguna de las opciones',
		})
		.required('Elige alguna de las opciones'),
	password: yup
		.string()
		.matches(passwordRules, {
			message:
				'Su contraseña debe contener al menos 8 caracteres, un numero, un caracter especial, una mayuscula y una minuscula',
		})
		.required('Este campo es requedido'),
});
