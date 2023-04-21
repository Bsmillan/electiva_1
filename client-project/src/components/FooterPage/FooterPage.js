import React from 'react'
import {Row, Col} from 'antd';
import "./FooterPage.scss";

export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[20, 20]} >
          <Col xs={24} sm={12} md={8}>
            <h4>Informacion de contacto</h4>
            <p>Universidad - Empresa</p>
            <p>Manizales</p>
          </Col>
        </Row>
      </div>
    </footer>
  )
}
