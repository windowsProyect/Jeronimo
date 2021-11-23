import React from "react";
import { Btn } from "../components/btn";
import Facebook from "../img/social/facebook.svg";
import Instagram from "../img/social/instagram.svg";
import Github from "../img/social/githubSocial.svg";
import Linkedin from "../img/social/linkedin.svg";

export const Contacto = () => {
  return (
    <div>
      <div className="sider-social">
        <div className="grid-social">
          <a
            href="https://www.facebook.com"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" src={Facebook} />
          </a>

          <a
            href="https://www.instagram.com"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" src={Instagram} />
          </a>

          <a
            href="https://www.github.com"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" src={Github} />
          </a>
          <a
            href="https://www.linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" src={Linkedin} />
          </a>
        </div>
      </div>
      <div className="mail-container">
        <p className="social-text">
          Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja
          de entrada siempre está abierta. Ya sea que tenga una pregunta o
          simplemente quiera saludar, ¡haré todo lo posible para responderle!
        </p>
        <a
          href="mailto:gerorobalino@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <Btn content="Contáctame" class="contacto" />
        </a>
      </div>
    </div>
  );
};
