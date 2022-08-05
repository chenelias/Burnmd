import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import '../index.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
function Editor(props) {
    var [mdinput, setmdinput] = useState()
    const toggleinput = (x) => {
        var y = x.target.value
        setmdinput(y)
    }
    return (
        <div className="mdeditor">
            <textarea className="mdinputarea" name="input" onChange={toggleinput}></textarea>
            <p style={{ fontSize: props.togglemdfontsize }}>
                <ReactMarkdown style={{ fontSize: 20 }} className="mddisplay">
                    {mdinput}
                </ReactMarkdown>
            </p>
        </div>
    )
}

export default Editor
