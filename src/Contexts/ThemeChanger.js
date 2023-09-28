import React, { useContext, useState, createContext } from "react";

export const Theme = createContext();

const ThemeContext = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	return (
		<Theme.Provider value={{ isDarkMode, setIsDarkMode, toggleDarkMode }}>
			{children}
		</Theme.Provider>
	);
};

export default ThemeContext;
