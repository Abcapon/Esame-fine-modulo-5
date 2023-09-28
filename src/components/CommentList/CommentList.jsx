import React from "react";
import { Trash } from "react-bootstrap-icons";
import { nanoid } from "nanoid";
import RatingField from "../RatingField/RatingField";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA5ODkwOGE3YzIyZjAwMTRjMTAzZjUiLCJpYXQiOjE2OTUxMjQxOTQsImV4cCI6MTY5NjMzMzc5NH0.GUqxcsPUp5JUVltYadCVMC7Xj52c1Qr4N2saP7lnM7U";

const CommentList = ({ comments }) => {
	const handleDelete = async (id) => {
		try {
			const response = await fetch(url + id, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			if (!response.ok) {
				throw new Error(`Network response was not ok: ${response.statusText}`);
			}

			return response.json();
		} catch (error) {
			console.error("Errore durante l'eliminazione del commento:", error);
			throw error;
		}
	};

	return (
		<div>
			{comments.map((comment) => (
				<div className="m-3 border border-3" key={nanoid()}>
					<div>{comment.comment}</div>
					<div>
						<RatingField rating={comment.rate} editable={false} />
					</div>
					<div>{comment.author}</div>
					<button onClick={() => handleDelete(comment._id)}>
						<Trash color="red" />
					</button>
				</div>
			))}
		</div>
	);
};

export default CommentList;
/*
import React from "react";
import { Trash } from "react-bootstrap-icons";
import { nanoid } from "nanoid";
import RatingField from "../RatingField/RatingField";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA5ODkwOGE3YzIyZjAwMTRjMTAzZjUiLCJpYXQiOjE2OTUxMjQxOTQsImV4cCI6MTY5NjMzMzc5NH0.GUqxcsPUp5JUVltYadCVMC7Xj52c1Qr4N2saP7lnM7U";

const CommentList = ({ comments }) => {
	const handleDelete = async (id) => {
		try {
			return await fetch(url + id, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
		} catch (error) {
			console.log("Errore durante l'eliminazione del commento:", error);
		}
	};

	return (
		<div>
			{comments.map((comment) => (
				<div className="m-3 border border-3" key={nanoid()}>
					<div>{comment.comment}</div>
					<div>
						<RatingField rating={comment.rate} />
					</div>
					<div>{comment.author}</div>
					<button onClick={() => handleDelete(comment._id)}>
						<Trash color="red" />
					</button>
				</div>
			))}
		</div>
	);
};

export default CommentList;

*/
