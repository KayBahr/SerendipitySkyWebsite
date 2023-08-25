import React from "react";
import sslogo_2 from "../../img/sslogo_2.png";
import { Envelope, Facebook, Instagram } from "react-bootstrap-icons";
import "../../styles/footer.css";

export const Footer = () => {
	const todaysdate = new Date();
	const yyyy = todaysdate.getFullYear();

	return (
		<footer className="footer mt-auto py-3">
			<div className="footer-content">
				<div className="footer-logo">
					<img
					  src={sslogo_2}
					  alt="Logo"
					  className="smaller-logo mr-2"
					/>
				</div>
				<div className="footer-copyright">
					<p className="text-center">Copyright {yyyy}</p>
				</div>
				<div className="footer-contact">
					<p>
						<button className="button"><Envelope /></button>
						<button className="button"><Facebook /></button>
						<button className="button"><Instagram /></button>
						</p>
				</div>
			</div>
		</footer>
	);
};
