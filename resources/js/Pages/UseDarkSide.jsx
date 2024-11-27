import { useEffect, useState } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme || "light");

    useEffect(() => {
        const root = window.document.documentElement;
        const colorTheme = theme === "dark" ? "light" : "dark";
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}