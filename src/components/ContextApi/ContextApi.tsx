import React, { useState, createContext, useContext } from "react";

type ThemeContextType = {
	theme: string;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	toggleTheme: () => {},
});

function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

function ThemeButton() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			style={{
				backgroundColor: theme === "light" ? "#fff" : "#000",
				color: theme === "light" ? "#000" : "#fff",
			}}
		>
			Change theme
		</button>
	);
}

function ContextApi() {
	return (
		<>
			<ThemeProvider>
				<ThemeButton />
			</ThemeProvider>
		</>
	);
}

export default ContextApi;
