import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BiFontSize } from 'react-icons/bi'
import '../index.css'
function Nav(props) {
    function add() {
        props.settogglemdfontsize((prevCount) => (prevCount < 200 ? prevCount + 5 : prevCount + 0))
    }
    function subtract() {
        props.settogglemdfontsize((prevCount) => (prevCount > 10 ? prevCount - 5 : prevCount - 0))
    }
    return (
        <div className="nav">
            <div className='nav-togglesize'>
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
        </div>
    )
}

export default Nav
