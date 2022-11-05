import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  width: 50vh;
  height: 30vh;
  border-radius: 15px;
  box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.46) inset;
  -webkit-box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.46) inset;
  -moz-box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.46) inset;
`  
const Text = styled.h1`
  font-weight: 300;
  color: black;
`
const Username = styled.input`
  width: 70%;
  border: none;
  border-bottom: 0.5px solid black;
  padding: 5px 5px;
  &:focus{
    outline: none;
  }
`
const Password = styled.input`
  width: 70%;
  border: none;
  border-bottom: 0.5px solid black;
  padding: 5px 5px;
  &:focus{
    outline: none;
  }
`
const LoginButton = styled.button`
  border-radius: 10px;
  width: 70%;
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

const Login = () => {
  return (
    <Container>
        <Form>
            <Text>Login</Text>
            <Username placeholder='Username'/>
            <Password placeholder='Password'/>
            <LoginButton>Login</LoginButton>
        </Form>
    </Container>
  )
}

export default Login