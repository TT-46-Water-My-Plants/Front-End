import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../store/authLoginRegister";

const Header = () => {
	const dispatch = useDispatch();
	const { push } = useHistory();

	const handleClick = (e) => {
		e.persist();
		if (e.target.name === "newPlantBtn") {
			push("/newplant");
		} else if (e.target.name === "logoutBtn") {
			dispatch(logout());
			push("/login");
		}
	};

	return (
		<header className="header">
			<button
				name="newPlantBtn"
				onClick={handleClick}
				className="btn-newplant"
			>
				Add New Plant
			</button>
			<button
				name="logoutBtn"
				onClick={handleClick}
				className="btn-logout"
			>
				Logout
			</button>
		</header>
	);
};

export default Header;
