import React from "react"
import { render } from "react-dom"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Gallery from "react-photo-gallery"
import Lightbox from "react-images"
import Navigation from "../components/navigation"
import Header from "../components/header"
import styled from "styled-components"
import Footer from "../components/footer"
import pricing from "../documents/pricing-guidelines.pdf"

import framer from "../images/framerGraphic.png"
import mongoDB from "../images/mongoDB.png"
import medic from "../images/citrusHack_medic.png"
import citrusHero from "../images/citrusHack_hero.png"
import stickerGiant from "../images/stickerGiant.png"
import snapchat from "../images/snapchat.png"
import pixelSticker from "../images/pixelSticker.png"

import oilSelf from "../images/self-oil.jpg"
import skyline from "../images/skyline-oil.jpg"
import landscape from "../images/landscape-magical.jpg"
import windCity from "../images/windy-city.jpg"
import cave from "../images/magic-cave.jpg"
import tarotCards from "../images/tarotCards.jpg"
import seaty from "../images/seaty.jpg"
import ballet from "../images/ballet.jpg"
import nox from "../images/nox.jpg"
import seaweed from "../images/seaweed.jpg"
import dreams from "../images/dreams.jpg"
import glassCity from "../images/glassCity.jpg"
import squids from "../images/squids.jpg"
import brave from "../images/brave.jpg"
import she from "../images/she.jpg"
import lightSketch from "../images/light-sketch.jpg"
import shoom from "../images/shoom_figma.png"
import wrapped from "../images/wrapped_figma.png"
import self from "../images/self.png"
import ephemeral from "../images/ephemeral.jpg"
import wrappedLogo from "../images/wrapped_logo.png"
import lanterns from "../images/lantern-sticker.png"
import robot from "../images/robot-sticker.png"
import wendyMarvel from "../images/w_marvel.png"

const Container = styled.div`
  width: 100vw;
  height: auto;
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
  }
`
const HeadContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 100px; */
  /* text-align: justify; */
`
const Title = styled.h1`
  font-size: 64px;
  color: #333234;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: justify;
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  line-height: 1.5;
  /* text-align: justify; */
  color: #666368;
  margin-bottom: 60px;
`
const Section = styled.p`
  font-size: 18px;
  text-align: justify;
  width: 100%;
  /* margin-bottom: 100px; */
`
const GalleryContainer = styled.div`
  width: 90%;
  min-height: 100%;
  display: flex;
  /* overflow: visible; */
`

const photos = [
  {
    src: wendyMarvel,
    width: 2100,
    height: 1500,
    caption:
      "My friend Wendy as Captain Marvel (Photoshop, 2019). Background taken from WallpaperUP.",
  },
  {
    src: lanterns,
    width: 12500,
    height: 8334,
    caption: "Sticker for Citrus Hack 2019 patricipants.",
  },
  {
    src: robot,
    width: 2500,
    height: 2500,
    caption: "Sticker for Citrus Hack 2019 patricipants.",
  },
  {
    src: self,
    width: 2100,
    height: 1500,
    caption: "Self portrait (Photoshop, 2019).",
  },
  {
    src: medic,
    width: 1000,
    height: 1000,
    caption: "Promotional graphic for Citrus Hack 2019.",
  },
  {
    src: citrusHero,
    width: 3784,
    height: 2256,
    caption: "Hero graphic for Citrus Hack 2019 website.",
  },
  {
    src: wrappedLogo,
    width: 2834,
    height: 2786,
    caption: "Wrapped logo (Adobe Illustrator, 2019).",
  },
  {
    src: wrapped,
    width: 5451,
    height: 4418,
    caption:
      "Figma for Wrapped, a gifting service to help people find and send the perfect gift (2019).",
  },
  {
    src: shoom,
    width: 3676,
    height: 2322,
    caption:
      "Figma for Shoom, a search engine designed to streamline results for students (Hack UCI 2019 project).",
  },
  {
    src: pixelSticker,
    width: 801,
    height: 801,
    caption: "Transparent sticker for Rosehack 2019 participants.",
  },

  {
    src: mongoDB,
    width: 3334,
    height: 3334,
    caption: "Thank you graphic for Rosehack 2019 sponsor.",
  },
  {
    src: framer,
    width: 3334,
    height: 3334,
    caption: "Thank you graphic for Rosehack 2019 sponsor.",
    alt: "Framer Graphic",
  },
  {
    src: stickerGiant,
    width: 3334,
    height: 3334,
    caption: "Thank you graphic for Rosehack 2019 sponsor.",
  },
  {
    src: snapchat,
    width: 3334,
    height: 3334,
    caption: "Thank you graphic for Rosehack 2019 sponsor.",
  },
  {
    src: nox,
    width: 1920,
    height: 1490,
    caption: "Nox (acrylic, 2015).",
  },
  {
    src: ballet,
    width: 2192,
    height: 2843,
    caption: "Window (acrylic, 2015).",
  },
  {
    src: dreams,
    width: 2448,
    height: 3264,
    caption: "Dreams (chalk pastel on concrete, 2015).",
  },
  {
    src: oilSelf,
    width: 2031,
    height: 2462,
    caption: "Self portrait (oil pastel, 2015).",
  },
  {
    src: landscape,
    width: 2684,
    height: 1863,
    caption: "Magical landscape (marker, 2015).",
  },
  {
    src: ephemeral,
    width: 1774,
    height: 1774,
    caption: "Ephemeral (watercolor, 2015).",
  },
  {
    src: skyline,
    width: 760,
    height: 610,
    caption: "San Diego skyline (oil, 2015).",
  },
  {
    src: tarotCards,
    width: 1929,
    height: 2592,
    caption: "Tarot (ink and watercolor, 2015).",
  },

  {
    src: seaty,
    width: 2024,
    height: 1579,
    caption: "Underwater city (watercolor, 2015).",
  },
  {
    src: lightSketch,
    width: 1936,
    height: 1936,
    caption:
      'Underwater light studies for "Underwater city" (watercolor, 2015).',
  },
  {
    src: windCity,
    width: 2791,
    height: 1791,
    caption: "Windy city (ink and watercolor, 2015).",
  },
  {
    src: cave,
    width: 2684,
    height: 1863,
    caption: "Droplets (ink and watercolor, 2015).",
  },
  {
    src: seaweed,
    width: 2585,
    height: 1515,
    caption: "Kelp forest (chalk pastel on concrete, 2014).",
  },
  {
    src: glassCity,
    width: 1920,
    height: 1467,
    caption: "Glass city (colored pencil, 2014).",
  },
  {
    src: brave,
    width: 2520,
    height: 1412,
    caption: "Brave New World (colored pencil, 2013).",
  },
  {
    src: squids,
    width: 1814,
    height: 1513,
    caption: "Squids & eggs (oil pastel, 2013).",
  },
]

class Design extends React.Component {
  constructor() {
    super()
    this.state = { lightboxIsOpen: false, currentImage: 0 }
    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <Container>
          <Header />
          <HeadContainer>
            <Title>Art & Design.</Title>
            <HeadContainer>
              <Subtitle>
                "To sing you must first open your mouth. You must have a pair of
                lungs, and a little knowledge of music. It is not necessary to
                have an accordion, or a guitar. The essential thing is to want
                to sing. This then is a song. I am singing."
                -&nbsp;Henry&nbsp;Miller
              </Subtitle>
            </HeadContainer>
            <Section>
              I am OPEN for comission! Please checkout my pricing guidelines{" "}
              <a href={pricing} target="_blank">
                here
              </a>{" "}
              and shoot me an{" "}
              <a href="mailto:nxorie@gmail.com" target="_blank">
                email
              </a>{" "}
              if you're interested.
            </Section>
            <Section>
              I like to think that my work reflects myself. At least thats what
              I try to acheive. I am inspired mostly by color. The things that I
              make like to paint themselves in broad strokes in my head before I
              bring them to life.
            </Section>
          </HeadContainer>
          <GalleryContainer>
            <Gallery photos={photos} onClick={this.openLightbox} margin={5} />
            <Lightbox
              backdropClosesModal="true"
              enableKeyboardInput="true"
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              theme="footer"
            />
          </GalleryContainer>
          {/* <Footer /> */}
        </Container>
      </div>
    )
  }
}

export default Design
