/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
     <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>
          Inicio
        </Typography>
      </a>
      <a href="#aboutTitle" 
        onClick={() => setActiveNav('#aboutTitle')}
        className={activeNav === '#aboutTitle' ? 'active' : ''}
      >
        <Typography>
          Acerca de mi
        </Typography>
      </a>
      <a href="#worksTitle"
        onClick={() => setActiveNav('#worksTitle')}
        className={activeNav === '#worksTitle' ? 'active' : ''}
      >
        <Typography>
          Proyectos
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>
          Contacto
        </Typography>
      </a>
    </nav>
  );
};