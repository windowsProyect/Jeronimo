import React from "react";
import { Page } from "../components/page";
import proyetos from "../img/proyectos.svg";
import HabilidadesSvg from "../img/Habilidades.png";
import Html from "../img/habilidades/html.svg";
import Css from "../img/habilidades/css.svg";
import Js from "../img/habilidades/js.svg";
import Rc from "../img/habilidades/react.svg";
import Next from "../img/habilidades/next.svg";
import Bootstrap from "../img/habilidades/bootstrap.svg";
import Npm from "../img/habilidades/npm.svg";
import Git from "../img/habilidades/git-hub.svg";
import Sass from "../img/habilidades/sass.svg";
import Ts from "../img/habilidades/typescript.svg";
import NodeJs from "../img/habilidades/node.svg";
import Firebase from "../img/habilidades/firebase.svg";

import Figma from "../img/habilidades/figma.svg";
import AdobeXd from "../img/habilidades/adobeXd.svg";
import InvisionStudio from "../img/habilidades/invisionStudio.svg";
import AdobeColor from "../img/habilidades/adobeColor.svg";
import Photoshop from "../img/habilidades/photoshop.svg";
import Ilustrator from "../img/habilidades/typescript.svg";
import Svg from "../img/habilidades/svg.svg";
import ReactTooltip from "react-tooltip";


export const Habilidades = () => {
  return (
    <div className="App">
      <Page
        scroll1="header"
        scroll2="habilidades"
        scrollText1="Inicio"
        scrollText2="Habilidades"
        titleText="Algunas tecnoligias que manejo"
        description="Front-end, back-end y diseño"
        infoImg={proyetos}
        textInfo=""
        btnTo="habilidades"
        btnText="Ver"
        titleClass="header-text_first-Portafolio"
        imgClass="picture-Portafolio"
      />
      <div className="habilidades" name="habilidades">
        <img alt="titulo" width="40%" src={HabilidadesSvg} />
        <div className="grid-container_habiliades">
          <h1 className="titulo-front-end">Front-end</h1>
          <div className="front-end">
            <ReactTooltip
              place="top"
              type="dark"
              effect="solid"
              border={true}
              borderColor="#383838"
              className="tooltip-habilidades"
            />
            <img alt="habilidad" data-tip="Html" src={Html} />
            <img alt="habilidad" data-tip="Css" src={Css} />
            <img alt="habilidad" data-tip="JavaScript" src={Js} />
            <img alt="habilidad" data-tip="ReactJs" src={Rc} />
            <img alt="habilidad" data-tip="NextJs" src={Next} />
            <img alt="habilidad" data-tip="Bootstrap" src={Bootstrap} />
            <img alt="habilidad" data-tip="Npm" src={Npm} />
            <img alt="habilidad" data-tip="Git-hub" src={Git} />
            <img alt="habilidad" data-tip="Sass" src={Sass} />
            <img alt="habilidad" data-tip="TypeScript" src={Ts} />
          </div>
          <h1 className="titulo-back-end">Back-end</h1>
          <div className="back-end">
          <img alt="habilidad" data-tip="NodeJs" src={NodeJs} />
            <img alt="habilidad" data-tip="Firebase" src={Firebase} />
            <img alt="habilidad" data-tip="NextJs" src={Next} />
          </div>
          <h1 className="titulo-diseño">Diseño</h1>
          <div className="diseño">
          <img alt="habilidad" data-tip="Figma" src={Figma} />
            <img alt="habilidad" data-tip="Adobe XD" src={AdobeXd} />
            <img alt="habilidad" data-tip="Invision Studio" src={InvisionStudio} />
            <img alt="habilidad" data-tip="Adobe Color" src={AdobeColor} />
            <img alt="habilidad" data-tip="Phtoshop" src={Photoshop} />
            <img alt="habilidad" data-tip="Ilustratop" src={Ilustrator} />
            <img alt="habilidad" data-tip="Svg" src={Svg} />
          </div>
        </div>
      </div>
    </div>
  );
};
