import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { SocialIcon } from "react-social-icons"

import signature from "../images/sig2.png"
import background from "../images/dark-roses.jpg"
import self from "../images/self.jpg"
import selfdrawn from "../images/self-drawn.jpg"
import selfbw from "../images/selfbw.jpg"
import selfdrawnbw from "../images/selfdrawnbw.jpg"
import paper from "../images/paper.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f8f8;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  flex-grow: 1;
  flex-basis: auto;

  & input {
    width: 80%;
    margin-left: 8%;
    margin-bottom: 4%;
  }
`
const AboutContainer = styled(Container)`
  height: auto;
  background-color: #bbb5bd;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  flex: 3;
  flex-grow: 3;
  flex-basis: auto;
`
const Background = styled.img`
  width: 700px;
  height: 500px;
  position: absolute;
  z-index: 1;
  bottom: 0px;
`
const BodyContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  margin: 50px;
`
const ProfileContainer = styled(BodyContainer)`
  width: auto;
`
const HeadContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  overflow-y: visible;
  z-index: 5;
`
const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.5;
  color: #f9f8f8;

  & mark.highlight {
    background: none;
    color: #b118c8;
  }
`
const Blurb = styled.div`
  margin-bottom: 50px;
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  /* color: #666368; */
  color: #aa6da3;
  z-index: 5;
`
const SectionTitle = styled.h2`
  font-size: 20px;
  text-align: left;
  width: 100%;
  z-index: 5;
`
const Section = styled.p`
  font-size: 18px;
  line-height: 1.8;
  /* text-align: justify; */
  width: 100%;
  z-index: 5;
`
const Logo = styled.a`
  z-index: 10;
`

const BackImg = styled.img`
  width: 50%;
  height: auto;
  position: absolute;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 60px; */
  position: relative;
  height: 450px;
  width: 300px;

  .self-image {
    opacity: 1;
    transition: opacity 0.5s ease-out;
    -moz-transition: opacity 0.5s ease-out;
    -webkit-transition: opacity 0.5s ease-out;
    -o-transition: opacity 0.5s ease-out;
  }

  .self-image:hover {
    opacity: 0;
  }
`
const Profile = styled.img`
  position: absolute;
  width: 100%;
`
const List = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0;

  & > li {
    width: auto;
    float: right;
    /* display: inline; */
    margin: 20px;
    font-size: 16px;
    font-weight: semi-bold;
    overflow: visible;

    &:hover {
      color: #aa6da3;
    }
  }
`

const IndexPage = () => (
  <div>
    {/* <Navigation /> */}
    <Container>
      <BackImg src={paper} alt="paper" />
      <HeadContainer>
        <Logo href="/">
          <img src={signature} alt="NxO." />
        </Logo>
        <Subtitle>I like to make things.</Subtitle>
        <Navigation />
      </HeadContainer>
    </Container>
    <AboutContainer id="about2">
      {/* <a id="About" /> */}
      <ProfileContainer>
        <ImgContainer>
          <Profile src={selfdrawnbw} alt="self" />
          <Profile src={selfbw} alt="self" className="self-image" />
        </ImgContainer>
        <List>
          <li>
            <SocialIcon
              url="https://www.instagram.com/natasha.orie/"
              bgColor="#f9f8f8"
            />
          </li>
          <li>
            <SocialIcon url="http://github.com/natashaorie" bgColor="#f9f8f8" />
          </li>

          <li>
            <SocialIcon
              url="http://linkedin.com/in/natashaorie"
              bgColor="#f9f8f8"
            />
          </li>
          <li>
            <SocialIcon
              url="mailto:nxorie@gmail.com"
              target="_blank"
              network="email"
              bgColor="#f9f8f8"
            />
          </li>
        </List>
      </ProfileContainer>
      <BodyContainer>
        <Blurb>
          <Title>Hi, I'm Natasha X. Orie.</Title>
          <Title>
            Student-researcher at{" "}
            <mark class="highlight"> UC&nbsp;Riverside</mark> and future intern
            at <mark class="highlight">Microsoft.</mark>
          </Title>
        </Blurb>
        <div>
          {/* <SectionTitle>What am I?</SectionTitle> */}
          <Section>
            On the side I like to paint and make graphics. Occasionally I climb
            up walls and lift heavy things.
          </Section>
          <SectionTitle>How did I end up in tech?</SectionTitle>
          <Section>I don't believe in doing things by halves.</Section>
          <Section>
            When people ask how I chose between art and tech, or how I balance
            the two, the answer is: I don't. All of my work is created through a
            blend of the many approaches that I learned through each discipline.
            The way I describe it is: my insticts are artistic and my skills are
            technical.
          </Section>
          <SectionTitle>Who am I?</SectionTitle>
        </div>
      </BodyContainer>
      {/* <Background src={background} /> */}

      {/* <Footer /> */}
    </AboutContainer>
    <Footer />
  </div>
)

export default IndexPage
