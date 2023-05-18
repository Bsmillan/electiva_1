import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import RegisterForm from '../Register/Register';
import "./RegisterModal.scss";

const RegisterModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button className="btn-register" type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Register"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};

export default RegisterModal;