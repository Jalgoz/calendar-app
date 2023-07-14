import Modal from 'react-modal';
import { customStyles } from './styles';
import { useState } from 'react';

// We get this #root in index.html
Modal.setAppElement('#root');

const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
    >
      <h1>Hello world</h1>
      <hr />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolor vitae ut aspernatur quas assumenda.</p>
    </Modal>
  );
};

export default CalendarModal;
