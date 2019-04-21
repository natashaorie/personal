import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // background-image: linear-gradient(lavender, rgba(255, 0, 0, 0));
  background-color: #f9f8f8;
  background-size: cover;
  // overflow: visible;

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
  // display: bottom;
  bottom: 0px;
`
const BodyContainer = styled.div`
  width: 500px;
  // height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 700px;
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
  // background-color: none;
  // margin-top: 500px;
  overflow-y: visible;
  // position: fixed;
  // top: 0;
  z-index: 5;
`
const Title = styled.h1`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // width: 100vw;
  // height: auto;

  font-size: 60px;
  color: #f9f8f8;

  & mark.highlight {
    background: none;
    color: #b118c8;
  }
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: light;
  color: #666368;
  // color: white;
  z-index: 5;
`
const SectionTitle = styled.h2`
  font-size: 20px;
  text-align: left;
  width: 100%;
  z-index: 5;
  // color: white;
`
const Section = styled.p`
  font-size: 18px;
  text-align: justify;
  width: 100%;
  z-index: 5;
  // color: #fffffb;
`
const Logo = styled.a`
  // filter: invert(100%);
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
  // width: 250px;
  /* height: 400px; */
  position: absolute;
`

const IndexPage = () => (
  <div>
    {/* <Navigation /> */}
    <Container>
      <HeadContainer>
        <Logo href="/">
          <img src={signature} alt="NxO." />
        </Logo>
        <Subtitle>I like to make things.</Subtitle>
        <Navigation />
        {/* <a href="#About">about</a> */}
      </HeadContainer>
      {/* <Navigation /> */}
      {/* <Header /> */}
    </Container>
    <AboutContainer id="about2">
      {/* <a id="About" /> */}
      <ImgContainer>
        <Profile src={selfdrawnbw} alt="self" />
        <Profile src={selfbw} alt="self" className="self-image" />
      </ImgContainer>
      <BodyContainer>
        <Title>Hi, I'm Natasha X. Orie.</Title>
        <Title>
          Student-researcher at{" "}
          <mark class="highlight"> UC&nbsp;Riverside</mark> and future intern at{" "}
          <mark class="highlight">Microsoft</mark>.
        </Title>
        <div>
          <SectionTitle>What am I?</SectionTitle>
          <Section>
            I am a 4th year Computer Science student at the University of
            California, Riverside.
          </Section>
          <SectionTitle>Where am I?</SectionTitle>
          <Section>
            Currently, I am doing research in UCR's Microfluidics lab and the
            Networks lab. This summer I will be in Seattle working for Microsoft
            as a Program Manager intern.
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
