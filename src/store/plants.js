import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const slice = createSlice({
	name: "plants",
	initialState: {
		list: [],
		loading: false,
		error: "",
	},
	reducers: {
		setLoading: (plants) => {
			plants.loading = !plants.loading;
		},
		setError: (plants, action) => {
			plants.error = action.payload;
		},
		loadPlants: (plants, action) => {
			plants.list = action.payload;
		},
		addPlant: (plants, action) => {
			plants.list.push(action.payload);
		},
		editPlant: (plants, action) => {
			plants.list.map((plant) => {
				if (plant.id === action.payload.id) plant = action.payload;
				return plant;
			});
		},
		removePlant: (plants, action) => {
			plants.list.filter((plant) => plant !== action.payload);
		},
	},
});

export const fetchPlants = () => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.get("url")
		.then((res) => {
			dispatch(loadPlants(res.data));
			dispatch(setLoading());
		})
		.catch((err) => {
			dispatch(setError("Unable to fetch plants."));
			dispatch(setLoading());
		});
};

export const {
	setLoading,
	setError,
	loadPlants,
	addPlant,
	editPlant,
	removePlant,
} = slice.actions;

export default slice.reducer;
