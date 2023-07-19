import React, { Component } from 'react'
import { Button } from '@mui/material';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Me</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p>Recent college graduate with exceptional communication, writing, and collaborative skills seeking to apply himself in front-end software and product development to enhance the user experience.</p>
                                    <p>I built this site to showcase my work and experience. Take a look!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                <div className="services color-1">
                                <span className="icon2"><i className="icon-bulb" /></span>
                                <h3>Graphic Design</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                <div className="services color-2">
                                <span className="icon2"><i className="icon-globe-outline" /></span>
                                <h3>Web Design</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                <div className="services color-3">
                                <span className="icon2"><i className="icon-data" /></span>
                                <h3>Database Management</h3>
                                </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                <div className="services color-4">
                                <span className="icon2"><i className="icon-phone3" /></span>
                                <h3>Mobile Application</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="hire">
                                <h2>Here to Take Your Project to the Next Level!</h2>
                                <div className="btn-fuckyou">
                                    <Button className="btn-hire" id="contactmerightthefucknow">Let's Chat</Button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
