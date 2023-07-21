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
                                    {/*<p>Recent college graduate with exceptional communication, writing, and collaborative skills seeking to apply himself in front-end software and product development to enhance the user experience.</p>
                                    <p>I built this site to showcase my work and experience. Take a look!</p>
                                    */}
                                    <p>As a recent UVA college computer science graduate, I am deeply passionate about front-end software and product development. With a keen eye for user experience, I strive to create intuitive and visually appealing applications that leave a lasting impression on users.</p>
                                    <p>During my academic journey, I honed exceptional communication and writing skills through my rigorous undergraduate education experiences—skills that I believe are invaluable in translating complex technical concepts into clear and accessible language for both technical and non-technical stakeholders. Additionally, I have found myself to be a passionate advocate for merging the worlds of computer science and the performance arts. By fusing my technical studies with a drama minor and contributing my technical background to UVA's sensational performance arts space, I have found myself uniquely qualified as an effective communicator, collaborator, and designer. I have learned to craft captivating narratives and create immersive experiences that deeply resonate with audiences, all while sharing and molding my creative vision effectively with the artistic/technical teams around me.</p>
                                    <p>Bringing together creativity and technical expertise, I am committed to delivering software solutions that not only function flawlessly but also delight users with exceptional user experiences.
                                    My passion for storytelling, user-centric design, and cutting-edge technology drives me to bring something fresh and valuable to the software development scene. I am eager to channel my diverse background into front-end software and product development, enhancing the way users interact with technology. </p>
                                    <p>Let's collaborate and explore how I can contribute my multidisciplinary skills and unwavering enthusiasm to your projects, creating software that leaves a lasting impact on users and stakeholders alike.</p>
                                </div>
                            </div>
                        </div>
                        {/*
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
                        */}
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="hire">
                                <h2>Let's Take Your Project to the Next Level!</h2>
                                <div className="btn-fuckyou">
                                    <Button className="btn-hire" id="contactmerightthefucknow">Come Chat</Button>
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
