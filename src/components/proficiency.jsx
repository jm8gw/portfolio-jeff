import React, { Component } from 'react'

export default class Proficiency extends Component {
  render() {
    return (
      <div>
        <section data-section="proficiency">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some areas of expertise I can offer:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Languages</h3>
                    <p>CSS/SASS, C#, HTML, JavaScript, TypeScript, Python, C++/C, Java, R, PHP, Shell Scripting, Assembly/Machine Language</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-git" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Heroku, Docker, VirtualBox, Ubuntu, GitHub, VS Code, Visual Studio, Eclipse IDE, pyCharm</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-search4" />
                </span>
                <div className="desc">
                    <h3>Front-end Development</h3>
                    <p>React, jQuery, Django, AngularJS, HighCharts, Ruby</p>
                </div>
                </div>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back-end and Database</h3>
                    <p>Node.js, Express.js, Django, Hadoop, AWS, Firestore, MySQL, PostgreSQL, SQLite</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Testing</h3>
                    <p>Selenium, Cypress.js</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-speech-bubble" />
                </span>
                <div className="desc">
                    <h3>Methods</h3>
                    <p>Test-driven Development, Object-Oriented Programming, Team Building, Committee Management, and Customer Service</p>
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