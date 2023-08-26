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
					<button className="btn btn-primary">Order Here</button>
					<button className="button"><Search /></button>
					<button type="button" className="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<Person />
					</button>
					<div className="btn-group">
						<button className="button dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Cart /></button>
						
						<ul className="dropdown-menu dropdown-menu-end">
							<li><h1 className="dropdown-header">My Cart</h1></li>
							<li><a className="dropdown-item" href="#">Cart Empty</a></li>
							<li><a className="dropdown-item" href="#">Cart Item</a></li>
							<li><a className="dropdown-item" href="#">Cart Item</a></li>
						</ul>
					</div>
				</div>

				<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">Log in or create an account with just your phone number</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<ul className="list-group">
									<li><h6 className="list-group-header">Log in benefits:</h6></li>
									<li className="list-group-item">Get order status notifications</li>
									<li className="list-group-item">View your order history and quickly reorder</li>
									<li className="list-group-item">
										Manage your Square Pay payment details for faster checkout from any Square Online site
									</li>
								</ul>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary">Log in</button>
								<button type="button" className="btn btn-primary">Sign up</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
