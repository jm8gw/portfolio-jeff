import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'
import Particle from './components/Particles';
import Proficiency from './components/proficiency';
import Contact from './components/contact';
import Education from './components/education';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Particle/>
					<Introduction></Introduction>
					<About></About>
					<Projects></Projects>
					<Timeline></Timeline>
					<Education></Education>
					<Proficiency></Proficiency>
					<Contact></Contact>
					{/*<Blog></Blog>*/}
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
