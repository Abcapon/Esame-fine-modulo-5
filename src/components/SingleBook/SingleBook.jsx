import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "../../Styles/SingleBook.css";
import CommentArea from "../CommentArea/CommentArea";
import { Link } from "react-router-dom";
import "../../Styles/links.css";
import { Theme } from "../../Contexts/ThemeChanger";
import { Button } from "react-bootstrap";

const SingleBook = ({
	title,
	category,
	img,
	price,
	asin,
	isSelected,
	onCardClick,
}) => {
	// aggiunta del contesto
	const { isDarkMode } = useContext(Theme);

	const handleClick = () => {
		if (isSelected) {
			onCardClick(null);
		} else {
			onCardClick(asin);
		}
	};

	return (
		<Card
			className={`custom-card ${isSelected ? "selected" : ""} 
			${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
			style={{ width: "18rem" }}
			onClick={handleClick}
		>
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{category}</Card.Text>
				<Card.Text>{price}</Card.Text>
			</Card.Body>
			<div className="d-flex">
				<div className="mt-auto">{<CommentArea id={asin} />}</div>
				<Button variant="primary">
					<Link to={`/book/${asin}`}>Description</Link>
				</Button>
			</div>
		</Card>
	);
};

export default SingleBook;
