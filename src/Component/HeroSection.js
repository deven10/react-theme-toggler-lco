import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppColor from "../Color";

const HeroSection = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    // const theme = useContext(ThemeContext)[0];
    const currentTheme = AppColor[themeMode];

    return(
        <div
            style={{
                color:`${currentTheme.textColor}`,
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                textAlign: "center"
            }}
        >
            <h1>CONTEXT API Theme Toggler</h1>
            <p>Deven Umrania, Mumbai</p>
            <button onClick={
                        () => {
                            setThemeMode(themeMode === "light" ? "dark" : "light")
                        }
                    }   
                    style={{
                        backgroundColor: "green",
                        padding: "10px 50px",
                        fontSize: "20px",
                        color: "#fff",
                        border: `${currentTheme.border}`,
                        cursor: "pointer"
                    }}
            >{themeMode === "light" ? "Turn on Dark Theme" : "Turn on Light Theme"}</button>
        </div>
    )
}

export default HeroSection;