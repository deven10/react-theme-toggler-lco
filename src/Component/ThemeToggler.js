import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div onClick={
            () => {
               setThemeMode(themeMode === "light" ? "dark" : "light")
            }
        }>
           {/* <span style={{
                textDecoration: "underline",
                color: "#23C4ED",
                padding: "20px 0px 0px 50px",
                fontSize: "32px",
                cursor: "pointer"
            }}>{themeMode === "light" ? "Turn on Dark Theme" : "Turn on Light Theme"}</span> */}
        </div>
    )
}

export default ThemeToggler;
