import React from 'react'
import styled from 'styled-components'
import MemoryGame from './MemoryGame'
import BrickBust from './BrickBust'
import { assertTSAnyKeyword } from '@babel/types'

const Island = () => {

    return(

        <IslandContainer>
            <div>
                <MemoryGame/>
                <BrickBust/>
            </div>
        </IslandContainer>
    )

}

export default Island;

const IslandContainer = styled.section`
    
    background-image: url("https://i.redd.it/ksrpnggg59f61.jpg")

`

const BrickBustButton = styled.button`


`