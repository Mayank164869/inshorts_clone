import React from "react";
import Menuicon from "../Menuicon";

const Header = ({ setcategory }) => {
  return (
    <div>
      <div className="inshorts-header">
        <div className="icon">
          <Menuicon setcategory={setcategory}></Menuicon>
        </div>
        <img
          style={{ cursor: "pointer", paddingTop: "0.5rem" }}
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png "
          height="90%"
          alt="inshorts-logo"
        />
        <a
          className="github-icon"
          href="https://github.com/Mayank164869/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "10px",
              height: "2rem",
              width: "2rem",
              padding: "3px",
              marginTop: "1.3rem",
              background: "white",
              cursor: "pointer",
            }}
            src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"
            alt="github-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
