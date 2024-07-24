import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');

html,
body{
  height:100%;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: unset;
  }

  ul {
    margin: unset; 
    padding: unset; 
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
