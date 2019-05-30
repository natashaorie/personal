import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  position: flex;
`
const DropdownButton = styled.div`
  background-color: none;
  color: #333234;
  //   color: #fffffb;
  margin-bottom: 15px;
  //   postion: absolute;

  &:hover {
    color: #aa6da3;
  }
`
const DropdownContents = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  //   overflow: hidden;
  //   position: absolute;

  & > li {
    float: down;

    & > a {
      color: #333234;
      //   color: #fffffb;
      text-decoration: none;

      &:hover {
        color: #aa6da3;
      }
    }
  }
`

export default class Dropdown extends Component {
  state = {
    showMenu: false,
  }

  showMenu = event => {
    event.preventDefault()

    this.setState(
      {
        showMenu: true,
      },
      () => {
        document.addEventListener("click", this.closeMenu)
      }
    )
  }
  closeMenu = event => {
    event.preventDefault()

    this.setState(
      {
        showMenu: false,
      },
      () => {
        document.removeEventListener("click", this.closeMenu)
      }
    )
  }
  render() {
    return (
      <Container>
        {/* <div> */}
        <DropdownButton onClick={this.showMenu}>+ Work</DropdownButton>

        {this.state.showMenu ? (
          <DropdownContents>
            <li>
              <Link to="/projects/">Tech</Link>
            </li>
            <li>
              <Link to="/design/">Art & Design</Link>
            </li>
          </DropdownContents>
        ) : null}
        {/* </div> */}
      </Container>
    )
  }
}
