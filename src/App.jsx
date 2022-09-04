import Editor from "./components/Editor";
import "./index.css";
import Nav from "./components/Nav";
import React, { useState } from "react";

function App() {
  var [togglemdfontsize, settogglemdfontsize] = useState(30);
  var [togglecolormode, settogglecolormode] = useState(false);
    const [mdinput, setmdinput] = useState()

  return (
    <div className="body">
      <Nav
        togglecolormode={togglecolormode}
        settogglecolormode={settogglecolormode}
        togglemdfontsize={togglemdfontsize}
        mdinput={mdinput}
        settogglemdfontsize={settogglemdfontsize}
      />
      <Editor
        togglecolormode={togglecolormode}
        settogglecolormode={settogglecolormode}
        togglemdfontsize={togglemdfontsize}
        mdinput={mdinput}
        setmdinput={setmdinput}
      />
    </div>
  );
}
export default App;
