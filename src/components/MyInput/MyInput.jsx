import React, { useState } from "react";

const MyInput = ({ onSearchQuery }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		const value = e.target.value.toLowerCase();
		onSearchQuery(value);
		setInputValue(e.target.value);
	};

	return (
		<div className="m-4">
			<input
				placeholder="Cerca"
				label="cerca"
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default MyInput;
