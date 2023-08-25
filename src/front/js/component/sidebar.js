import React from "react";
import { Link } from "react-router-dom";
import { House, Bag, Camera, QuestionCircle, FileEarmarkPerson } from "react-bootstrap-icons";
import "../../styles/sidebar.css";

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="container">
                <div className="links-container">
                    <Link to="/" className="link-button">
                        <button className="button-side"><House /> Home</button>
                    </Link>
                    <Link to="/" className="link-button">
                        <button className="button-side"><Bag /> Shop</button>
                    </Link>
                    <Link to="/" className="link-button">
                        <button className="button-side"><Camera /> Gallery</button>
                    </Link>
                    <Link to="/" className="link-button">
                        <button className="button-side"><QuestionCircle /> FAQ</button>
                    </Link>
                    <Link to="/" className="link-button">
                        <button className="button-side"><FileEarmarkPerson /> About Us</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
