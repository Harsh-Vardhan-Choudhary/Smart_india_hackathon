import React, { useState } from "react";
import "./Mainpage.css";

// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../theme";

import Scholarship_card from "../Scholarship_card/Scholarship_card";
import Eleborated from "../Eleborated/Eleborated";

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
        {" "}
        {/* <GlobalStyles> */}{" "}
        <StyledApp>
          <button className="button" onClick={() => themeToggler()}>
            {" "}
            🌙{" "}
          </button>{" "}
          
          <div className="div_main">
            <div className="div_containt">
              <h2> Lorem ipsum dolor sit amet consectetur. </h2>
              <br />
              <p className="lorem">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas
                repudiandae corporis placeat quaerat aliquid nemo iusto
                architecto molestias est vel enim illo, numquam dolore cumque
                facere ? Itaque harum eos quod eius ea!{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="btn">
            <div className="btn1">
              {" "}
              <button type="text"> browse more </button>
            </div>
            <div className="btn1">
              {" "}
              <button type="text"> browse more </button>
            </div>
          </div>{" "}
          <div className="card">
            <div className="card1">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
              aliquam quidem neque deserunt, impedit veritatis!{" "}
            </div>{" "}
            <div className="card1">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
              aliquam quidem neque deserunt, impedit veritatis!{" "}
            </div>{" "}
            <div className="card1">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid
              aliquam quidem neque deserunt, impedit veritatis!{" "}
            </div>{" "}
          </div>
          <br />
          <Scholarship_card />
          <Scholarship_card />
          <export Eleborated />
          <Footer />
        </StyledApp>{" "}
      </ThemeProvider>{" "}
    </>
  );
}
