/*
import React, { useState } from "react";
import SingleBook from "./SingleBook";

const BookList = () => {
	const [selectedBook, setSelectedBook] = useState(null);

	const handleCardClick = (asin) => {
		setSelectedBook(asin);
	};

	const books = [
		{
			asin: "123",
			title: "Book 1",
			category: "Fiction",
			img: "image_url_1",
			price: "$10.00",
		},
		{
			asin: "456",
			title: "Book 2",
			category: "Non-Fiction",
			img: "image_url_2",
			price: "$15.00",
		},
		// Add more books as needed
	];

	return (
		<div>
			{books.map((book) => (
				<SingleBook
					key={book.asin}
					asin={book.asin}
					title={book.title}
					category={book.category}
					img={book.img}
					price={book.price}
					isSelected={selectedBook === book.asin}
					onCardClick={handleCardClick}
				/>
			))}
		</div>
	);
};

export default BookList;
*/
