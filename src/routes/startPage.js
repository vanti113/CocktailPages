import React from "react";
import left from "../images/left.jpg";
import right from "../images/right.jpg";
import { Link } from "react-router-dom";

function startPages(props) {
  return (
    <div className="sp_body">
      <header className="sp_header">
        <div className="header_title">
          <span className="title_font">La vita dolce</span>
        </div>
        <div className="header_sub">
          <span>Find your drinks and style</span>
        </div>
      </header>
      <main className="sp_main">
        <Link to="/ordinary" className="link">
          <div className="sp_main_1">
            <img src={right} alt="right"></img>
            <span className="sp_imgLeft_title">Ordinary Drinks</span>
          </div>
        </Link>
        <Link to="/cocktail" className="link">
          <div className="sp_main_2">
            <img src={left} alt="left" />
            <span className="sp_imgRight_title">Cocktails</span>
          </div>
        </Link>
      </main>
      <footer className="sp_footer">
        <div>
          <i class="far fa-copyright"></i>
          <span>All API Datas are served by 2020 The Cocktail DB.</span>
        </div>
        <div>
          <span>This page Powered by</span>
          <i class="fab fa-react"></i>
        </div>
      </footer>
    </div>
  );
}

export default startPages;
