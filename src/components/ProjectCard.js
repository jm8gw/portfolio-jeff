import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BlogCardDemo from './BlogCardDemo';
import CardActionArea from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProjectCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <CardActionArea onClick={handleOpen}>
        <div className="con">
            <h3><a href="work.html">Greystones Inc.</a></h3>
            <span>Fully developed and easy-to-navigate official company website for Greystones Maritime International, complete with animated components and a functioning contact form. 
                <br></br> Built in JavaScript, CSS, and HTML.</span>
            <p className="icon">
                <span><a href="#"><i className="icon-share3" />JavaScipt</a></span>
                <span><a href="#"><i className="icon-eye" /> CSS</a></span>
                <span><a href="#"><i className="icon-heart" /> HTML</a></span>
            </p>
        </div>
    </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BlogCardDemo />
      </Modal>
    </div>
  );
}