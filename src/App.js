import './App.css';

import React, {useState} from 'react';
import ThemeContext from "./Context/ThemeContext";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";


const App = () => {
 const themeHook = useState("light");
 return(
  <ThemeContext.Provider value={themeHook}>
    <div>
      <Header />
      {/* <h1>Theme Toggler</h1> */}
      <HeroSection />
    </div>
  </ThemeContext.Provider>
 )
}

export default App;
