import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA5ODkwOGE3YzIyZjAwMTRjMTAzZjUiLCJpYXQiOjE2OTUxMjQxOTQsImV4cCI6MTY5NjMzMzc5NH0.GUqxcsPUp5JUVltYadCVMC7Xj52c1Qr4N2saP7lnM7U";

const CommentArea = ({ id }) => {
	/*
	const [modalComments, setModalComments] = useState([]);
	const [modalLoading, setModalLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	*/

	/*
	const url = "https://striveschool-api.herokuapp.com/api/comments/";
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA5ODkwOGE3YzIyZjAwMTRjMTAzZjUiLCJpYXQiOjE2OTUxMjQxOTQsImV4cCI6MTY5NjMzMzc5NH0.GUqxcsPUp5JUVltYadCVMC7Xj52c1Qr4N2saP7lnM7U";

	const getComments = async () => {
		try {
			const response = await fetch(url + id, {
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();
			setModalComments(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isModalOpen) {
			getComments();
		}
	}, [isModalOpen, id]);
*/
	/*
	const openModal = () => {
		setModalLoading(true);
		setIsModalOpen(true);
	};
*/

	/*
	const closeModal = () => {
		setIsModalOpen(false);
	};
	*/

	return (
		<div className="d-flex">
			<AddComment elementId={id} />
		</div>
	);
};

export default CommentArea;

/*
<button onClick={openModal}>Comments</button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Comments Modal"
				ariaHideApp={false}
				style={{
					content: {
						maxWidth: "80%",
						margin: "auto",
					},
				}}
			>
				<button onClick={closeModal}>Close comments</button>
				{modalLoading && <div>Loading comments...</div>}
				{modalComments && <CommentList comments={modalComments} />}
			</Modal>
*/
