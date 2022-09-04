import { saveAs } from 'file-saver'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiFontSize, BiSleepy } from 'react-icons/bi'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { GrDocumentDownload } from 'react-icons/gr'
import '../index.css'
function Nav(props) {
    const filenametoggle = (x) => {
        var y = x.target.value
        var outputy = y===''?'README':y;
        setfilename(outputy)
    }
    const bodystyle = document.querySelector('body')
    const textareainput = document.querySelector('textarea')
    const togglecolormode = props.togglecolormode
    var setcolormode = togglecolormode ? '#191e2a' : '#fff'
    var setcolormodetext = togglecolormode ? '#fff' : '#000'
    const [downloadwindow, setdownloadwindow] = useState(false)
    const [filename, setfilename] = useState('README')
    function add() {
        props.settogglemdfontsize((prevCount) => (prevCount < 70 ? prevCount + 5 : prevCount + 0))
    }
    function subtract() {
        props.settogglemdfontsize((prevCount) => (prevCount > 10 ? prevCount - 5 : prevCount - 0))
    }
    function togglebackgroundcolor() {
        props.settogglecolormode((x) => !x)
    }
    function quickaddtexthashtag() {
        textareainput.value += '#'
        textareainput.focus()
    }
    function quickaddtextmark() {
        textareainput.value += '**'
        textareainput.focus()
    }
    function quickaddtextdash() {
        textareainput.value += '-'
        textareainput.focus()
    }
    React.useEffect(() => {
        bodystyle.style.backgroundColor = setcolormode
        bodystyle.style.color = setcolormodetext
    }, [togglecolormode])

    function downloadfile() {
        var file = new File([props.mdinput], `${filename + '.md'}`, { type: 'markdown/plain;charset=utf-8' })
        saveAs(file)
        setdownloadwindow(false)
    }
    return (
        <div className="nav">
            <div className="info">
                <a className='info-link' target='_blank' href='https://github.com/chenelias/burnmd'><AiOutlineInfoCircle/></a>
            </div>
            <div className="downloadwindow" style={{ display: downloadwindow ? 'block' : 'none' }}>
                <h1>File name</h1>
                <div className="downloadinput-div">
                    <input onChange={filenametoggle} placeholder="README" type="text" className="rename-input" />
                    <h2>.md</h2>
                </div>
                <div className="downloadinput-btn-div" style={{ display: 'flex' }}>
                    <button onClick={downloadfile} className="downloadinput-btn1" style={{ marginRight: 10 }}>
                        Download
                    </button>
                    <button onClick={() => setdownloadwindow(false)} className="downloadinput-btn2">
                        Cancel
                    </button>
                </div>
            </div>
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
            <Button onClick={() => setdownloadwindow((x) => !x)} className="download-btn">
                {<GrDocumentDownload />}
            </Button>
        </div>
    )
}

export default Nav
