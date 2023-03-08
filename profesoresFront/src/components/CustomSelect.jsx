import { useField } from 'formik';

const CustomSelect = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<select
				{...field}
				{...props}
				className={
					meta.touched && meta.error
						? 'block appearance-none w-full bg-gray-200 border border-red-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700'
						: 'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
				}
			></select>
			{meta.touched && meta.error && (
				<div className="error-select">{meta.error}</div>
			)}
		</>
	);
};

export default CustomSelect;
