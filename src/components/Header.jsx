import React from "react";
import "./Header.scss";

const Header = ({ money }) => {
  return (
    <>
      <p>You have {money} &#x20BA; </p>
    </>
  );
};

export default Header;
