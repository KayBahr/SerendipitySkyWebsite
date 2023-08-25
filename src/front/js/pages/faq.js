import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";

export const FAQ = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="faq-container">
			FAQs
		</div>
	);
};