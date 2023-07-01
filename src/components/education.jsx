import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">


                <div className="panel-group" id="accordion" role="tablist" defaultExpanded="false" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelors of Science in Computer Science at University of Virginia
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-12">
                            <p>Charlottesville, VA | August 2019 to May 2023</p>
                            
                            <h4>BS in Computer Science, Minor in Drama, 3.7 GPA, graduated with High Distinction</h4>
                          </div>
                        </div>
        <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="panel-collapse collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Coursework
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <div className="row">
                    <div className="col-md-4">
                    <ul>
                      <li>Algorithms</li>  
                      <li>Mobile App Development</li>
                      <li>Computer Game Design</li>
                      <li>Computer Architecture</li>
                    </ul>
                    </div>
                    <div className="col-md-4">
                    <ul>
                      <li>Advanced Software Development</li>  
                      <li>Cloud Computing</li>
                      <li>Program and Data Representation</li>
                      <li>Operating Systems</li> 
                    </ul>
                    </div>
                    <div className="col-md-4">
                    <ul>
                      <li>Software Testing</li>  
                      <li>Cybersecurity</li>
                      <li>Databases</li>
                      <li>Video and Projection Design</li>  
                    </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="panel-collapse collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree" defaultExpanded="false" aria-expanded="false" aria-controls="collapseThree">Activities and Leadership
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <div className="row">
                  
                    <div className="col-md-12">
                      
                      
                      <h4><strong>Vice President of Programming, Risk Management & Housing</strong> | Pi Lambda Phi Fraternity | Jan 2022 - Jan 2023 </h4>
                        <li>Organized 5+ major fraternity social and professional development events per month, some with 150+ guests, with an emphasis on risk management and enforcement of fraternity-wide safety practices</li>
                        <li>Delegated event preparation tasks to a 12 person committee</li>
                        <li>Maintained exemplary condition of the primary fraternity residence housing 15 fraternity members</li>
                        <li>Worked with the local fire marshal and fraternity housing cooperation to ensure adherence to local laws</li>
                      
                      <br></br>
                      
                      <h4><strong>Assistant Director </strong> | Spectrum Theatre | Aug - Nov 2021 </h4>
                        <li>Casted and directed 18 cast members for the Believer: A Cult Musical show</li>
                        <li>Led acting exercises and rehearsals, blocked and choreographed scenes, and gave note</li>
                      
                      <br></br>
                      <h4><strong>Theatre Actor/Singer </strong>| UVA Drama, Spectrum, First Year Players, Shakespeare on the Lawn, HOOSITS A Cappella </h4>        
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">International Baccalaureate Diploma at South Lakes High School
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
									        <div className="panel-body">
                          <p>Reston, VA | September 2015 to May 2019</p>
                          </div>
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