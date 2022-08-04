import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
function Nav() {
    var [togglemdfontsize, settogglemdfontsize] = React.useState(40)

    return (
        <div>
            <Button className="togglefontsize-btn">
                <AiOutlinePlus />
            </Button>

            <Button className="togglefontsize-btn">
                <AiOutlineMinus />
            </Button>
        </div>
    )
}

export default Nav
