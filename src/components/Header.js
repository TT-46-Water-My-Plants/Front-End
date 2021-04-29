import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../store/user";

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
		} else if (e.target.name === "editUser") {
			push("/edituser");
		}
	};

	return (
		<header className="header">
			<button
				className="btn-newplant"
				onClick={() =>
					(window.location.href =
						"https://marketing-page-tt46.vercel.app/")
				}
			>
				Home Page
			</button>
			<button
				name="newPlantBtn"
				onClick={handleClick}
				className="btn-newplant"
			>
				Add New Plant
			</button>
			<button
				name="editUser"
				onClick={handleClick}
				className="btn-logout"
			>
				Edit User
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
