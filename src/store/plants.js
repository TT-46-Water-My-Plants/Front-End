import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../helper/axiosWithAuth";

const slice = createSlice({
	name: "plants",
	initialState: {
		plantList: [],
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
		plantsFetched: (plants, action) => {
			plants.plantList = action.payload;
		},
		plantAdded: (plants, action) => {
			plants.plantList.push(action.payload);
		},
		plantEdited: (plants, action) => {
			plants.plantList.map((plant) => {
				if (plant.id === action.payload.id) plant = action.payload;
				return plant;
			});
		},
		plantRemoved: (plants, action) => {
			plants.plantList.filter((plant) => plant !== action.payload);
		},
	},
});

export const fetchPlants = () => (dispatch) => {
	dispatch(setLoading());
	axiosWithAuth()
		.get("/api/plants")
		.then((res) => {
			dispatch(plantsFetched(res.data));
			dispatch(setLoading());
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setError("Unable to fetch plants."));
			dispatch(setLoading());
		});
};

export const addPlant = (newPlant) => (dispatch) => {
	axiosWithAuth()
		.post("/api/plants", newPlant)
		.then((res) => {
			dispatch(plantAdded(res.data));
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setError("Unable to add plant."));
		});
};

export const editPlant = (plant) => (dispatch) => {
	axiosWithAuth()
		.put(`/api/plants/${plant.id}`, plant)
		.then((res) => {
			dispatch(plantEdited(res.data));
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setError("Unable to edit plant."));
		});
};

export const removePlant = (plant) => (dispatch) => {
	axiosWithAuth()
		.delete(`/api/plants/${plant.plant_id}`)
		.then((res) => {
			dispatch(plantRemoved(plant));
		})
		.catch((err) => {
			console.log({ err });
			dispatch(setError("Unable to remove plant."));
		});
};

export const {
	setLoading,
	setError,
	plantsFetched,
	plantAdded,
	plantEdited,
	plantRemoved,
} = slice.actions;

export default slice.reducer;
