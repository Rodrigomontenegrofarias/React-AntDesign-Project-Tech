import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Presentacion',
    content: 'Mi nombre es Rodrigo Montenegro y soy el creador de esta pagina',
  },
  {
    key: '2',
    title: 'Estudios',
    content: 'Me encuentro terminando mi 4 año y estudio ingeniería ingeniería en la U de Valparaiso .',
  },
  {
    key: '3',
    title: 'Paginas web',
    content: 'Estas son mis paginas web.',
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
                    <Button type="primary" size="large">Learn More</Button>
                    
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