import React from 'react'
import "./Blog.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { maxHeight } from '@mui/system';

const BlogCard = ({ title, description, blogdate, avatimage, fullheader, para1, para2, para3, para4, para5, para6, blogclosing}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        height:'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxHeight:'100vh',
        overflowY: 'auto',
    
        '@media (max-width: 600px)': {
            width: '95%', 
          },
      };

  return (
    <>
         <div className='Blog-Card'>
         {avatimage && <img className='Blog-Photo' src={avatimage}  alt='BlogPhoto'/>}
                <h5 className='Blog-Text2'>{title}</h5>
                <p className='Blog-Text'>{description}</p>
                <div className='Blog-Down-Hold'>
                    <Button onClick={handleOpen} >Read More</Button>
                    <span style={{opacity:'0.6'}}>{blogdate}</span>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {fullheader}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p>{para1}</p>

                        <p>{para2}</p>

                        <p>{para3}</p>

                        <p>{para4}</p>

                        <p>{para5}</p>

                        <p>{para6}</p>

                        <h5>{blogclosing}</h5>
                        <Button onClick={handleClose} sx={{ mt: 3 }}>Back</Button>
                    </Typography>
                    </Box>
                </Modal>

            </div>
    </>
  )
}

export default BlogCard