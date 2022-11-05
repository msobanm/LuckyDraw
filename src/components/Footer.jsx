import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    height: 40vh;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`
const Wrapper = styled.div`
    background-color: #222;
    width: 60%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
const Stay = styled.h1`
    
`
const EmailInput = styled.div`
    
`
const Input = styled.input`
    
`
const Icon = styled.div`
    
`
const Main = styled.div`

`
const LogoContainer = styled.div`
    
`
const Logo = styled.img`
    
`
const AboutContainer = styled.div`

`
const AboutHeading = styled.h1`

`
const AboutUs = styled.h2`
    
`
const CopyrightSection = styled.div`
    background-color: white;
`
const Copyright = styled.h3`
    
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Stay>Stay In Touch</Stay>
            <EmailInput>
                <Input />
                <Icon>

                </Icon>
            </EmailInput>
            <Main>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <AboutContainer>
                    <AboutHeading>About Us</AboutHeading>
                    <AboutUs></AboutUs>
                </AboutContainer>
            </Main>
            <CopyrightSection>
                <Copyright>Copyright © 2022 Website Apni All Rights Reserved</Copyright>
            </CopyrightSection>
        </Wrapper>
    </Container>
  )
}

export default Footer