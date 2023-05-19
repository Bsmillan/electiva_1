import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import RegisterForm from '../Register/Register';
import "./RegisterModal.scss";

const RegisterModal = () => {
  const [open, setopen] = useState(false);

  const showModal = () => {
    setopen(true);
  };

  const handleCancel = () => {
    setopen(false);
  };

  return (
    <div>
      <Button className="btn-register" type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Register"
        open={open}
        onCancel={handleCancel}
        footer={null}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};

export default RegisterModal;