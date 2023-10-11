import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
const [theme, setTheme] = useState("light");
const themeToggler = () => {
  theme === "light" ? setTheme("dark") : setTheme("light");
}
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Body>
        <Router>
          {/* <Container maxWidth="lg"> */}
            <Navbar theme={theme} toggleTheme={themeToggler} />
            <HeroSection />
            <Wrapper>
              {/* <HeroSection /> */}
              <Contact />
            </Wrapper>
            <Footer />
          {/* </Container> */}
        </Router>
      </Body>
    </ThemeProvider>
  );
}

export default App;

