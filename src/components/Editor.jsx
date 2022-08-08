import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
function Editor(props) {
  const [mdinput, setmdinput] = useState(
    () => JSON.parse(localStorage.getItem("mdinput")) || []
  );
  useEffect(() => {
    localStorage.setItem("mdinput", JSON.stringify(mdinput));
  });
  const toggleinput = (x) => {
    var y = x.target.value;
    setmdinput(y);
  };
  return (
    <div className="mdeditor">
      <textarea
        placeholder="Type some Markdown code here."
        className="mdinputarea"
        style={{
          background: props.togglecolormode ? "#191e2a" : "#fff",
          color: props.togglecolormode ? "#fff" : "#000",
          border: props.togglecolormode ? "3px solid #fff" : "3px solid #000",
        }}
        name="input"
        onChange={toggleinput}
      ></textarea>
      <p style={{ fontSize: props.togglemdfontsize }}>
        <ReactMarkdown style={{ fontSize: 20 }} className="mddisplay">
          {mdinput}
        </ReactMarkdown>
      </p>
    </div>
  );
}

export default Editor;
