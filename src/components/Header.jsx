import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'


const Container = styled.div`
    
`
const Navs = styled.div`
    display: flex;
    width: 100%;
`
const Links = styled.div`
    flex: 6;
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
`
const Buttons = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Login = styled.button`
    border-radius: 10px;
    width: 7em;
    padding: 5px 0;
    color: white;
    background-color: #FB2576;
    border: 0.5px solid #FB2576;
    font-weight: 300;
    transition: 0.3s ease;
    &:hover{
        color: #FB2576;
        background-color: white;
        border: 0.5px solid #FB2576;
    }
`
const Register = styled.button`
    border-radius: 10px;
    width: 7em;
    padding: 5px 0;
    color: white;
    background-color: #FB2576;
    border: 0.5px solid #FB2576;
    font-weight: 300;
    transition: 0.3s ease;
    &:hover{
        color: #FB2576;
        background-color: white;
        border: 0.5px solid #FB2576;
    }
`
const brand = {
    marginLeft: '12px'
}

const Header = () => {
  return (
    <Container>
        <Navbar bg='light' variant='light'>
            <Navbar.Brand style={brand}>Logo</Navbar.Brand>
            <Navs>
                <Links>    
                    <Nav.Link href=''>Home</Nav.Link>
                    <Nav.Link href=''>Contact</Nav.Link>
                    <Nav.Link href=''>About US</Nav.Link>
                </Links>
                <Buttons>
                    <Login>Login</Login>
                    <Register>Register</Register>
                </Buttons>
            </Navs>
        </Navbar>
    </Container>
  )
}

export default Header