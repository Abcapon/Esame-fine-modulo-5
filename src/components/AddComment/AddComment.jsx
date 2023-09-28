import React, { useState } from "react";
import Modal from "react-modal";
import RatingField from "../RatingField/RatingField";
import Button from "react-bootstrap/Button";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA5ODkwOGE3YzIyZjAwMTRjMTAzZjUiLCJpYXQiOjE2OTUxMjQxOTQsImV4cCI6MTY5NjMzMzc5NH0.GUqxcsPUp5JUVltYadCVMC7Xj52c1Qr4N2saP7lnM7U";

const AddComment = ({ elementId }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		author: "",
		rate: 0,
		comment: "",
		elementId,
	});

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleRatingChange = (newRating) => {
		setFormData({ ...formData, rate: newRating });
	};

	const send = async () => {
		console.log(formData);
		console.log("Comment data:", formData);
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Comment sent successfully!");
				setFormData({
					author: "",
					rate: 0,
					comment: "",
				});
				closeModal();
			} else {
				console.error("Error sending comment:", response.statusText);
			}
		} catch (error) {
			console.error("Error sending comment:", error);
		}
	};

	return (
		<>
			<Button variant="primary" onClick={openModal}>
				Add comment
			</Button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Add Comments Modal"
			>
				<form className="m-3">
					<p>Per lasciare una recensione inserisci qui la tua e-mail</p>
					<input
						type="text"
						placeholder="E-mail"
						name="author" // Update to "author" to match formData prop name
						value={formData.author}
						onChange={handleInputChange}
					/>
					<RatingField
						rating={formData.rate} // Update to "rate" to match RatingField prop name
						editable={true}
						onRatingChange={handleRatingChange}
					/>
					<h2>Aggiungi un commento</h2>
					<textarea
						name="comment"
						id="CommentHere"
						cols="50"
						rows="10"
						value={formData.comment}
						onChange={handleInputChange}
					></textarea>
				</form>
				<button type="button" className="m-3" onClick={send}>
					Send
				</button>
				<button type="button" className="m-3" onClick={closeModal}>
					Close
				</button>
			</Modal>
		</>
	);
};

export default AddComment;
