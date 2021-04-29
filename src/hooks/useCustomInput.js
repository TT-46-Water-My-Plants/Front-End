import { useState } from "react";

export const useCustomInput = () => {
	const [speciesVal, setSpeciesVal] = useState(false);
	const [nicknameVal, setNicknameVal] = useState(false);
	const [h2oVal, setH2oVal] = useState(false);

	const changeInput = (e) => {
		e.persist();

		if (e.target.name === "cancel" || e.target.name === "save") {
			setSpeciesVal(false);
			setNicknameVal(false);
			setH2oVal(false);
			return;
		}
		if (e.target.name === "species") {
			if (e.target.value !== "") setSpeciesVal(true);
		}
		if (e.target.name === "nickname") {
			if (e.target.value !== "") setNicknameVal(true);
		}
		if (e.target.name === "h2oFrequency") {
			if (e.target.value !== "") setH2oVal(true);
		}
	};

	return [speciesVal, nicknameVal, h2oVal, changeInput];
};
