import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
				{label}
			</label>
			<input
				{...field}
				{...props}
				className={
					meta.touched && meta.error
						? 'block appearance-none w-full bg-gray-200 border border-red-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700'
						: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
				}
			></input>
			{meta.touched && meta.error && <div className="error">{meta.error}</div>}
		</>
	);
};

export default CustomInput;
