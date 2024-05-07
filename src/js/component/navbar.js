import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/editContacts">
				<span className="navbar-brand mb-0 h1">Edit Contacts</span>
			</Link>
			<div className="ml-auto">
				<Link to="/create">
					<button className="btn btn-primary">Add Contacs</button>
				</Link>
			</div>
		</nav>
	);
};

<div>
</div>
