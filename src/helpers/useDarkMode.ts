import { useEffect, useState } from "react";

const useDarkMode = () => {
	const [theme, setTheme] = useState("light");
	const root = window.document.documentElement;

	const setMode = (mode: string) => {
		localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		// eslint-disable-next-line no-unused-expressions
		theme === "light" ? setMode("dark") : setMode("light");
		root.classList.toggle("dark");
	};

	useEffect(() => {
		const localTheme: string = localStorage.getItem("theme") || "";

		if (
			localTheme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			root.classList.add("dark");
			setMode("dark");
		} else {
			root.classList.remove("dark");
			setMode(localTheme);
		}
	}, [root.classList]);

	return [theme, toggleTheme] as const;
};

export default useDarkMode;
