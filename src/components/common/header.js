import React, { useState } from 'react';
import image1 from '../../assets/images/logo.jpg';
import { Anchor, Drawer, Button } from 'antd';
//import Imagenes from '../home/Imagenes.js';

//const src1 = '../../assets/images/LOGO.jpg'
//import image7 from '../../assets/images/logo.jpg';
const { Link } = Anchor;



function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i>
          <div>
            <img class="ui mini image" width="100" height="100" src={image1}/>

            
          </div>
          </i>
          
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Inicio" />
            <Link href="#about" title="Acerca de" />
            <Link href="#feature" title="Imagenes de ovnis" />
            <Link href="#works" title="Imagen de la luna" />
         
            <Link href="#contact" title="Contactanos" />
            
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="Acerca de" />
              <Link href="#feature" title="Imagenes de ovnis" />
              <Link href="#works" title="Imagen de la luna" />
              
              <Link href="#contact" title="Contactanos" />
             
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;