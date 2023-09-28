import React, { useState } from "react";
import LatestRelease from "../components/LatestRelease/LatestRelease";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import MyFooter from "../components/MyFooter/MyFooter";
import ThemeContext from "../Contexts/ThemeChanger";
import Welcome from "../components/welcome/Welcome";

const Home = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = (value) => {
		setSearchValue(value);
	};

	return (
		<>
			<ThemeContext>
				<MyNavbar onSearchChange={handleSearchChange} />
				<Welcome />
				<LatestRelease searchValue={searchValue} />
				<MyFooter />
			</ThemeContext>
		</>
	);
};

export default Home;
