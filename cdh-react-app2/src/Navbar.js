import React from 'react';

function Navbar() {
  return <div>
    
<nav id="navbar" class="">
  <div class="nav-wrapper">
    
    <div class="logo">
      
      <a href="#home"><i class="fa fa-angellist"></i> REACT APP</a>
    </div>

    <ul id="menu">
      <li><a href="#home">Inicio</a></li>
   <li><a href="#services">Servicios</a></li>
   <li><a href="#about">Nosotros</a></li>
   <li><a href="#contact">Contacto</a></li>
    </ul>
  </div>
</nav>

<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>



  </div>;
  
}

export default Navbar;
