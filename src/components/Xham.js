import React, { useState } from "react";
import "./css/hamburger.css";

const Hamburger = ({ClickHandle}) => {
  return (
    <>
      <div class="menu-btnx" onClick={ClickHandle}>
        <div className='xline1'></div>
        <div className='xline2'></div>
      </div>
    </>
  );
};

export default Hamburger;
