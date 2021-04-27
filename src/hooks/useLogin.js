import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const useLogin = () => {
	const [msg, setMsg] = useState("");

	const { push } = useHistory();

	const attemptMsg = useSelector((state) => state.auth.attemptMsg);

	useEffect(() => {
		switch (attemptMsg) {
			case "loginSuccess":
				push("/dashboard");
				break;
			case "loginFailed":
				setMsg("Login has failed.");
				break;
			case "registerSuccess":
				setMsg("You may now log in!");
				break;
			case "registerFailed":
				setMsg("Register has failed.");
				break;
			default:
				return;
		}
	}, [attemptMsg]);

	return [msg];
};
