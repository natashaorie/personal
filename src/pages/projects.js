import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

// import ImageGallery from "react-image-video-gallery"
import wrappedSignin from "../projects/wrapped-signin.png"
import wrappedSignup from "../projects/wrapped-signup.png"
import wrappedDash from "../projects/wrapped-dashboard.png"
import wrappedEvent from "../projects/wrapped-event.png"

import shoomHome from "../projects/shoomHome.png"
import shoomResults from "../projects/shoomResults.png"

import mouse2 from "../images/mouse2.jpg"
import mouse1 from "../images/mouse1.jpg"
import mouse from "../images/mouse.mp4"

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-image: linear-gradient(#f9f8f8, #bbb5bd);
  background-color: #f9f8f8;
  background-size: cover;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    width: 80%;
    margin-left: 8%;
    margin-bottom: 4%;
  }
`
const HeadContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: justify; */
`
const Title = styled.h1`
  font-size: 64px;
  /* font-weight: 300; */
  color: #333234;
  margin-top: 100px;
  margin-bottom: 50px;
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  line-height: 1.5;
  color: #666368;
`
const ProjectListContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`
const ImageContainer = styled.div`
  width: 70%;
  /* max-height: 500px; */
  height: auto;
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  overflow: visible;
`
const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-shrink: 1;
  flex-wrap: wrap;
  margin: 50px;
`
const Image = styled.img`
  height: 300px;
  width: auto;
  margin: 10px;
  flex-shrink: 1;
  flex-basis: auto;
`

const Projects = () => (
  <Container>
    <Header />
    <HeadContainer>
      <SEO title="Projects" />
      <Title>Projects.</Title>
      <HeadContainer>
        <Subtitle>
          "Do the things that incline you toward the big questions, and avoid
          the things that would reduce you and make you trivial."
          -&nbsp;George&nbsp;Saunders
        </Subtitle>
      </HeadContainer>
    </HeadContainer>
    <ProjectListContainer>
      <ProjectContainer>
        <ImageContainer>
          <h2>Wrapped</h2>
          <p>
            Wrapped is a service that allows you to track gift ideas and
            schedule email reminders at a chosen time before the event. Wrapped
            was created as my Networks senior design project.
          </p>
        </ImageContainer>
        {/* <Image src={wrappedSignin} alt="Wrapped" />
          <Image src={wrappedSignup} alt="Wrapped" /> */}
        <Carousel showArrows={true} showThumbs={false}>
          <div>
            <img src={wrappedSignin} />
          </div>
          <div>
            <img src={wrappedSignup} />
          </div>
          <div>
            <img src={wrappedDash} />
          </div>
          <div>
            <img src={wrappedEvent} />
          </div>
        </Carousel>
      </ProjectContainer>
      <ProjectContainer>
        <ImageContainer>
          <h2>Shoom</h2>
          <p>Coming soon!</p>
        </ImageContainer>
        <Carousel showArrows={true} showThumbs={false}>
          <div>
            <img src={shoomHome} />
          </div>
          <div>
            <img src={shoomResults} />
          </div>
        </Carousel>
      </ProjectContainer>
      <ProjectContainer>
        <ImageContainer>
          <h2>Micromouse</h2>
          <p>
            Our micromouse has gone through many iterations- MicroMoose,
            MangoMouse, and now this year he's named MoodyMouse.
          </p>
        </ImageContainer>
        <Carousel showArrows={true} showThumbs={false} dynamicHeight={true}>
          <div>
            <img src={mouse2} alt="mouse" />
          </div>
          <div>
            <img src={mouse1} alt="mouse" />
          </div>
          {/* <div>
            <video controls src={mouse} type="video/mp4" />
          </div> */}
        </Carousel>
      </ProjectContainer>
    </ProjectListContainer>
  </Container>
)

export default Projects
