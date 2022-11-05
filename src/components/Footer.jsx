import React from 'react'
import styled from 'styled-components'
import { AiOutlineSend } from "react-icons/ai";

const Container = styled.div`
    background-color: black;
    height: 40vh;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    background-color: #222;
    width: 60%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
`
const Stay = styled.h1`
    color: white;
    letter-spacing: 3px;
    font-weight: 300;
`
const EmailInput = styled.div`
    display: flex;
    gap: 30px;
`
const Input = styled.input`
    width: 25em;
    height: 3em;
    border-radius: 15px;
    outline: none;
    border: none;
    padding: 3px 3px;
    &:focus{
        outline: none;
    }
`
const Icon = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FB2576;
    border-radius: 15px;
`
const Main = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    padding: 10px 0px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoContainer = styled.div`
    width: 15em;
`
const Logo = styled.img`
    width: 100%;
`
const AboutContainer = styled.div`

`
const AboutHeading = styled.h1`
    color: white;
    font-size: 2em;
    font-weight: 300;
    letter-spacing: 3px;
`
const AboutUs = styled.h2`
    color: white;
    font-size: 1em;
    font-weight: 200;
    letter-spacing: 3px;
`
const CopyrightSection = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    height: 1em;
    width: 100%;
`
const Copyright = styled.h3`
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 3px;
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Stay>Stay In Touch</Stay>
            <EmailInput>
                <Input />
                <Icon>
                    <AiOutlineSend size={'2em'} color='white'/>
                </Icon>
            </EmailInput>
            <Main>
                <Left>
                    <LogoContainer>
                        <Logo src={require('../imgs/logo.jpg').default} />
                    </LogoContainer>
                </Left>
                <Right>
                    <AboutContainer>
                        <AboutHeading>About Us</AboutHeading>
                        <AboutUs>
                            We are a company which allows you to participate in a lucky draw.
                            And a random winner will be choosen at the end.
                        </AboutUs>
                    </AboutContainer>
                </Right>
            </Main>
            <CopyrightSection>
                <Copyright>Copyright © 2022 Website Apni All Rights Reserved</Copyright>
            </CopyrightSection>
        </Wrapper>
    </Container>
  )
}

export default Footer