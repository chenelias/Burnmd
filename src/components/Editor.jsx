import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import '../index.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
function Editor(props) {
    const [mdinput, setmdinput] = useState(() => JSON.parse(localStorage.getItem('mdinput')) || [])
    useEffect(() => {
        localStorage.setItem('mdinput', JSON.stringify(mdinput))
    })
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
