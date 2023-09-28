import React from "react";

const Welcome = () => {
	const imageUrl =
		"https://cdn.pixabay.com/photo/2016/01/20/11/54/book-wall-1151405_640.jpg";

	const divStyle = {
		backgroundImage: `url(${imageUrl})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};

	return (
		<div className="bg-cover" style={divStyle}>
			<div className="container p-5">
				<h1 className="mark">Leggere allunga la vita</h1>
				<p className="mark">
					Non hai più scuse per non leggere, da noi trovi ogni tipo di libro a
					prezzi super!
				</p>
			</div>
		</div>
	);
};

export default Welcome;

/*
import React, { useContext } from "react";
import { Theme } from "../../Contexts/ThemeChanger";

const Welcome = () => {
	const { isDarkMode } = useContext(Theme);

	return (
		<div
			className={`m-5 ${
				isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
			}`}
		>
			<h1>Leggere allunga la vita</h1>
			<p>
				Non hai più scuse per non leggere, da noi trovi ogni tipo di libro a
				prezzi super!
			</p>
		</div>
	);
};

export default Welcome;
*/
