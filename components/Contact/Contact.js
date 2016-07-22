import React, { Component } from 'react'
import { Content } from '../Homepage/Homepage.css'

export default class Contact extends React.Component {
    render() {
      return (
        <div>
          <br />
          <h1> Contact Us </h1>
          <Content>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5192805924084!2d-0.11569918454847296!3d51.5220348174545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b48104f4889%3A0x7e51fddc1fba680!2sTML+Tailors!5e0!3m2!1sen!2suk!4v1467668690380" width="90%" height="450" style={{ border:0 }} allowFullScreen></iframe>
            <h2> Tailoring & Alterations </h2>
            <p>TML Tailors Limited</p>
            <p>152 Grays Inn Road</p>
            <p>WC1X 8AX</p>
            <p>0207 278 8995</p>
            <p>info@tmltailors.co.uk</p>
            <br/>
            <p>Monday to Friday 08:00 - 18:30</p>
            <p>Saturday 08:00 - 15:30</p>
            <p>Sunday - Closed</p>
          </Content>
        </div>
      )
    }
}
