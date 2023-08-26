import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/shop.css";

export const Shop = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="shop-container">
			<h2>Browse Items</h2>
			<ul className="nav nav-underline" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All items</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="stickers-tab" data-bs-toggle="tab" data-bs-target="#stickers" type="button" role="tab" aria-controls="stickers" aria-selected="false">Stickers</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="jewelry-tab" data-bs-toggle="tab" data-bs-target="#jewelry" type="button" role="tab" aria-controls="jewelry" aria-selected="false">Jewelry</button>
				</li>
			</ul>

			<div class="tab-content">
				<div class="tab-pane active" id="all" role="tabpanel" aria-labelledby="all-tab" tabindex="0">
					All items
				</div>
				<div class="tab-pane" id="stickers" role="tabpanel" aria-labelledby="stickers-tab" tabindex="0">
					Stickers
				</div>
				<div class="tab-pane" id="jewelry" role="tabpanel" aria-labelledby="jewelry-tab" tabindex="0">
					Jewelry
				</div>
			</div>
		</div>
	);
};