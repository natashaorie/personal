import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Dropdown from "../components/dropdown"

import resume from "../documents/resume.pdf"

const List = styled.ul`
  z-index: 10;

  list-style-type: none;
  margin: 0;
  padding: 0;

  & > li {
    width: 57px;
    float: right;
    /* display: inline; */
    margin: 20px;
    font-size: 16px;
    font-weight: semi-bold;
    overflow: visible;

    & > a {
      color: #333234;
      text-decoration: none;

      &:hover {
        color: #aa6da3;
      }
    }
  }
`

class Navigation extends React.Component {
  render() {
    return (
      <List>
        <li>
          <a href={resume} target="_blank">
            Resume
          </a>
        </li>
        <li>
          <Dropdown />
        </li>
        <li>
          <Link to="/#about2">About</Link>
        </li>
      </List>
    )
  }
}

export default Navigation
