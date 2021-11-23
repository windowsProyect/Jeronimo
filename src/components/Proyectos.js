import React from "react";

export const Proyectos = (props) => {
  return (
    <>
      <div name={props.name} className="proyect-container">
        <div className={"img-proyect " + props.ClassBack}>
          <div className="proyecto-info">
            <p className="texto-proyecto">{props.textoProyecto}</p>
            <div className="grid-btn">
              <a
                target="_blank"
                className="link-proyecto"
                rel="noreferrer"
                href={props.hrefGithub}
              >
                <button className="btn-secundary btn-proyecto">Github</button>
              </a>
              <a
                target="_blank"
                className="link-proyecto"
                rel="noreferrer"
                href={props.hrefLink}
              >
                <button className="btn btn-proyecto">Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
