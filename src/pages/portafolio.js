import React from "react";
import { Page } from "../components/page";
import proyetos from "../img/proyectos.svg";
import { Proyectos } from "../components/Proyectos";

export const Portafolio = () => {
  return (
    <>
      <Page
        scroll1="header"
        scroll2="portafolio"
        scrollText1="Inicio"
        scrollText2="Proyectos"
        titleText="Algunos proyectos que he creado"
        description="Proyectos front-end, full-stack"
        infoImg={proyetos}
        textInfo=""
        btnTo="portafolio"
        btnText="Ver"
        titleClass="header-text_first-Portafolio"
        imgClass="picture-Portafolio"
      />
      <Proyectos
        name="portafolio"
        ClassBack="irina"
        textoProyecto="Una plataforma hecha para realizar venta y promoción de servicios tanto online como prensenciales."
        hrefGithub="https://github.com/jeronimo-art/react"
        hrefLink="https://jeronimo-art.github.io/react/"
      />
      <Proyectos
        name="portafolio"
        ClassBack="bike"
        textoProyecto="Dfkd ksldfksdfsd fdslkfj sdf fdlfsf f slkdf dkf
          dfkfks dfksdfñ logo dasjñdska dsjdksad sakd 
          dasd adsd ah"
        hrefGithub="https://github.com/jeronimo-art/react"
        hrefLink="https://jeronimo-art.github.io/react/"
      />
    </>
  );
};
