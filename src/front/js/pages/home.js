import React, { useContext } from "react";
import { Context } from "../store/appContext";
import placeholder from "../../img/placeholder.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${placeholder})` }}
			/>
			<div className="text-center content">
				<h1>Welcome to Serendipity Sky</h1>
				<h2>
					It's your lucky day!
				</h2>
				<p>
					Where your dreams become reality~ <br />
					We are a clothing design and construction studio dedicated to creating unique looks just for you. <br />
					Specializing in gender affirming and size inclusive clothing, we are excited to work together with you. <br />
					Submit your order today and get a free quote.
				</p>
				<button className="btn btn-primary">
					Order Here
				</button>
			</div>
		</div>
	);
};
