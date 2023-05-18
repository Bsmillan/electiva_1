import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Valores del formulario:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Error en el formulario:', errorInfo);
  };

  return (
    <Form
      name="login-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="User"
        name="username"
        rules={[{ required: true, message: 'Please enter your user' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>

      <Form.Item>
        <a href="#">¿Forgot your password?</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;