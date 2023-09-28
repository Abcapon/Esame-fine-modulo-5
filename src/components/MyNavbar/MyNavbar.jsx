import React, { useContext } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import { Theme } from "../../Contexts/ThemeChanger";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = ({ onSearchChange }) => {
	const { isDarkMode, toggleDarkMode } = useContext(Theme);

	const handleInputChange = (value) => {
		onSearchChange(value);
	};

	return (
		<Navbar expand="lg" className={isDarkMode ? "bg-dark" : "bg-light"}>
			<Container>
				<Navbar.Brand
					href="#"
					className={isDarkMode ? "text-light" : "text-dark"}
				>
					Home
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#"
							className={isDarkMode ? "text-light" : "text-dark"}
						>
							About
						</Nav.Link>
						<Nav.Link
							href="#"
							className={isDarkMode ? "text-light" : "text-dark"}
						>
							Browse
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<MyInput onSearchQuery={handleInputChange} />
					</Form>
					<button
						className={`btn ${isDarkMode ? "btn-light" : "btn-dark"}`}
						onClick={toggleDarkMode}
					>
						Toggle Dark Mode
					</button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
