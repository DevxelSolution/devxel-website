import React, { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const ContactRobo = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ContactUsModal open={openModal} handleClose={() => setOpenModal(false)} />
      <div
        id="newCursor"
        className="fixed right-10 bottom-5 animate-bounce z-50 cursor-pointer border-2 border-white rounded-full"
        onClick={() => setOpenModal(true)}
      >
        <img src="/robo.jpg" alt="DevXel Contact" className="h-14 w-14 rounded-full" />
      </div>
    </div>
  );
};

export default ContactRobo;
