import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			Authorization: localStorage.getItem("token"),
		},
		baseURL: "https://tt46-plants.herokuapp.com/",
	});
};
