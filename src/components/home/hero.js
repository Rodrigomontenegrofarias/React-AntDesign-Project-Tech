import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Presentacion',
    content: 'Mi nombre es Rodrigo Montenegro, me encuentro terminando mi 4 año y estudio ingeniería Informatica en la U de Valparaiso Mi edad es de 24 años, vivo con mis padres en Villa Alemana, 5 region. Me encanta Aprender sobre tecnologia,  programar, realizar deportes, estudiar, viajar y estar conectado con la naturaleza.'
  },
  {
    key: '2',
    title: 'Contenido de pagina web',
    content: 'Esta pagina contiene 5 vistas las cuales estan en la parte superior derecha, la pagina web esta automatizada mediante pipeline de dev.azure y subida al repositorio de git. ',
  },
  {
    key: '3',
    title: 'Paginas web',
    content: 'Estas son mis otras paginas web.',
  },
]



function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                  <div className="btnHolder">
                    <Button type="primary" size="large">VER</Button>
                      
                  </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;