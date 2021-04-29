import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import PlantForm from "./components/PlantForm";
import RenderPlants from "./components/Renderplants";
import Login from "./components/login";
import Update from "./components/UpdateInfo";

function App() {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<PrivateRoute path="/dashboard" component={RenderPlants} />
			<Route path="/newplant" component={PlantForm} />
			<Route path="/edituser" component={Update} />
			<Route
				path="/"
				component={() => {
					if (localStorage.getItem("token")) {
						window.location.href =
							"https://marketing-page-tt46.vercel.app/dashboard";
					}
					window.location.href =
						"https://marketing-page-tt46.vercel.app/";
				}}
			/>
		</Switch>
	);
}

export default App;
