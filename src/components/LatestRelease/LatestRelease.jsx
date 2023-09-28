import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import Fantasy from "../../data/fantasy.json";
import { Theme } from "../../Contexts/ThemeChanger";
// import di CommentList
import CommentList from "../CommentList/CommentList";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA5ODkwOGE3YzIyZjAwMTRjMTAzZjUiLCJpYXQiOjE2OTUxMjQxOTQsImV4cCI6MTY5NjMzMzc5NH0.GUqxcsPUp5JUVltYadCVMC7Xj52c1Qr4N2saP7lnM7U";

const LatestRelease = ({ searchValue }) => {
	const { isDarkMode } = useContext(Theme);
	const [selectedAsin, setSelectedAsin] = useState(``);
	const [filteredResults, setFilteredResults] = useState([]);
	// stato iniziale di comments
	const [comments, setComments] = useState([]);
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		const lowercasedValue = searchValue.toLowerCase();

		const filteredBooks = Fantasy.filter((book) =>
			book.title.toLowerCase().includes(lowercasedValue)
		);
		setFilteredResults(filteredBooks);
	}, [searchValue]);

	const handleCardClick = (asin) => {
		setSelectedAsin(asin);
		setIsSelected(true);
	};

	// funzione per ricevere i commenti (presa da CommentArea)
	const getComments = async (id) => {
		try {
			const response = await fetch(url + id, {
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();
			setComments(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isSelected && selectedAsin !== null) {
			getComments(selectedAsin);
		} else {
			setComments(``);
		}
	}, [selectedAsin, isSelected]);

	return (
		<>
			<Container fluid>
				<Row>
					<Col
						className={`col-9 d-flex flex-wrap gap-4 ${
							isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
						}`}
					>
						{filteredResults.map((book) => (
							<SingleBook
								key={book.asin}
								img={book.img}
								title={book.title}
								category={book.category}
								price={book.price}
								btn="Bottone"
								asin={book.asin}
								isSelected={selectedAsin === book.asin}
								onCardClick={handleCardClick}
							/>
						))}
					</Col>
					<Col
						className={`col-3 ${
							isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
						}`}
					>
						{comments && <CommentList comments={comments} />}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LatestRelease;

/*
import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import Fantasy from "../../data/fantasy.json";

const LatestRelease = ({ searchValue }) => {
	const [selectedAsin, setSelectedAsin] = useState(null);
	const [filteredResults, setFilteredResults] = useState([]);

	useEffect(() => {
		const lowercasedValue = searchValue.toLowerCase();

		const filteredBooks = Fantasy.filter((book) =>
			book.title.toLowerCase().includes(lowercasedValue)
		);
		setFilteredResults(filteredBooks);
	}, [searchValue]);

	const handleCardClick = (asin) => {
		setSelectedAsin(asin);
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col className="d-flex flex-wrap gap-4">
						{filteredResults.map((book) => (
							<SingleBook
								key={book.asin}
								img={book.img}
								title={book.title}
								category={book.category}
								price={book.price}
								btn="Bottone"
								asin={book.asin}
								isSelected={selectedAsin === book.asin}
								onCardClick={handleCardClick}
							/>
						))}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LatestRelease;
*/
