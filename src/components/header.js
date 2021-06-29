import React,{useState} from "react";
import ContactModal from "./Modal";

 
export default function Header() {
   const [modalOpen, setModalOpen] = useState(false);

   const setModalState = () => {
     setModalOpen(!modalOpen);
   };
  return (
    <header>
      <div className="header-inner">
        <div className="logo">CHAIR.</div>
        <nav>
          <ul>
            <ContactModal modalOpen={modalOpen} setModalState={setModalState} />
            <li className="btn">
              <button
                id="contact-us"
                onClick={() => {
                  setModalState();
                }}
              >
                order
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
