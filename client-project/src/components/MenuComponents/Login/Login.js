import React, { useState, useEffect } from "react";
import { Form, Input, Button, Alert } from "antd";
import axios from "axios";
import "./Login.scss";

const LoginForm = () => {
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [LoginError, setLoginError] = useState(false);

  const onFinish = (values) => {
    axios
      .post("http://localhost:3200/api/v1/auth/login", values)
      .then((response) => {
        console.log("Success:", response.data);
        setLoginSuccess(true);
        window.location.href = "http://localhost:3000/services/list";
        // Aquí puedes realizar las acciones necesarias después de un inicio de sesión exitoso, como guardar el token de acceso en el almacenamiento local o redirigir al usuario a otra página.
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setLoginError(true);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario o restablecer el formulario.
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="User"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
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
      <>
        {LoginSuccess && (
          <Alert
            message="Inicio de sesión exitoso"
            description=" "
            type="success"
            showIcon
          />
        )}
        {LoginError && (
          <Alert
            message="Inicio de sesión fallido"
            description="Verifica tu correo o contraseña "
            type="error"
            showIcon
          />
        )}
      </>
    </>
  );
};

export default LoginForm;
