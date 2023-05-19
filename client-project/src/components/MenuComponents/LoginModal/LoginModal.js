import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import LoginForm from '../Login/Login';
import "./LoginModal.scss";

const LoginModal = () => {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <div>
      <Button className="btn-login" type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

export default LoginModal;