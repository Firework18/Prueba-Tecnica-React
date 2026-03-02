import ThemeContext from "../context/ThemeProvider";

import { useContext } from "react";

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme;