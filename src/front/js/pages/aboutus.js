import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/aboutus.css";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="aboutus-container">
			About us
		</div>
	);
};