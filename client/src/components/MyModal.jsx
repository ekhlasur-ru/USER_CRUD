import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // This is important for accessibility reasons

const MyModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="text-center">
      <button
        className="rounded-full bg-slate-200 px-4 py-2 text-4xl"
        onClick={openModal}>
        Open Modal Click
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="My Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "lightsteelblue",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}>
        <h2 className="w-[400px] text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          error qui illo porro et cumque rem minima pariatur, saepe fuga
          voluptatum, ut itaque, quo neque cum assumenda. At, distinctio odio
          temporibus, aspernatur hic aut reiciendis fugit qui, quisquam
          doloremque modi necessitatibus id dicta ipsam placeat numquam impedit?
          Facilis, eius a.
        </h2>
        <button className="pt-4 text-red-600" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default MyModal;
