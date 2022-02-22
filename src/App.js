import "./App.css";
import profile_pic from "./assets/profile-picture-t2.png";
import cv from "./assets/pdf/cv.pdf";
import profile_pic2 from "./assets/pp.jpg";
import cmlogo from "./assets/cmlogo.png";
import shlogo from "./assets/shlogo.png";
import emlogo from "./assets/emlogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import emailjs from 'emailjs-com';
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
function App() {
  return (
    //================== MAIN ========================
    <main className="Main">
      {mainPage()}
      {aboutMe()}
      {my_skills()}
      {my_qualifications()}
      {my_services()}
      {my_portfolio()}
      {project_in_mind()}
      {contactme()}
    </main>
  );
}

function mainPage() {
  return (
    <section class="home section" id="home">
      <div class="home_container container grid">
        <div class="home_content grid">
          <div class="home_social">
            <a
              href="https://www.linkedin.com/in/ingeniero-israel-rea"
              class="home_social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/isra_rm17/"
              class="home_social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Israrea"
              class="home_social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="home_img">
            <svg
              class="home_blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.12 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />

                <image
                  class="home_blob-img"
                  x="-20"
                  y="5"
                  xlinkHref={profile_pic}
                />
              </g>
            </svg>
          </div>
          <div class="home_data">
            <h1 class="home_title">Hola, soy Israel</h1>
            <h3 class="home_subtitle">
              Ingeniero Mecatrónico / Desarrollador de Software
            </h3>
            <p class="home_description">
              Experiencia desarrollando aplicaciones móviles para IOS y Android
              asi como FrontEnd de sitios web usando React.{" "}
            </p>
            <a href="#contact" class="button button--flex">
              Contactame
              <i class="fas fa-paper-plane button_icon"></i>
            </a>
          </div>
        </div>
        <div class="home_scroll">
          <a href="#about" class="home_sccroll-button button--flex">
            <i class="fas fa-mouse home_scroll-mouse"></i>
            <span class="home_scroll-name">Baja a la siguiente sección</span>
            <i class="fas fa-arrow-down home_scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function aboutMe() {
  return (
    <section class="about section" id="about">
      <h2 class="section_title">Acerca de mi</h2>
      <span class="section_subtitle">Mi introdución</span>
      <div class="about_container container grid">
        <img src={profile_pic2} alt="" class="about_img"></img>
        <div class="about_data">
          <p class="about_description">
            {" "}
            Soy ingeniero mecatrónico, he trabajado como desarrollador de
            aplicaciones móviles para IOS y Android.<br></br>
            Sé sobre desarrollo de software, automatización, programación de
            PLCs, electrónica, robótica, mecánica, ensamble de PC, desarrollo
            web y nutrición.<br></br>
            <br></br>Actualmente estoy aprendiendo el desarrollo de apps con
            Reactjs / HTML / CSS / JS, mi interes sería desarrollar FRONTEND de
            webs o apps.
            <br></br>
            <br></br>Soy una persona autodidacta, tengo mucha curiosidad por
            como funcionan las cosas por lo que siempre busco y aprendo.
            <br></br>
            <br></br>Mi portafolio incluye proyectos sobre mecatrónica,
            desarrollo de software así como mis proyectos y logros personales.
            <br></br>
            <br></br>¡Gracias por tu visita!<br></br>
            <br></br>
          </p>
          <div class="about_info">
            <div>
              <span class="about_info-title">3</span>
              <span class="about_info-name">
                Años<br></br> Experiencia
              </span>
            </div>
            <div>
              <span class="about_info-title">3</span>
              <span class="about_info-name">
                Compañia<br></br>donde he trabajado
              </span>
            </div>
            <div>
              <span class="about_info-title">05+</span>
              <span class="about_info-name">
                Proyectos<br></br> Completados
              </span>
            </div>
          </div>
          <div class="about_buttons">
            <a download="Israel_Rea-CV" href={cv} class="button button--flex">
              Descargar CV <i class="fas fa-download button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function my_skills() {

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Mi nivel tecnico</span>
      <div className="skills_container container grid">
        {/* =================== SKILLS 1 ========================*/}
        <div className="skills_content skills_open">
          <div className="skills_head">
            <img
              class="brackets skills_icon"
              src="https://img.icons8.com/nolan/64/curly-brackets.png"
              alt=""
            />
            <div>
              <h1 class="skills_title">
                Desarrollador de aplicaciones móviles
              </h1>
              <span class="skills_subtitle">Aproximadamente 2 Años</span>
            </div>
            <img
              class="angledown skills_arrow"
              src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"
              alt=""
            />
          </div>
          <div class="skills_list grid">
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Java</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Swift 5</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Kotlin</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">GitHub</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Google Firebase</h3>
                <span class="skills_number">60%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "60%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
        {/* =================== SKILLS 2 ========================*/}
        <div className="skills_content skills_close">
          <div className="skills_head">
            <img
              class="sourcecode skills_icon"
              src="https://img.icons8.com/nolan/64/source-code.png"
              alt=""
            />
            <div>
              <h1 class="skills_title">Desarrollador Frontend</h1>
              <span class="skills_subtitle"> 2 meses de freelance</span>
            </div>
            <img
              class="angledown skills_arrow"
              src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"
              alt=""
            />
          </div>
          <div class="skills_list grid">
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">ReactJS</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">HTML</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">CSS</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Javascript</h3>
                <span class="skills_number">40%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "40%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
        {/* =================== SKILLS 3 ========================*/}
        <div className="skills_content skills_close">
          <div className="skills_head">
            <img
              class="engine skills_icon"
              src="https://img.icons8.com/nolan/64/engine.png"
              alt=""
            />
            <div>
              <h1 class="skills_title">Mecatrónica</h1>
              <span class="skills_subtitle">4 Años de la carrera</span>
            </div>
            <img
              class="angledown skills_arrow"
              src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"
              alt=""
            />
          </div>
          <div class="skills_list grid">
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">AutoCad</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">SolidWorks</h3>
                <span class="skills_number">40%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "40%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">LabView</h3>
                <span class="skills_number">60%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "60%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Tia Portal (PLC Siemens 1200)</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Programacion de PLC: KOP, AWL y FUP</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">CNC SIMULATOR PRO</h3>
                <span class="skills_number">45%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "45%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Prolog</h3>
                <span class="skills_number">60%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "60%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">FluidSim</h3>
                <span class="skills_number">40%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "40%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
        {/* =================== SKILLS 4 ========================*/}
        <div className="skills_content skills_close">
          <div class="skills_head">
            <img
              class="others skills_icon"
              src="https://img.icons8.com/nolan/64/square-brackets.png"
              alt=""
            />
            <div>
              <h1 class="skills_title">Otras</h1>
              <span class="skills_subtitle">Aprendizajes personales</span>
            </div>
            <img
              class="angledown skills_arrow"
              src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"
              alt=""
            />
          </div>
          <div class="skills_list grid">
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Ensamble de PC</h3>
                <span class="skills_number">90%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "90%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Linux (Ubuntu)</h3>
                <span class="skills_number">60%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "60%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">VMware/ VirtualBox</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">C</h3>
                <span class="skills_number">70%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">C++</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Python</h3>
                <span class="skills_number">30%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "30%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Unity</h3>
                <span class="skills_number">50%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "50%" }}
                ></span>
              </div>
            </div>
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">Adobe Photoshop / Illustrator</h3>
                <span class="skills_number">20%</span>
              </div>
              <div class="skills_bar">
                <span
                  class="skills_percentage skills_html"
                  style={{ width: "20%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function my_qualifications() {
  
  return (
    <section className="qualifications section" id="qualifications">
      <h2 className="section_title" id="carrer">
        Carrera
      </h2>
      <span className="section_subtitle">Mi linea del tiempo</span>

      <div className="qualifications_container container">
        <div className="qualifications_tabs">
          <div
            className="qualifications_button button--flex qualifications_active"
            data-target="#work"
          >
            <i class="fas fa-briefcase qualifications_icon"></i>
            Experiencia
          </div>
          <div
            className="qualifications_button button--flex"
            data-target="#education"
          >
            <i class="fas fa-graduation-cap qualifications_icon"></i>
            Edcucación
          </div>
        </div>

        <div className="qualifications_sections">
          {/*================== qualifications content 1 ========================*/}
          <div
            className="qualifications_content qualifications_active"
            data-content
            id="work"
          >
            {/*================== work 1 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  <i class="fas fa-desktop certifications-icon"></i>
                  Profesor de computación (Servicio Social)
                </h3>
                <span className="qualifications_subtitle">
                  México - Delegación Álvaro Obregón
                </span>
                <div className="qualifications_calendar">
                  <i class="far fa-calendar-alt"></i> 2018 - 2018
                </div>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
            </div>
            {/*================== work 2 ========================*/}
            <div className="qualifications_data">
              <div></div>

              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>

              <div>
                <h3 className="qualifications_title">
                  <i class="fas fa-mobile-alt certifications-icon"></i>
                  Desarrollador de aplicaciones móviles para IOS y Android
                </h3>
                <span className="qualifications_subtitle">
                  México - InnovatedSoft
                </span>
                <div className="qualifications_calendar">
                  <i class="far fa-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>
            {/*================== work 3 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  <i class="fas fa-laptop-code certifications-icon"></i>
                  Técnico en instalación y reparación de software y hardware
                  para PC
                </h3>
                <span className="qualifications_subtitle">
                  México - Freelance
                </span>
                <div className="qualifications_calendar">
                  <i class="far fa-calendar-alt"></i> 2018 - Actualidad
                </div>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
            </div>
          </div>
          {/*================== qualifications content 2 ========================*/}
          <div className="qualifications_content " data-content id="education">
            {/*================== certifications ========================*/}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  <i class="fas fa-graduation-cap certifications-icon"></i>
                  Estudios
                </h3>
              </div>
            </div>
            {/*================== educacion 1 ========================*/}
            <div className="qualifications_data">
              <div></div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
                <span className="qualifications_rounder"></span>
              </div>
              <div>
                <h3 className="qualifications_title">Ingeniería Mecatrónica</h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
                <div className="qualifications_calendar">
                  <i class="far fa-calendar-alt"></i> 2017 - 2020
                </div>
              </div>
            </div>
            {/*================== certifications ========================*/}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  <i class="fas fa-stamp certifications-icon"></i>
                  Certificaciones
                </h3>
              </div>
            </div>

            {/*================== certification 1 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-mobile-alt certifications-icon"></i>
                  Desarrollo de aplicaciones móviles
                </h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
            </div>
            {/*================== certification 2 ========================*/}
            <div className="qualifications_data">
              <div></div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-gamepad certifications-icon"></i>
                  Programación de videojuegos{" "}
                </h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
              </div>
            </div>
            {/*================== certification 3 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-car-battery certifications-icon"></i>
                  Electrónica Automotriz
                </h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
            </div>
            {/*================== certification 4 ========================*/}
            <div className="qualifications_data">
              <div></div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-star certifications-icon"></i>
                  Dirección y estilos de liderazgo
                </h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
              </div>
            </div>
            {/*================== certification 5 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-car certifications-icon"></i>
                  Ford-Enactus: For driving skills 2018
                </h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
            </div>
            {/*================== certification 6 ========================*/}
            <div className="qualifications_data">
              <div></div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-brain certifications-icon"></i>
                  Diseño de mapas mentales
                </h3>
                <span className="qualifications_subtitle">
                  México - Universidad Tecmilenio
                </span>
              </div>
            </div>
            {/*================== certification 7 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-file-word certifications-icon"></i>
                  Microsoft Office 2007
                </h3>
                <span className="qualifications_subtitle">
                  México - La Salle Simon Bolivar
                </span>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
                <span className="qualifications_rounder"></span>
              </div>
            </div>
            {/*================== languages ========================*/}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  <i class="fas fa-passport certifications-icon"></i>Idiomas
                </h3>
              </div>
            </div>
            {/*================== language 1 ========================*/}
            <div className="qualifications_data">
              <div></div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
              </div>
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-passport certifications-icon"></i>
                  Ingles
                </h3>
                <span className="qualifications_subtitle">Intermedio</span>
              </div>
            </div>
            {/*================== language 2 ========================*/}
            <div className="qualifications_data">
              <div>
                <h3 className="qualifications_title">
                  {" "}
                  <i class="fas fa-passport certifications-icon"></i>
                  Español
                </h3>
                <span className="qualifications_subtitle">Nativo</span>
              </div>
              <div>
                <span className="qualifications_rounder"></span>
                <span className="qualifications_line"></span>
                <span className="qualifications_rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function my_services() {
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Servicios</h2>
      <span className="section_subtitle">Lo que ofrezco</span>

      <div className="services_container container grid">
        {/*================== Service 1 ========================*/}
        <div class="services_content">
          <div>
            <i class="fas fa-mobile-alt services_icon"></i>
            <h3 class="services_title">
              IOS / Android <br></br> Desarrollador mobile
            </h3>
          </div>
          <span class="button button--flex button--small button--link services_button">
            Ver mas
            <i class="fas fa-arrow-right button_icon"></i>
          </span>

          <div class="services_modal">
            <div class="services_modal-content">
              <h4 class="services_modal-title">
                IOS / Android <br></br> Desarrollador mobile
              </h4>
              <i class="fas fa-times services_modal-close"></i>
              <ul class="services_modal-services grid">
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>
                    Desarollo apps para IOS y Android nativas con Android Studio
                    y Xcode
                  </p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Lenguajes: Java, Kotlin y Swift</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Publicación en tienda</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Sensibilidad por UI y UX</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Manejo de Firebase, Login with Google</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Consumo de Web Services</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Manejo de control de versiones Git</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Uso de extensiones y protocolos</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>
                    {" "}
                    Corregir bugs y mejorar la eficiencia de las aplicaciones
                  </p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p> Pruebas unitarias</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p> Acceso a recursos de hardware </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*================== Service 2 ========================*/}
        <div class="services_content">
          <div>
            <i class="fas fa-code services_icon"></i>
            <h3 class="services_title">
              Frontend <br></br> Desarrollador Web
            </h3>
          </div>
          <span class="button button--flex button--small button--link services_button">
            Ver mas
            <i class="fas fa-arrow-right button_icon"></i>
          </span>

          <div class="services_modal">
            <div class="services_modal-content">
              <h4 class="services_modal-title">
                Frontend <br></br> Desarrollador web
              </h4>
              <i class="fas fa-times services_modal-close"></i>
              <ul class="services_modal-services grid">
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Posicionar tu marca en internet</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Crearte un portafolio personal</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Desarrollo de pagina web</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Desarrollo de la interfaz de usuario</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Desarrollo de Frontend con Reactjs</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Sensibilidad por UI y UX</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*================== Service 3 ========================*/}
        <div class="services_content">
          <div>
            <i class="fas fa-server services_icon"></i>
            <h3 class="services_title">
              Mecatrónica <br></br> Ingeniero
            </h3>
          </div>
          <span class="button button--flex button--small button--link services_button">
            Ver mas
            <i class="fas fa-arrow-right button_icon"></i>
          </span>

          <div class="services_modal">
            <div class="services_modal-content">
              <h4 class="services_modal-title">
                Mecatrónica <br></br> Ingeniero
              </h4>
              <i class="fas fa-times services_modal-close"></i>
              <ul class="services_modal-services grid">
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Analisis de circuitos electricos y electrónicos</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Analisis y mantenimiento de electrónica automotriz</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Programación de código G para CNC</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>
                    Diseño asistido por computadora(autoCad, SolidWorks, NX)
                  </p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>
                    Automatización de sistemas electrónicos y/o procesos
                    (Prolog, python, etc)
                  </p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Programación y mantenimiento de PLCs (Siemens 1200)</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Conocimientos de robótica industrial</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Domótica</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>
                    Desarrollo de proyectos con microcontroladores como Arduino
                  </p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>programación de PLCs con lenguajes: KOP, AWL y FUP</p>
                </li>
                <li class="services_modal-service">
                  <i class="far fa-check-circle services_modal-icon"></i>
                  <p>Creación de robots inteligentes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function my_portfolio() {
  return (
    <section class="portfolio section" id="portfolio">
      <h2 class="section_title">Portafolio</h2>
      <span class="section_subtitle">
        Desliza las tajetas de los proyectos hacia la derecha o izquierda para
        ver mas.
      </span>

      <div class="portfolio_container container swiper-container">
        <div class="swiper-wrapper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            <SwiperSlide>
              {/*================== card 1 ========================*/}
              <div class="portfolio_content grid swiper-slide">
                <img src={cmlogo} alt="" class="portfolio_img"></img>

                <div class="portfolio_data">
                  <h3 class="portfolio_title">CastMe for IOS and Android</h3>
                  <p class="portfolio_description">
                    App para IOS y Android desarrollada trabajando para
                    Innovated Software utilizando Xcode con Swift 5 y Java con
                    Android Studio. <br></br>
                    Reproductor en streaming de Podcast/Radio en primer y
                    segundo plano con capacidad de suscribirse a canales, buscar
                    por podcast o artista y adaptable a diferentes pantallas y
                    versiones de los SO.
                  </p>
                  <a
                    href="https://www.youtube.com/embed/80UCI7zCNy8"
                    target="_blank"
                    rel="noreferrer"
                    class="button button--flex button--small portfolio_button"
                  >
                    Video Demo
                    <i class="fas fa-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*================== card 2 ========================*/}
              <div class="portfolio_content grid swiper-slide">
                <img src={shlogo} alt="" class="portfolio_img"></img>

                <div class="portfolio_data">
                  <h3 class="portfolio_title">ScanHub for IOS and Android</h3>
                  <p class="portfolio_description">
                    {" "}
                    App para IOS y Android desarrollada trabajando para
                    Innovated Software utilizando Xcode con Swift 5 y Java con
                    Android Studio. <br></br>
                    Escaner de documentos para los dispositivos móviles en el
                    que puedes tomar una foto o elegir de la galeria para
                    aplicarle filtros y convertirlo en un documento escaneado.
                  </p>
                  <a
                    href="https://www.youtube.com/embed/cZw2TTVY3bA"
                    target="_blank"
                    rel="noreferrer"
                    class="button button--flex button--small portfolio_button"
                  >
                    Video Demo
                    <i class="fas fa-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*================== card 3 ========================*/}
              <div class="portfolio_content grid swiper-slide">
                <img src={emlogo} alt="" class="portfolio_img"></img>
                <div class="portfolio_data">
                  <h3 class="portfolio_title">El Mexicano App</h3>
                  <p class="portfolio_description">
                    Proyecto personal desarrollado para Android utilizando Java
                    y Android Studio IDE.<br></br>
                    App para el restaurante El Mexicano en donde puedes
                    consultar su menú, dirección y puedes ordenar desde tu
                    celular sin la necesidad de un mesero que te tome la orden.
                    <br></br>
                    Tecnologias: Android Studio IDE, Java, Google Firebase,
                    Database, GitHub, UI y UX.
                  </p>
                  <a
                    href="https://www.youtube.com/embed/zUwsqb_xN64"
                    target="_blank"
                    rel="noreferrer"
                    class="button button--flex button--small portfolio_button"
                  >
                    Video Demo
                    <i class="fas fa-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="swiper-button-next">
          <i class="fas fa-angle-right swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-button-prev">
          <i class="fas fa-angle-left swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
}
function project_in_mind() {
  return (
    <section class="project section">
      <div class="project_bg">
        <div class="project_container container grid">
          <div class="project_data">
            <h2 class="project_title">Tienes un proyecto en mente?</h2>
            <p class="project_description">Contactame </p>
            <a href="#contact" class="button button--flex button--white">
              Contáctame
              <i class="fas fa-paper-plane project_icon button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function contactme() {
  return (
    <section class="contact section" id="contact">
      <h2 class="section_title">Contactame</h2>
      <span class="section_subtitle">Ponte en contacto</span>

      <div class="contact_container container grid">
        <div>
          <div class="contact_information">
            <i class="fas fa-phone contact_icon"></i>
            <div>
              <h3 class="contact_title">Llamame</h3>
              <span class="contact_subtitle">55-15-71-50-23</span>
            </div>
          </div>

          <div class="contact_information">
            <i class="fas fa-envelope contact_icon"></i>
            <div>
              <h3 class="contact_title">Email</h3>
              <span class="contact_subtitle">ing.israelrea@gmail.com</span>
            </div>
          </div>

          <div class="contact_information">
            <i class="fas fa-map-marker-alt contact_icon"></i>
            <div>
              <h3 class="contact_title">Ubicacion</h3>
              <span class="contact_subtitle">
                Ciudad de México, 01710, Alvaro Obregón
              </span>
            </div>
          </div>
        </div>
        <form action="" class="contact_form grid">
          <div class="contact_inputs grid">
            <div class="contact_content">
              <label for="" class="contact_label">
                Nombre
              </label>
              <input type="text" class="contact_input"></input>
            </div>

            <div class="contact_content">
              <label for="" class="contact_label">
                Email
              </label>
              <input type="text" class="contact_input"></input>
            </div>

            <div class="contact_content">
              <label for="" class="contact_label">
                Asunto
              </label>
              <input type="text" class="contact_input"></input>
            </div>

            <div class="contact_content">
              <label for="" class="contact_label">
                Mensaje
              </label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                class="contact_input"
              ></textarea>
            </div>

            <div>
              <a href="#" class="button button--flex">
                Enviar Mensaje
                <i class="fas fa-message button_icon"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default App;
