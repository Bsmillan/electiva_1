import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log('Valores del formulario:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Error en el formulario:', errorInfo);
  };

  return (
    <Form
      name="registration-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre"
        name="firstName"
        rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellido"
        name="lastName"
        rules={[{ required: true, message: 'Por favor ingresa tu apellido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Correo electrónico"
        name="email"
        rules={[
          { required: true, message: 'Por favor ingresa tu correo electrónico' },
          { type: 'email', message: 'Por favor ingresa un correo electrónico válido' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Departamento"
        name="department"
        rules={[{ required: true, message: 'Por favor selecciona un departamento' }]}
      >
        <Select>
          <Option value="department1">Departamento 1</Option>
          <Option value="department2">Departamento 2</Option>
          <Option value="department3">Departamento 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Municipio"
        name="municipality"
        rules={[{ required: true, message: 'Por favor ingresa tu municipio' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
