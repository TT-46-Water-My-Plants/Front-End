import { useState } from "react";

export const useForm = (initFormVals) => {
	const [formValues, setFormValues] = useState(initFormVals);

	const onChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	return [formValues, onChange];
};
