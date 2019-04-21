import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

// import ImageGallery from "react-image-video-gallery"
import wrappedSignin from "../images/wrapped-signin.png"
import wrappedSignup from "../images/wrapped-signup.png"
import mouse2 from "../images/mouse2.jpg"
import mouse1 from "../images/mouse1.jpg"
import mouse from "../images/mouse.mp4"

const Container = styled.div`
  width: 100vw;
  // height: 100vh;
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
`
const Title = styled.h1`
  font-size: 64px;
  color: #333234;
  margin-top: 100px;
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: light;
  color: #666368;
`
const ProjectListContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
`
const ImageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`
const ProjectContainer = styled.div`
  width: 100%;
  // background-color: #fffffb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
`
const Image = styled.img`
  height: 300px;
`
// const images = [
//   { original: mouse2, sizes: 100 },
//   { original: mouse1 },
//   { original: mouse },
// ]

const Projects = () => (
  <Container>
    <Header />
    <SEO title="Projects" />
    <Title>Projects.</Title>
    {/* <h1>Hi from the projects page</h1> */}
    {/* <p>Welcome to projects</p> */}
    <Subtitle>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    </Subtitle>
    <ProjectListContainer>
      <ProjectContainer>
        <h2>Wrapped</h2>
        <p>
          Wrapped is a service that allows you to track gift ideas and schedule
          email reminders at a chosen time before the event. Wrapped was created
          as my Networks senior design project.
        </p>
        <ImageContainer>
          <Image src={wrappedSignin} alt="Wrapped" />
          <Image src={wrappedSignup} alt="Wrapped" />
        </ImageContainer>
      </ProjectContainer>
      <ProjectContainer>
        <h2>Shoom</h2>
        <p>Coming soon!</p>
      </ProjectContainer>
      <ProjectContainer>
        <h2>Micromouse</h2>
        <p>
          Our micromouse has gone through many iterations- MicroMoose,
          MangoMouse, and now this year he's named MoodyMouse.
        </p>
        <ImageContainer>
          <Image src={mouse2} alt="mouse" />
          <Image src={mouse1} alt="mouse" />
          <video width="200" controls>
            <source src={mouse} type="video/mp4" />
          </video>
        </ImageContainer>
        {/* <ImageGallery items={images} /> */}
      </ProjectContainer>
    </ProjectListContainer>
  </Container>
)

export default Projects
