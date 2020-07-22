import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../images/fundaylogo.png';
import $ from 'jquery';
import './Homepage.css';

// COMPONENTS
import Hero from './Hero';
import Product from './Product';
import GetToWork from './GetToWork';
import Creators from './Creators';
import Footer from './Footer';

export default class Homepage extends Component {
  login() {
    const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  render() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $('.navbar').addClass('nav-scroll');
      }
    }); //missing );
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-sm transparent">
          <div className="container">
            <div className="navbar-brand">
              <a href="/">
                <img width="215" src={logo} alt="logo" />
              </a>
            </div>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <AnchorLink href="#product" className="nav-link product">
                  Product
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink href="#uses-page" className="nav-link use-cases">
                  Use Cases
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink href="#why" className="nav-link why">
                  Why funday.com
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink href="#creators" className="nav-link creators">
                  Creators
                </AnchorLink>
              </li>

              <li className="nav-item login-btn" onClick={this.login}>
                <a className="nav-link">Log in</a>
              </li>
            </ul>
          </div>
        </nav>

        <Hero />
        <Product />
        <GetToWork />
        <Creators />
        <Footer />
      </div>
    );
  }
}
