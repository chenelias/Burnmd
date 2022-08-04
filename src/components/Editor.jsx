import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../index.css'
function Editor() {
    var [mdinput, setmdinput] = React.useState();
    return (
      <div className='mdeditor'>
        <textarea
        className='mdinputarea'
          name="input"
          onChange={(e) => setmdinput(e.target.value)}
        ></textarea>
        <ReactMarkdown className='mddisplay'>{mdinput}</ReactMarkdown>
      </div>
  )
}

export default Editor