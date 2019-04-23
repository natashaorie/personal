import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

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
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  position: relative;
  height: 400px;
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
      <ImgContainer>
        <Profile src={selfdrawnbw} alt="self" />
        <Profile src={selfbw} alt="self" className="self-image" />
      </ImgContainer>
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
            When I was little, I wanted to be a fashion designer, a hair
            stylist, an author. When people find out what I do now, they always
            want to know:
          </Section>
          <SectionTitle>How did I end up in tech?</SectionTitle>
          <Section>
            I don't believe in doing things by halves. When I started on my
            journey into computer science, I was almost positive that I was
            going to fail. But I decided I
          </Section>
          <Section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            dui non velit egestas facilisis id commodo orci. Nullam aliquam odio
            et commodo interdum. Nam sed tincidunt eros, nec porttitor enim. Sed
            luctus augue urna, sit amet rhoncus metus consequat non. Sed gravida
            bibendum ante, in lacinia ligula efficitur ac. Sed laoreet metus eu
            eros lobortis vehicula in eu dolor. Nam felis est, auctor sed
            elementum vel, blandit in ex. Pellentesque vitae massa est.
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
