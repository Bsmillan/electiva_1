import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Alert } from "antd";
import axios from "axios";
import "./Register.scss";

const { Option } = Select;

const RegistrationForm = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/v1/departamentoMunicipio/listdpmp")
      .then((response) => {
        const data = response.data;
        setDepartamentos(data);
      })
      .catch((error) => {
        console.error("Error  departamentos:", error);
      });
  }, []);

  console.log(departamentos);

  const handleDepartmentChange = (value) => {
    const selectedDepartment = departamentos.find(
      (departamento) => departamento._id === value
    );

    if (selectedDepartment) {
      setMunicipios(selectedDepartment.municipios);
    } else {
      setMunicipios([]);
    }
  };

  const onFinish = (values) => {
    const registerData = {
      ...values,
      departamento: values.departamento,
      municipio: values.municipio,
    };

    axios
      .post("http://localhost:3200/api/v1/auth/register", registerData)
      .then((response) => {
        console.log("Success:", response.data);
        setRegisterSuccess(true);
      })
      .catch((error) => {
        console.error("Error registering:", error);
        setRegisterError(true);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="registration-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Brahiam" />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: "Please enter your lastname" }]}
        >
          <Input placeholder="Millan" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input placeholder="example@example.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="departamento"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el departamento!",
            },
          ]}
        >
          <Select
            placeholder="Select department"
            onChange={handleDepartmentChange}
          >
            {departamentos.map((departamento) => (
              <Option key={departamento._id} value={departamento._id}>
                {departamento._id}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="municipio"
          rules={[
            {
              required: true,
              message: "Please select your municipality!",
            },
          ]}
        >
          <Select placeholder="Select municipality">
            {municipios.map((municipio) => (
              <Option key={municipio} value={municipio}>
                {municipio}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
      <>
        {registerSuccess && (
          <Alert
            message="Registro exitoso"
            description="Tu registro ha sido exitoso. ¡Bienvenido!"
            type="success"
            showIcon
          />
        )}
        {registerError && (
          <Alert
            message="Error de registro"
            description="Verifica que los datos se han correctos"
            type="error"
            showIcon
          />
        )}
      </>
    </>
  );
};

export default RegistrationForm;
