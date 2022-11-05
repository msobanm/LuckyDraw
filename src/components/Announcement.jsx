import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: black;
  height: 40vh;
  border-top: 0.1px solid white;
  border-bottom: 0.1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
const NextAnnouncement = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 3em;
  letter-spacing: 3px;
`
const Timer = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 300;
  letter-spacing: 3px;
`
const Winner = styled.h1`
  color: black;
  font-size: 3em;
  font-weight: 900;
  letter-spacing: 3px;
  -webkit-text-stroke: 1px #FB2576;
  /* display: none; */
`

const Announcement = () => {
  return (
    <Container>
        <NextAnnouncement>Next Announcement:</NextAnnouncement>
        <Timer>00:00:00</Timer>
        <Winner>Last Winner: Habibi</Winner>
    </Container>
  )
}

export default Announcement