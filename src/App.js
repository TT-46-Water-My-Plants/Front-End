import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

function App() {
	return (
		<Switch>
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
