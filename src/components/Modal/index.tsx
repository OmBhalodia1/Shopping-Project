import React, { ReactNode } from 'react';

type ModalProps = {
  modalContent: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ modalContent }) => {
  return <>{modalContent}</>;
};

export default Modal;
