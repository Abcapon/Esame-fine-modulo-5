import React, { useState } from "react";

const RatingField = ({ rating, editable, onRatingChange }) => {
	const [currentRating, setCurrentRating] = useState(rating);

	const handleRatingChange = (newRating) => {
		if (editable) {
			setCurrentRating(newRating);
			if (onRatingChange) {
				onRatingChange(newRating); // Passa il nuovo valore di valutazione
			}
		}
	};

	return (
		<div>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<span
						key={index}
						className={
							ratingValue <= currentRating ? "text-warning" : "text-secondary"
						}
						style={editable ? { cursor: "pointer" } : {}}
						onClick={() => handleRatingChange(ratingValue)}
					>
						★
					</span>
				);
			})}
		</div>
	);
};

export default RatingField;

/*import React, { useState } from "react";

const RatingField = ({ rating, editable }) => {
	const [currentRating, setCurrentRating] = useState(rating);

	const handleRatingChange = (newRating) => {
		if (editable) {
			setCurrentRating(newRating);
		}
	};

	return (
		<div>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<span
						key={index}
						className={
							ratingValue <= currentRating ? "text-warning" : "text-secondary"
						}
						style={editable ? { cursor: "pointer" } : {}}
						onClick={() => handleRatingChange(ratingValue)}
					>
						★
					</span>
				);
			})}
		</div>
	);
};

export default RatingField;
*/

/*
// rating field semplificato e "fisso"
import React from "react";

const RatingField = ({ rating }) => {
	return (
		<div>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<span
						key={index}
						className={
							ratingValue <= rating ? "text-warning" : "text-secondary"
						}
					>
						★
					</span>
				);
			})}
		</div>
	);
};

export default RatingField;
*/

/*
// componente semplificato
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RatingField = () => {
	const [rating, setRating] = useState(0);

	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	return (
		<div>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<span
						key={index}
						className={
							ratingValue <= rating ? "text-warning" : "text-secondary"
						}
						style={{ cursor: "pointer" }}
						onClick={() => handleRatingChange(ratingValue)}
					>
						★
					</span>
				);
			})}
		</div>
	);
};

export default RatingField;
*/

/*
// componente base
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RatingField = () => {
	const [rating, setRating] = useState(0);

	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	return (
		<div>
			<h6>Dai una valutazione da 1 a 5:</h6>
			<div>
				{[...Array(5)].map((_, index) => {
					const ratingValue = index + 1;
					return (
						<span
							key={index}
							className={
								ratingValue <= rating ? "text-warning" : "text-secondary"
							}
							style={{ cursor: "pointer" }}
							onClick={() => handleRatingChange(ratingValue)}
						>
							★
						</span>
					);
				})}
			</div>
			<p>Valutazione selezionata: {rating}</p>
		</div>
	);
};

export default RatingField;
*/
