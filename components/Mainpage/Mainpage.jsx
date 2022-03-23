import React, { useState } from "react";
import "./Mainpage.css";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../theme";
import Slideshow from "../Slideshow/Slideshow";
import Scholarship_card from "../Scholarship_card/Scholarship_card"
import Eleborated from "../Eleborated/Eleborated";

import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Mainpage() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
        <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {/* <GlobalStyles> */}
      <StyledApp>
        <button className="button" onClick={() => themeToggler()}>🌙</button>
        <Navbar/>
        <Slideshow/>
        <Scholarship_card/>
        <Scholarship_card/>
        <Scholarship_card/>
        <Eleborated/>
        <Footer/>
      </StyledApp>
      {/* </GlobalStyles> */}
    </ThemeProvider>
    </>
  );
}

export default Mainpage;