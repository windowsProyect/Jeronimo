import React from "react";
import logo from "../img/logo-vector.svg";
import logoV from "../img/logo-video.mp4";
import { Page } from "../components/page";
import { Modal, useModal, Text } from "@nextui-org/react";

export const QuienSoy = () => {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Page
        scroll1="header"
        scroll2="quienSoy"
        scrollText1="Inicio"
        scrollText2="Quien soy"
        titleText="Hola, soy Jerónimo"
        description="Desarrollador Full-stack"
        infoImg="https://lh3.googleusercontent.com/a-/AOh14Ggl_2KtxwSOUavZh5hfxCEBijwIJ0z-w6Qjo41fbQ=s216-p-rw-no"
        textInfo="Jerónimo Robalino"
        btnTo="quienSoy"
        btnText="Ver"
        titleClass="header-text_first-quienSoy"
        imgClass="picture-QuienSoy"
      />

      <div className="quienSoy" name="quienSoy">
        <div className="content-QuienSoy">
          <h1 className="quienSoy-title">Quien soy</h1>
          <p className="texto">
            Hola, mi nombre es Jerónimo Robalino, tengo 15 años, actualmente soy
            desarrollador full-stack. Tengo conocimientos amplios en HTML5,
            CSS3, JavaScript, TypeScript y librerías como React JS, manejadores
            de estados como Redux, Frameworks como NextJS para server side
            rendering, preprocesadores de CSS como SASS, Responsive Design,
            bootstrap, maquetación con CSS Grid Layoud y Flexbox, etc. Utilizó
            en el tecnologias como nodeJs y como base de datos Firebase. Ademas
            conozco sobre programas de diseño como Figma y de creación de
            imagenes como photoshop e ilustrator.
            <br />
            Como programador me considero una persona muy creativa y capaz de
            desarrollar cualquier tipo de soluciones. Ademas tengo gran
            capacidad de aprendizaje, tanto de leguajes de programación o
            cualquier otro ambito.
            <br />
            Como persona tengo una buena capacidad para adaptarme a cualquier
            situación para poder generar una solución. Dentro de grupos de
            personas me gusta y lo hago bien, el hecho de tomar liderazgo del
            grupo para lograr el objetivo cualquier sea.
          </p>
          <img
            alt="Jerónimo"
            className="picture-quienSoy"
            src={
              "https://lh3.googleusercontent.com/a-/AOh14Ggl_2KtxwSOUavZh5hfxCEBijwIJ0z-w6Qjo41fbQ=s216-p-rw-no"
            }
          />
          <img alt="logo" src={logo} className="logo-quienSoy" />
          <p className="video" onClick={() => setVisible(true)}>
            - Video
          </p>
        </div>
        <Modal
          closeButton
          width="80vw"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
          blur="true"
          color="black"
        >
          <Modal.Header>
            <Text id="modal-title" className="titulo-modal" color="white" b size={18}>
              Video de mi logo
            </Text>
          </Modal.Header>
          <Modal.Body>
            <video className="video_logo" controls src={logoV}></video>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
