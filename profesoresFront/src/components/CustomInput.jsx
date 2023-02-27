import { useField } from 'formik';
import React from 'react';

const CustomInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label>{label}</label>
			<input {...field} {...props}></input>
		</>
	);
};

export default CustomInput;
