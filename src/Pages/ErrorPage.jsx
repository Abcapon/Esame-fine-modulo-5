import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
	return (
		<div>
			<h1>OOPS, page don't found,return back to home page</h1>

			<Button variant="primary">
				<Link to="/">back to home page</Link>
			</Button>
		</div>
	);
};

export default ErrorPage;
