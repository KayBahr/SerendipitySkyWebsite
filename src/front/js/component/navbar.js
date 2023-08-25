import React from "react";
import { Link } from "react-router-dom";
import { Search, Person, Cart } from "react-bootstrap-icons";
import sslogowordsmall from "../../img/sslogowordsmall.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<img
					  src={sslogowordsmall}
					  alt="Logo"
					  className="small-logo mr-2"
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<button className="button"><Search /></button>
					</Link>
					<Link to="/">
						<button className="button"><Person /></button>
					</Link>
					<Link to="/">
						<button className="button"><Cart /></button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
