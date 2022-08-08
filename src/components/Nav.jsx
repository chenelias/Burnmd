import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiFontSize } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../index.css";
function Nav(props) {
  const bodystyle = document.querySelector("body");
  const togglecolormode = props.togglecolormode;
  var setcolormode = togglecolormode ? "#191e2a" : "#fff";
  var setcolormodetext = togglecolormode ? "#fff" : "#000";
  function add() {
    props.settogglemdfontsize((prevCount) =>
      prevCount < 200 ? prevCount + 5 : prevCount + 0
    );
  }
  function subtract() {
    props.settogglemdfontsize((prevCount) =>
      prevCount > 10 ? prevCount - 5 : prevCount - 0
    );
  }
  function togglebackgroundcolor() {
    props.settogglecolormode((x) => !x);
  }
  React.useEffect(() => {
    bodystyle.style.backgroundColor = setcolormode;
    bodystyle.style.color = setcolormodetext;
  }, [togglecolormode]);
  return (
    <div className="nav">
      <div className="nav-togglesize">
        <p className="react-icon">
          <BiFontSize />
        </p>
        <Button onClick={subtract} className="togglefontsize-btn">
          <AiOutlineMinus />
        </Button>
        <p className="togglefontsize-text">{props.togglemdfontsize}</p>
        <Button onClick={add} className="togglefontsize-btn">
          <AiOutlinePlus />
        </Button>
      </div>
      <div className="togglecolormode">
        <Button onClick={togglebackgroundcolor} className="togglecolormode-btn">
          <BsFillMoonStarsFill />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
