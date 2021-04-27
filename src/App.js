import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import PlantForm from "./PlantForm";
import RenderPlants from "./Renderplants";
import Login from "./login";

function App() {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<PrivateRoute path="/dashboard" component={RenderPlants} />
			<Route path="/newplant" component={PlantForm} />
			<Route
				path="/"
				component={() => {
					window.location.href =
						"https://marketing-page-tt46.vercel.app/";
				}}
			/>
		</Switch>
	);
}

export default App;
