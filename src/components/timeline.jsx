import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.ballastlane.com/" data-nav-section="projects">Software Engineer at Ballast Lane Applications, LLC · Internship</a> <span>Medellín, Antioquia, Colombia, Jun 2022 - Aug 2022</span></h2>
                        <li>Worked with a cohort of 6 full-stack developers and QA testers on a React web application that can monitor and control technical elements of offices, such as energy consumption/waste and temperature control </li>
                        <li>Redesigned data representation models for comparison of buildings and debugged front end problems with office thermostat adjustment through the app</li>
                        <li>Traveled to Medellín, Columbia for 2 weeks to work in-person at the BLA headquarters with the Columbian development team (and practice my Spanish)</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.greystonesinc.com" data-nav-section="projects">Web Developer at Greystones Maritime International, Inc. · Freelance</a> <span>Dulles, Virginia, United States, Aug 2021 - Sep 2021</span></h2>
                        <li>Built the official Greystones Maritime International website based on design specifications and content provided by Greystones </li>
                        <li>Launched the website via GitHub: https://greystonesinc.com</li>
                        
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        
                      </div>
                      <div className="timeline-label">
                        <h2><a href="https://www.lumastic.com" data-nav-section="projects">Software Development Intern at Lumastic · Internship</a> <span>Charlottesville, Virginia, United States, Jun 2021 - Aug 2021</span></h2>
                        <li>Supported a small startup company virtually over the summer on their platform, Lumastic.com, built to provide a collaboration space for those within the content creation community </li>
                        <li>Created and implemented an updated notification page with read/unread markers</li>
                        <li>Built tests for existing features to make sure everything worked as intended in regard to the design specifications and user feedback from 40 beta testers</li>
                        
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      

      <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/graduation23.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="colorlib-narrow-content">
          <div className="row">
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter-labelinvis">Wahoowa</span>
              <span className="colorlib-counter-labelinvis">Wahoowa</span>
              <span className="colorlib-counter-labelinvis">Wahoowa</span>

              </div>
          {/*
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={309} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Cups of coffee</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={356} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={30} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Clients</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
              <span className="colorlib-counter-label">Partners</span>
            </div>
            */}
          </div>
        </div>
      </div>

      </div>

    )
  }
}
