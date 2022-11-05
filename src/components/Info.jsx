import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-between;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 813px;
    padding: 20px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Win = styled.h1`
    color: white;
    font-size: 5em;
    font-weight: 300;
    letter-spacing: 3px;
    width: max-content;
`
const Text = styled.h2`
    color: white;
    font-size: 1em;
    letter-spacing: 3px;
    width: max-content;
    font-weight: 200;
`
const ImageContainer = styled.div`
    width: 1200px;
`
const Image = styled.img`
    width: 100%;
`

const Info = () => {
  return (
    <Container>
        <InfoContainer>
            <TextWrapper>
                <Win>WIN IT ALL!</Win>
                <Text>Try Your Luck And Win Some Cash!</Text>
            </TextWrapper> 
        </InfoContainer> 
        <ImageContainer>
            <Image src={require('../imgs/jackpot.jpg').default}/>
        </ImageContainer>
    </Container>
  )
}

export default Info