import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return document.documentElement.getAttribute("data-theme") === "dark"
            || window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const handleClickTheme = () => {
        setDarkMode(prev => !prev);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <ThemeContext.Provider
            value=
            {{
                darkMode,
                handleClickTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider };
export default ThemeContext;