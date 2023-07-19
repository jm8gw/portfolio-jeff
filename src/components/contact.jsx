import React, { Component } from 'react'


export default class Contact extends Component {

	render() {
    return (
      <div>
				      <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Like what you see? Let's get in touch!</span>
              <h2 className="colorlib-heading">Contact</h2>
            </div>
          </div>
          <div className="row">
		  	<div className="col-md-8">
              <div className="row">
                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                  <form action="https://formspree.io/f/moqoapro" method="POST">
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea id="message" cols={30} rows={7} className="form-control" name="body" placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-linkedin2" />
                </div>
                <div className="colorlib-text">
                  <p><a href="https://www.linkedin.com/in/jeffrey-mouritzen/">linkedin.com/in/jeffrey-mouritzen</a></p>
                </div>
              </div>
              <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-map" />
                </div>
                <div className="colorlib-text">
                  <p>Vienna, Virginia, United States</p>
                </div>
              </div>
              <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-phone" />
                </div>
                <div className="colorlib-text">
                  <p>(703) 624-3320</p>
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
