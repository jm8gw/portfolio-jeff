import React, { Component } from 'react'
import ModalDemo from './ModalDemo';
import { Button, CardActionArea } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import BlogCardDemo from './BlogCardDemo';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
  } from "@mui/material";
import FoothModal from './FoothModal';
import NozamaModal from './NozamaModal';
import SongbirdModal from './SongbirdModal';
import GreystonesModal from './GreystonesModal';
import LogicalModal from './LogicalModal';
import LumasticModal from './LumasticModal';


export default class Projects extends Component {

	render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/greystoneslogoblue.png)', scale: 0.5}}>
									<div className="desc" style={{background: '#2c98f0'}}>
									<GreystonesModal></GreystonesModal>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/logicalbuildingslogo7.png)', scale: 0.5}}>
									<div className="desc" style={{background: '#1cc5aa'}}>
									<LogicalModal></LogicalModal>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/lumasticlogo4.png)'}}>
									<div className="desc" style={{background: '#6e7d95'}}>
									<LumasticModal></LumasticModal>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/nozamalogo2.png)'}}>
									<div className="desc" style={{background: '#f47444'}}>
									<NozamaModal></NozamaModal>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/songbirdlogo1.png)'}}>
									<div className="desc" style={{background: '#f4c831'}}>
									<SongbirdModal></SongbirdModal>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/footherlogo.png)'}}>
									<div className="desc" style={{background: '#72ac59'}}>
									<FoothModal></FoothModal>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://www.linkedin.com/in/jeffrey-mouritzen/details/projects/" className="btn btn-primary btn-lg btn-load-more">See More <i className="icon-arrow-right" /></a></p>
							</div>
						</div>
					</div>
				</section>

      </div>
    )
  }
}
