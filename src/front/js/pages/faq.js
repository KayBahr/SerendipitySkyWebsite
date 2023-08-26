import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";

export const FAQ = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="faq-container">
			<h1>FAQs</h1>
			<h2>Can I get a free quote?</h2>
				<p>Yes ! You can always submit an order or a quote for free.</p>
			<h2>What is the turnaround time?</h2>
				<p>Depending on the type of order, it can usually take any time between one to three months.</p>
			<h2>Can you make a replica of this?</h2>
				<p>
					Usually not. We specialize in collaborating with our customers to make a unique look. 
					Combining, inspiration, and changing replicas are okay. Feel free to send an order form and we will look over it. 
					Serendipity Sky has the right to refuse a design request for any reason.
				</p>
			<h2>What changes can I make during the process?</h2>
				<p>
					During the designing phase we will work until you are happy with the design. 
					Once the materials are purchased, we won't be able to change aspects unless new materials are purchased.
				</p>
			<h2>How often will I get updates/progress photos?</h2>
				<p>During the designing phase we will discuss how often you would like to receive progress photos.</p>
			<h2>What is your refund policy?</h2>
				<p>
					Design refunds may only be issued if the design has not been started. 
					Material refunds may only be issued if the materials have not been purchased. 
					Labor refunds may only be issued if there has been no labor spent on constructing. 
					Shipping costs may not be refunded.
				</p>
		</div>
	);
};