import Editor from "./components/Editor";
import "./index.css";
import Nav from "./components/Nav";
import React, { useState } from "react";

function App() {
  var [togglemdfontsize, settogglemdfontsize] = useState(40);
  var [togglecolormode, settogglecolormode] = useState(false);
  return (
    <div className="body">
      <Nav
        togglecolormode={togglecolormode}
        settogglecolormode={settogglecolormode}
        togglemdfontsize={togglemdfontsize}
        settogglemdfontsize={settogglemdfontsize}
      />
      <Editor
        togglecolormode={togglecolormode}
        settogglecolormode={settogglecolormode}
        togglemdfontsize={togglemdfontsize}
      />
    </div>
  );
}
export default App;
