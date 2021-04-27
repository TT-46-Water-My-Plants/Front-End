import { useState } from "react";

export const useForm = (initFormVals) => {
	const [formValues, setFormValues] = useState(initFormVals);

	const onChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const emptyForm = initFormVals;

	const onClear = () => {
		setFormValues(emptyForm);
	};

	return [formValues, onChange, onClear];
};
