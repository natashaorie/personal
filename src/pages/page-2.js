import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // background-image: linear-gradient(lavender, rgba(255, 0, 0, 0));
  background-color: #f9f8f8;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    width: 80%;
    margin-left: 8%;
    margin-bottom: 4%;
`
const Title = styled.h1`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // width: 100vw;
  // height: auto;

  font-size: 64px;
  color: #333234;
`
const SecondPage = () => (
  <Container>
    <SEO title="About" />
    <Header />
    <Title>About Me.</Title>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Container>
)

export default SecondPage
