/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import CastMe from '../../assets/recentprojects/castme.png';
import ScanHub from '../../assets/recentprojects/scanhub.png';
import Hebo from '../../assets/recentprojects/hebo.png';
import Crecer from '../../assets/recentprojects/crecer.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Portafolio', 
      description: `Portafolio personal desarrollado con ReactJS con animaciones 3D usando Three.js para el fondo.`,
      alter: 'Portfolio project',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'AFP CRECER', 
      description: `App para aseguradora Crecer desarrollada en mi trabajo en iOS(swift 5) para la gestión de cuentas de sus clientes y servicios.`,
      alter: 'AFP Crecer work',
      image: `${Crecer}`,
    },
    { 
      id: 3,
      title: 'Hebo CLP', 
      description: `App Android(Java) / iOS(swift 5) para escuela de derecho en donde se puede encontrar artículos penales.`,
      alter: 'Hebo project',
      image: `${Hebo}`,
    },
    { 
      id: 4,
      title: 'CastMe', 
      description: `Reproductor en streaming para Android(Java) / iOS(swift 5) de Podcast/Radio en primer y segundo plano con capacidad de suscribirse a canales, buscar por podcast o artista y adaptable a diferentes pantallas y versiones de los SO.`,
      alter: 'CastMe',
      image: `${CastMe}`,
    },
    { 
      id: 5,
      title: 'ScanHub', 
      description: `Escaner de documentos para Android(Java) / iOS(swift 5) en el que puedes tomar una foto o elegir de la galeria para aplicarle filtros y convertirlo en un documento escaneado.`,
      alter: 'Scanhub',
      image: `${ScanHub}`,
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
