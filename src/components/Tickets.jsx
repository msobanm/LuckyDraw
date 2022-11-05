import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 65vh;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
`
const TicketsText = styled.h1`
    color: white;
    font-size: 3em;
    font-weight: 300;
    letter-spacing: 3px;
`
const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 150px;
    grid-row-gap: 20px;
`
const Notes = styled.img`
    width: 100%;
    border-radius: 15px;
`
const Amount = styled.h1`
    color: white;
    font-weight: 200;
    letter-spacing: 3px;
`
const TenRs = styled.div`
    width: 10em;
    cursor: pointer;
    border-radius: 15px;
`
const ThirtyRs = styled.div`
    width: 10em;
    cursor: pointer;
    border-radius: 15px;
`
const FiftyRs = styled.div`
    width: 10em;
    cursor: pointer;
    border-radius: 15px;
`
const HundredRs = styled.div`
    width: 10em;
    cursor: pointer;
    border-radius: 15px;
`

const Tickets = () => {
  return (
    <Container>
        <TicketsText>Tickets:</TicketsText>
        <ImageContainer>
            <TenRs>
                <Notes src={require('../imgs/10-2.jpg').default}/>
                <Amount>10 Rs</Amount>
            </TenRs>
            <ThirtyRs>
                <Notes src={require('../imgs/30-2.jpg').default}/>
                <Amount>30 Rs</Amount>
            </ThirtyRs>
            <FiftyRs>
                <Notes src={require('../imgs/50-2.jpg').default}/>
                <Amount>50 Rs</Amount>
            </FiftyRs>
            <HundredRs>
                <Notes src={require('../imgs/100-2.jpg').default}/>
                <Amount>100 Rs</Amount>
            </HundredRs>
        </ImageContainer>
    </Container>
  )
}

export default Tickets