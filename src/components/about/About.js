/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hola!";
  const aboutme = 
  `Soy Israel Rea, ingeniero mecatrónico y desarrollador de apps para IOS/Android.`;
  const aboutme2 = 
  `Tengo conocimientos en desarrollo de software, automatización, programación de PLCs, electrónica, robótica, mecánica, ensamble de PC, desarrollo web y nutrición.`;
  const aboutme3 = 
  `Actualmente estoy aprendiendo el desarrollo de apps con Reactjs / HTML / CSS / JS.`;
  const aboutme4 = 
  `Mi portafolio incluye mis proyectos mas recientes sobre desarrollo de apps y webs.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h1' variant="h5" id="hello">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}<br></br> <br></br>
              {aboutme2}<br></br> <br></br>
              {aboutme3}<br></br> <br></br>
              {aboutme4}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Enviame mensaje.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
