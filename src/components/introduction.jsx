import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/beach6.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{marginBottom: '0px'}}>Jeffrey <br /> Mouritzen</h1>
                          <h1 style={{fontSize: '27px', fontWeight: '400'}}>Software Developer</h1>
                          <h2>Empowering Users with Intuitive Frontend Experiences and Innovative Software Solutions. Let's Build Something Together!</h2>
                          <p><a className="btn btn-primary btn-learn" href="#" id="showmetheprofile">More about me <i className="icon-download4" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="#" id="showmetheprojects">My projects <i className="icon-download4" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="#" id="showmetheexperience">My experience <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*
              <li style={{backgroundImage: 'url(images/graduation23.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I hold a passion<br /> for creating!</h1>
                          <p><a className="btn btn-primary btn-learn" href="#">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/medellin.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Let's <br/>Chat! </h1>
                          <p><a className="btn btn-primary btn-learn" href="#">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
