import * as yup from 'yup';

const namesRules = /^[A-Za-z ]*$/;

export const asesoriasSchema = yup.object().shape({
	tema: yup
		.string()
		.min(3, 'Debe contener al menos tres caracteres')
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.required('Este campo es requerido'),
	observaciones: yup
		.string()
		.min(3, 'Debe contener al menos tres caracteres')
		.matches(namesRules, { message: 'Solo puede contener letras' })
		.required('Este campo es requerido'),
	fecha_inicio: yup
		.date('Debe ingresar una fecha valida')
		.required('Este campo es requerido'),
	fecha_fin: yup
		.date('Debe ingresar una fecha valida')
		.required('Este campo es requerido'),
	profesor: yup.string().required('Elige alguna de las opciones'),
	alumno: yup.string().required('Elige alguna de las opciones'),
});
