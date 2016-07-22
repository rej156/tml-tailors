import React from 'react'
import {Meta, Link} from 'sitegen'
import { Root, Navbar, Logo, Links, PageContent } from './Site.css'

export default class Site extends React.Component {

  render() {
    const {children} = this.props
    return (
      <Root>
        <Meta title="TML Tailors" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
        <style>{".slick-slide { height: auto; }"}</style>
        <nav>
        <Logo href="/"><img src={require('../../assets/tmllogo.png')} /></Logo>
          <Links >
            <Link href="/about">About Us</Link>
            <Link href="/alterations">Alterations</Link>
            <Link href="/contact">Contact Us</Link>
          </Links>
        </nav>
        <PageContent style={{ textAlign: 'center' }}>
          {children}
        </PageContent>
      </Root>
    )
  }
}
