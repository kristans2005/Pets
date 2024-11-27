import React, { useState } from "react";
import useDarkSide from "./UseDarkSide";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = () => {
        const newTheme = colorTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setDarkSide(!darkSide);
    };

    return (
        <div className=" justify-center items-center h-screen">
            <button 
                onClick={toggleDarkMode}
                className={`flex items-center px-2 py-2 border-2 rounded-full transition-colors duration-300 ${
                    darkSide ? "bg-gray-800 text-white border-white" : "bg-white text-gray-800 border-gray-800"
                }`}
            >
                <i className={` ${darkSide ? "fas fa-sun fa-2x" : "fas fa-moon fa-2x"}`}></i>
                
            </button>
        </div>
    );
}