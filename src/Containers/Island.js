import React from 'react'
import styled from 'styled-components'
import MemoryGame from './MemoryGame'
import BrickBust from './BrickBust'
import SkyKingdom from '../assets/SkyKingdom.jpeg'

const Island = () => {

    return(

        <IslandContainer>
            <div>
                <MemoryGame/>
                <BrickBustButton>
                    <BrickBust/>
                </BrickBustButton>
                
            </div>
        </IslandContainer>
    )

}

export default Island;

const IslandContainer = styled.div`
    background-image: ${SkyKingdom};
    width: 2000px;
    height: 2000px;

`

const BrickBustButton = styled.button`

    color: tomato;
    border-color: tomato;

`