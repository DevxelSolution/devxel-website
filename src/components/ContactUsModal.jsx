import React, { useRef, useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const ContactUsModal = ({open, handleClose}) => {
  const formRef = useRef(null);

  const scriptUrl =
  "https://script.google.com/macros/s/AKfycbzqUf-lDvHJWlx9mO9gh4-aYl8umjiGZPCC88EB8W4p5ztccPMKmmCEHc7vXtOYENLqCA/exec";

const handleSubmitModal = (e) => {
  console.log(formRef.current)
  fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current), mode: 'no-cors' })
    .then((res) => {
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "We have registered your query and will get back to you soon!",
      });
    })
    .catch((err) => console.log(err));
  formRef.current.reset();
  handleClose();
};


  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitModal();
    // Here you can handle form submission, e.g., send the data to your backend
    // console.log('Form data:', form);
    handleClose();
  };

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Contact Us
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-us-modal-title"
        aria-describedby="contact-us-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="contact-us-modal-title" variant="h6" component="h2">
            Contact Us
          </Typography>
          <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              // value={form.name}
              // onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              type="email"
              // value={form.email}
              // onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              // value={form.message}
              // onChange={handleChange}
              required
            />
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" color="primary" sx={{ mr: 1 }}>
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactUsModal;
