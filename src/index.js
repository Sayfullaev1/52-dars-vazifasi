import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/headeer.script.jsx';
import Main from './main/main.script.jsx';
import Article from './article/article.script.jsx';


const container = ReactDOM.createRoot(document.querySelector(".container"));
container.render(
  <React.StrictMode>

    <Header />

    <Main />

    <Article />

  </React.StrictMode> 
);
