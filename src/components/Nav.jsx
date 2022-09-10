import { saveAs } from 'file-saver'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiFontSize, BiSleepy } from 'react-icons/bi'
import {
    BsFillMoonStarsFill,
    BsFillSunFill,
    BsFileEarmarkArrowUp,
    BsFileEarmarkArrowDown,
    BsFillFileEarmarkArrowDownFill,
} from 'react-icons/bs'
import { GrDocumentDownload } from 'react-icons/gr'
import '../index.css'
import axios, { post } from 'axios'
function Nav(props) {
    const filenametoggle = (x) => {
        var y = x.target.value
        var outputy = y === '' ? 'README' : y
        setfilename(outputy)
    }
    const bodystyle = document.querySelector('body')
    const renameinput = document.querySelector('input')
    const textareainput = document.querySelector('textarea')
    const togglecolormode = props.togglecolormode
    var setcolormode = togglecolormode ? '#191e2a' : '#fff'
    var setcolormodetext = togglecolormode ? '#fff' : '#000'
    const [downloadwindow, setdownloadwindow] = useState(false)
    const [uploadwindow, setuploadwindow] = useState(false)
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
    function displaywindow() {
        setdownloadwindow((x) => !x)
        setuploadwindow(false)
        renameinput.focus()
    }
    function displaywindowupload() {
        setdownloadwindow(false)
        setuploadwindow((x) => !x)
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
    function updatemarkdownfile() {
        const formData = new FormData()
        const imagefile = document.querySelector('#file')
        formData.append('image', imagefile.files[0])
        axios.post('upload_file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    function handleUpload(event) {
        var file = event.target.files[0]
        var reader = new FileReader()
        reader.onload = (e) => {
            // textareainput.value += ' '
            let resultx = e.target.result
            props.setmdinput(resultx)
            textareainput.value = resultx
        }
        reader.readAsText(file)
        setuploadwindow(false)
    }
    return (
        <div className="nav">
            <div className="info">
                <a className="info-link" target="_blank" href="https://github.com/chenelias/burnmd">
                    <AiOutlineInfoCircle />
                </a>
            </div>
            <div
                style={{ display: uploadwindow ? 'block' : 'none', alignItems: 'center' }}
                className="downloadwindow update"
            >
                <h1>Upload file</h1>
                <h4 style={{ fontSize: '15px', fontWeight: 'normal' }}>
                    Doing this will overwrite the file
                    <br />
                    being edited now on this tab
                </h4>
                <div className="uploadbox">
                    <input
                        name="file"
                        type="file"
                        title="Upload File"
                        onChange={handleUpload}
                        className="updatefile"
                        accept=".txt,.md"
                    />
                    <h6>
                        <BsFileEarmarkArrowUp />
                        <h5>
                            Drop file to here
                            <br />
                            or
                            <br />
                            click to choose
                        </h5>
                    </h6>
                </div>
                <div className="downloadinput-btn-div" style={{ display: 'flex' }}>
                    {/* <button className="downloadinput-btn1" style={{ marginRight: 10 }}>
                        Upload
                    </button> */}
                    <button
                        onClick={() => setuploadwindow(false)}
                        style={{ marginLeft: 'auto', marginRight: 'auto' ,marginTop:'10px'}}
                        className="downloadinput-btn2"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <div
                className="downloadwindow"
                style={{ display: downloadwindow ? 'block' : 'none', alignItems: 'center' }}
            >
                <h1>Save file</h1>
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
                <Button title="Toggle ColorMode" onClick={togglebackgroundcolor} className="togglecolormode-btn">
                    {togglecolormode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                </Button>
            </div>
            <Button title="Save File" onClick={displaywindow} className="download-btn">
                {<BsFileEarmarkArrowDown />}
            </Button>
            <Button title="Upload File" onClick={displaywindowupload} className="download-btn update">
                {<BsFileEarmarkArrowUp />}
            </Button>
        </div>
    )
}

export default Nav
