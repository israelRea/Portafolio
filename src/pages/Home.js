import React from 'react';
import LanguageESP from '../assets/recentprojects/esp_lang_img.png';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  const [t, i18n] = useTranslation("global")

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        {/*   <img src={LanguageESP} onClick = {() => i18n.changeLanguage("en")}></img>*/}
        <div className='menuContainer'>
        <div className='menuTrigger'>
       </div>
        </div>

        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Resume />
      </div>
      <SideNavbar />
      <div className='about-box'>
      <h1 className='titles' id="aboutTitle">Acerca de mi</h1>
      <About />
      </div>
      <div className='works-box'>
      <h1 className='titles' id="worksTitle">Proyectos</h1>
      <Works />
      </div>
      <Contact />
    </>
  );
};