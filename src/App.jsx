import Editor from './components/Editor'
import './index.css'
import Nav from './components/Nav'
import React, { useState, useEffect, useRef } from 'react'
window.addEventListener('beforeunload', function (e) {
    var confirmationMessage =
        'It looks like you have been editing something. ' + 'If you leave before saving, your changes will be lost.'
    ;(e || window.event).returnValue = confirmationMessage
    return confirmationMessage
})
function App() {
    var [togglemdfontsize, settogglemdfontsize] = useState(30)
    const [togglecolormode, settogglecolormode] = useState(getMode)
    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(togglecolormode))
    }, [togglecolormode])

    function getMode() {
        const savedmode = JSON.parse(localStorage.getItem('dark'))
        return savedmode || false
    }

    const [mdinput, setmdinput] = useState('')

    return (
        <div className="body">
            <Nav
                togglecolormode={togglecolormode}
                settogglecolormode={settogglecolormode}
                togglemdfontsize={togglemdfontsize}
                mdinput={mdinput}
                setmdinput={setmdinput}
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
    )
}
export default App
