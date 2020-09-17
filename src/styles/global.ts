import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 10px;
  }

  .container {
    margin: 0 auto;
    width: 90%;
    max-width: 130rem;
    /* background: #222; */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    color: #888;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  h1 {
    font-size: 3.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: #313131;
  }

  p{
    color: #6c757d;
    font-size: 1.8rem;
  }

  button{
    cursor: pointer;
  }

  li {
    font-size:16px;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  /* ScrollBar */

  ::-webkit-scrollbar {
    margin-right: 5px;
    background-color: #333;
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webit-box-shadow: 0 0 2px #ccc;
    box-shadow: 0 0 2px #ccc;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px #878787 solid;
    border-radius: 12px;
    background: #000000;
    -webit-box-shadow: 0 0 8px #555 inset;
    box-shadow: 0 0 8px #555 inset;
    -webit-transition: all .3s ease-out;
    transition: all .3s ease-out;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: #bbb;
    box-shadow: 0 0 8px #999 inset;
  }

  ::-webkit-scrollbar-thumb:hover { background: #565656 }

`;
