import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';

const ContactUsModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send the data to your backend
    console.log('Form data:', form);
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
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
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
