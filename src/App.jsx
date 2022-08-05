import Editor from './components/Editor'
import './index.css'
import Nav from './components/Nav'
import React,{useState} from 'react'

function App() {
    var [togglemdfontsize, settogglemdfontsize] = useState(40)
    return (
        <>
            <Nav togglemdfontsize={togglemdfontsize} settogglemdfontsize={settogglemdfontsize}/>
            <Editor togglemdfontsize={togglemdfontsize}  />
        </>
    )
}
export default App