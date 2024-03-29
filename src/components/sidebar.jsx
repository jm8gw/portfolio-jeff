import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/JeffCompositeLeftSqr.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jeffrey Mouritzen</a></h1>
              <span className="email"><i className="icon-mail"></i> jeffreymouritzen@gmail.com</span>
              <span className="number"><i className="icon-phone"></i> (703) 624-3320</span>
              <a className="btn btn-sm btn-resume" href="https://drive.google.com/file/d/11Qv4Xm4uLy9l5mK7M48VJcsEPAPnb52e/view?usp=sharing">See Resumé <i className="icon-arrow-right3" style={{ fontSize: '10px' }}/></a>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li class="active"><a href="#" data-nav-section="home">Home</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">Work</a></li>
                  <li><a href="#" data-nav-section="timeline">Experience</a></li>
                  <li><a href="#" data-nav-section="education">Education</a></li>
                  <li><a href="#" data-nav-section="proficiency">Proficiency</a></li>
                  {/*<li><a href="#" data-nav-section="services">Services</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jeffrey-mouritzen/" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/jm8gw" target="_blank"><i className="icon-github"></i></a></li>
                <li><a href="https://www.instagram.com/jeffrey_mouritzen/" target="_blank"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.facebook.com/jeffrey.mouritzen/" target="_blank"><i className="icon-facebook2" /></a></li>
              </ul>
            </nav>
            
            <div className="colorlib-footer">
              <p><small>
              © 2023 Jeffrey Mouritzen. All rights reserved. Inspired by Colorlib.
              </small></p>
            </div>
            
          </aside>
        </div>
      </div>
    )
  }
}
