import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	clave: yup
		.number()
		.typeError('Debe ser un numero entero')
		.positive('Debe ser positivo')
		.integer()
		.required('Este campo es requerido'),

	password: yup.string().required('Este campo es requedido'),
});
