import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/gallery.css";

export const Gallery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="gallery-container">
			Gallery
		</div>
	);
};