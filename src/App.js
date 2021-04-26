import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

function App() {
	return (
		<Switch>
			<Route path="/">
				<div>
					<h1>testing</h1>
				</div>
			</Route>
		</Switch>
	);
}

export default App;
