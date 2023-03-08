import { useField } from 'formik';

const CustomTextarea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
				{label}
			</label>
			<textarea
				{...field}
				{...props}
				className={
					meta.touched && meta.error
						? 'block p-2.5 w-full  bg-gray-50 rounded-lg border  dark:bg-gray-200  dark:placeholder-gray-400 dark:text-gray-700  resize-none text-base focus:outline-none focus:bg-white focus:border-gray-500 border-red-500'
						: 'block p-2.5 w-full  bg-gray-50 rounded-lg border  dark:bg-gray-200  dark:placeholder-gray-400 dark:text-gray-700  resize-none text-base focus:outline-none focus:bg-white focus:border-gray-500'
				}
			></textarea>
			{meta.touched && meta.error && <div className="error">{meta.error}</div>}
		</>
	);
};

export default CustomTextarea;
