import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navigation from "../components/navigation"

import signature from "../images/sig2.png"

const Logo = styled.img`
  width: 120px;
  height 50px;
  position: absolute;
  z-index: 10;
  top: 25px;
  left: 25px;
`

const Container = styled.div`
  // width: 120 px;
  // height: 50px;
  // display: flex;
  // flex-direction: row;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  padding-bottom: 20px;
  position: fixed;
  top: 0;
`

const Subtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: light;
  color: #666368;
`

const Header = () => (
  <Container>
    <a href="/">
      <Logo src={signature} />
    </a>
    <Navigation />
  </Container>
)

export default Header
