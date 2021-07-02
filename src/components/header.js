import React, { useState } from 'react';
import ContactModal from './Modal';

export default function Header({ toast, ToastContainer }) {
  const [modalOpen, setModalOpen] = useState(false);

  const setModalState = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <header>
      <div className="header-inner">
        <img
          src={require('../transparentLogo.png')}
          className="logo"
          alt="cyber oni logo"
        />
        <nav>
          <ul>
            <ContactModal
              ToastContainer={ToastContainer}
              toast={toast}
              modalOpen={modalOpen}
              setModalState={setModalState}
            />
            <li className="btn">
              <button
                id="contact-us"
                onClick={() => {
                  setModalState();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
