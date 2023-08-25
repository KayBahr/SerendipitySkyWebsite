import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/shop.css";

export const Shop = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="shop-container">
			Shop
		</div>
	);
};