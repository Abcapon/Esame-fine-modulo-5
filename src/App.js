import React, { useState } from "react";
/*
import LatestRelease from "./components/LatestRelease/LatestRelease";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter";

*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Description from "./Pages/description";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
	/*
	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = (value) => {
		setSearchValue(value);
	};
	*/

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/book/:bookId" element={<Description />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
