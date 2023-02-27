import * as yup from 'yup';

export const profesoresSchema = yup.object().shape({
	clave: yup.number().positive().integer().required('Requerido'),
	nombres: yup.string().required(),
	email: yup
		.string()
		.email('Por favor ingresa un email valido')
		.required('Requerido'),
});
