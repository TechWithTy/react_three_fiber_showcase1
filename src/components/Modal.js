import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '99999999999999999999999999',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ContactModal({modalOpen,setModalState}) {




  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  
  }

 
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={setModalState}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 id="contact-us-title" className="contact-us-title">
          Contact Us
        </h1>
        <button
          id="close-button"
          className="close-button"
          onClick={() => setModalState()}
        >
          X
        </button>

        <form>
          <div className="ContactForm">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="contactForm">
                    <form id="contact-form" noValidate>
                      {/* Row 1 of form */}
                      <div className="row formRow">
                        <div className="col-6">
                          <input
                            type="text"
                            name="name"
                            className="form-control formInput"
                            placeholder="Name"
                          ></input>
                        </div>
                        <div className="col-6">
                          <input
                            type="email"
                            name="email"
                            className="form-control formInput"
                            placeholder="Email address"
                          ></input>
                        </div>
                      </div>
                      {/* Row 2 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <input
                            type="text"
                            name="subject"
                            className="form-control formInput"
                            placeholder="Subject"
                          ></input>
                        </div>
                      </div>
                      {/* Row 3 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="message"
                            className="form-control formInput"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <button className="submit-btn" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}


export default ContactModal;

