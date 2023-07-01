import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import Modal from '@mui/base/Modal';
import Button from '@mui/base/Button';
import { Grid, CardActionArea, CardMedia, Card, CardContent, CardActions } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import Carousel from 'react-material-ui-carousel';
import { Typography } from '@mui/material';
import Paper from '@mui/material';
import BlogCardDemo from './BlogCardDemo';

export default function FoothModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=etjvdmZ6wUg&ab_channel=PalashShah'; 
  };

  return (
    <div>
        <CardActionArea onClick={handleOpen}>
            <div className="con">
                <h3><a href="work.html">Footh: The Ultimate Mobile Recipe App</a></h3>
                <span>Developed a mobile app designed to allow users to upload and search for unique food inspirations and recipes. 
                    <br></br>Built using React Native, with a Firestore database. Deployed using Expo.</span>
                <p className="icon">
                    <span><a href="#"><i className="icon" />React Native</a></span>
                    <span><a href="#"><i className="icon" />Expo</a></span>
                    <span><a href="#"><i className="icon" />Firestore</a></span>
                    <span><a href="#"><i className="icon" />Mobile App</a></span>
                </p>
            </div>
        </CardActionArea>
        <StyledModal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <Box sx={style}>

            
		    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ_wNNZLZiDRZP18PagLmuldl3Yj81HMojFIi2kVd-1MMH1ADBZ44EEr_UoSsdo3gicgWmDfBX5u9T7/embed?start=true&loop=true&delayms=6000" 
                frameborder="0" 
                width='100%' 
                height='67%' 
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true">
            </iframe>
            
            <br></br>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={8}>
                <h1 id="spring-modal-title" style={{ marginBottom: 3 }}>Footh: The Ultimate Mobile Recipe App</h1>
                <p style={{ fontSize: 11 }}>Aug 2021 - Dec 2021</p>
              </Grid>
              <Grid item xs={4}>
                <button class="btn-hover color-4" onClick={handleClick}>DEMO<i className="icon-arrow-right-thick" /></button>
              </Grid>
            </Grid>
            <span id="spring-modal-description" >Developed a mobile app designed to allow users to upload and search for unique food inspirations and recipes. 
                    Built using React Native, with a Firestore database. Deployed using Expo.</span>
            <br></br>
            <br></br>
			<h5 style={{marginBottom:-1}}>JavaScript · Expo ·Cloud Firestore · Mobile Applications · React.js · User Experience (UX)</h5>							
            
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}

const headingStyle = {
    fontSize: '2rem',
    lineHeight: 1.2,
    margin: 0,
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: 1.4,
  };

const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
  };
//width 736
//height 450
const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const style = (theme) => ({
  position: 'absolute',
  height: '100%',
  maxHeight:715,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //width: 800,
  width: '60%',
  maxWidth: 804,
  //max-width: 100%,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: 16,
  overflow: 'auto',
});

