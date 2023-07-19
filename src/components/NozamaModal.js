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

export default function NozamaModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    window.location.href = 'http://nozama.com/'; 
  };

  const [height, setHeight] = React.useState('67%');

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setHeight('33%');
      } else {
        setHeight('67%');
      }
    };

    handleResize(); // Set initial height

    window.addEventListener('resize', handleResize); // Update height on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);


  return (
    <div>
        <CardActionArea onClick={handleOpen}>
            <div className="con">
                <h3><a>Nozama: Virtual Bookstore</a></h3>
                <span>Developed a bookstore-themed mock e-commerce web application designed to utilize the NY Times public API to display book catalogs, which a user may add to a shopping cart to "purchase".
						<br></br>				
                        Built using React and Express, and hosted using Heroku.</span>
                <p className="icon">
                    <span><a  ><i className="icon" />React.js</a></span>
                    <span><a  ><i className="icon" />Express.js</a></span>
                    <span><a  ><i className="icon" />CSS</a></span>
                    <span><a  ><i className="icon" />Firestore</a></span>
                    <span><a  ><i className="icon" />Heroku</a></span>
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
          {/*}
            <Carousel>
              <Card>
              <CardMedia
                image={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                }
              />
              <h2 id="spring-modal-title">Text in a modal1</h2>
              </Card>
              <Card>
              <CardMedia
                image={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                }
              />
              <h2 id="spring-modal-title">Text in a modal2</h2>
              </Card>
              <Card>
              <CardMedia
                image={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                }
              />
              <h2 id="spring-modal-title">Text in a modal3</h2>
              </Card>
              <Card >
                <CardMedia
                  component="img"
                  height="140"
                  image="public\images\about.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Carousel>
            */}
            
		    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTlHtxCGEuvan_SPRCNeG3Prkd0jauoBytR_2gnUceHuqVrqxtMunXbQq6JUwFIV0gydV2H4m3XfISA/embed?start=true&loop=true&delayms=6000" 
                frameborder="0" 
                width='100%' 
                height={height} 
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true">
            </iframe>
            
            <br></br>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <h1 id="spring-modal-title" style={{ marginBottom: 3 }}>Nozama: Virtual Bookstore</h1>
                <p style={{ marginBottom: 0 }}>Jul 2022 - Aug 2022</p>
              </Grid>
              <Grid item xs={12} md={4}>
                <button class="btn-hover color-2" onClick={handleClick}>VISIT <i className="icon-arrow-right-thick" /></button>
              </Grid>
            </Grid>
            <span id="spring-modal-description" >Developed a bookstore-themed mock e-commerce web application designed to utilize the NY Times public API to display book catalogs, which a user may add to a shopping cart to "purchase".
						<br></br>				
            Built using React and Express, and hosted using Heroku.</span>
            <br></br>
            <br></br>
			<h5 style={{marginBottom:-1}}>React.js · Express.js · Heroku · Cloud Firestore · Material-UI · User Experience (UX)</h5>							
            
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
  '@media (max-width: 768px)': {
    width: '85%',
  },
});

