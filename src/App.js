import axios from "axios";
import React from "react";
import PlantForm from'./PlantForm';

const initialFormValues = {
	id: [],
	nickname: "",
	species: "",
	h2ofrequency: "",
}

export default function App() {
	const[plants, setPlants] = useState([])
	const[formValues, setFormValues] = useState(initialFormValues)
	const updateForm = (inputName, inputValue) => {
		setFormValues({...formValues,[inputName]: inputValue})
	}

	const submitForm = () => {
		const newPlant = {
			id: formValues.id.trim(),
			nickname: formValues.nickname.trim(),
			species: formValues.species.trim(),
			h2ofrequency: formValues.h2ofrquency.trim(),
		}

		if(!newPlant.id || !newPlant.nicknamew || !newPlant.species || !newPlant.h2ofrequency) return
		axios.post('', newPlant)
		.then(res => {
			setPlants([...plants, res.data])
			setFormValues(initialFormValues)
		})
		.catch(err => {
			console.log(err);
		})
	}

	useEffect(() => {
		axios.get('').then(res => setPlants(res.data))
	}, [])

	return (
		<div className='container'>
	        <h1>Testing</h1>

	<PlantForm
	values={formValues}
	update={updateForm}
	submit={submitForm}
/>

{plants.map(plant => {
	return (
		<Plant key={plant.id} details={plant} />
	)
})
}
</div>
)
}