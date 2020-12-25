import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Metodo de trabajo mediante scrum',
    content: 'El trabajo fue adquirido a aplicar buenas tecnicas al realizar el trabajo.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Plataforma adquirida fue netlify',
    content: 'Conectar el dominio de la pagina con el hosting de preferencia Namecheap .',
  },
  {
    key: '3',
    icon: <i className="fas fa-folder outline"></i>,
    title: 'Contenedor del programa',
    content: 'Tendremos el programa contenido en github o devAzure',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Acerca de mi pagina web</h2>
          <p>Fue desarrollada mediante la siguente forma</p>
        </div>
        <div className="contentHolder">
          <p>
          </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;