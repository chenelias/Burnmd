import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiFontSize } from "react-icons/bi";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsWindowSidebar,
} from "react-icons/bs";
import "../index.css";
function Nav(props) {
  const bodystyle = document.querySelector("body");
  const textareainput = document.querySelector("textarea");
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
  function quickaddtexthashtag() {
    textareainput.value += "# ";
    textareainput.focus();
  }
  function quickaddtextmark() {
    textareainput.value += "**";
    textareainput.focus();
  }
  function quickaddtextdash() {
    textareainput.value += "- ";
    textareainput.focus();
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
      <div className="quickadd">
        <Button onClick={quickaddtexthashtag} className="quickadd-btn">
          #
        </Button>
        <Button onClick={quickaddtextdash} className="quickadd-btn">
          -
        </Button>
        <Button onClick={quickaddtextmark} className="quickadd-btn">
          *
        </Button>
      </div>
      <div className="togglecolormode">
        <Button onClick={togglebackgroundcolor} className="togglecolormode-btn">
          {togglecolormode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </Button>
      </div>
    </div>
  );
}

export default Nav;
