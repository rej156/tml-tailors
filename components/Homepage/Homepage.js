import React from 'react'
import { HomepageBanner, Copy, HomepageImage, Content } from './Homepage.css'
import Carousel from 'react-slick'

export default function Homepage() {
  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    touchMove: false,
    swipe: false,
    fade: true,
    useCSS: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div>
      <br />
      <h1>Welcome to TML Tailors</h1>
      <Content>
      <br />
        <Carousel {...settings}>
          <div>
            <HomepageImage src={require('../../assets/homepagebanner1.jpg')} />
          </div>
          <div>
            <HomepageImage src={require('../../assets/homepagebanner2.jpg')} />
          </div>
        </Carousel>
      <Copy>
      <div className="homeDetails">
        <div className="aboutUs">
          <h3>Information</h3>
          <p>
      Established in 2009 by three friends with decades of experience within the manufacturing and alterations industries.
      <br/>
      <br/>
      TML Tailors offer a refreshing approach to manufacturing through their friendly yet professional approach.
          </p>
        </div>
        <div className="address">
          <h3>Our Address</h3>
          <p>
            <img className="contactLogo" src="http://www.tonystailor.com/images/facebook_places-u400.png" />
            152 Grays Inn Road, WC1X 8AX
            <br/>
            <img className="contactLogo" src="http://www.tonystailor.com/images/f_b1d8d28be724b3079256f21a6826db7455b0f9fe59152-u1486.png" />
            0207 278 8995
            <br/>
            <img className="contactLogo" src="http://www.tonystailor.com/images/envelope_email-u1519.png" />
            info@tmltailors.co.uk
            <br/>
            <br/>
            <img className="contactLogo" src="http://www.tonystailor.com/images/clock-4-00-transparent-md-u1529.png" />
            Monday to Friday 08:00 - 18:30
            <br/>
            Saturday 08:00 - 15:30
            <br/>
            Sunday - Closed
          </p>
        </div>
      </div>
      <br />
      {/*
         <hr />
         <h2> Instagram shizzle </h2>
         <hr />

        */}
      </Copy>
      </ Content>
    </div>
  )
}
