import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../index.css'

function Editor() {
    var [mdinput, setmdinput] = React.useState()
    const toggleinput = (x) => {
        var y = x.target.value
        setmdinput(y)
    }
    return (
        <div className="mdeditor">
            <textarea className="mdinputarea" name="input" onChange={toggleinput}></textarea>
            <p style={{ fontSize: '40px' }}>
                <ReactMarkdown style={{ fontSize: 20 }} className="mddisplay">
                    {mdinput}
                </ReactMarkdown>
            </p>
        </div>
    )
}

export default Editor
