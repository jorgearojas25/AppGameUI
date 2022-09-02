import React from "react";
import image1 from "../../assets/image-1.jpg";
import image2 from "../../assets/image-2.jpg";
import image3 from "../../assets/image-3.jpg";

const Destinations = () => {
  return (
    <section className="destinations">
      <h3>
        AppGame es una central de aplicación de pruebas psicológicas para
        procesos de selección de personal de tu empresa. Por medio de un sistema
        de información, brindamos toda una plataforma para la asignación,
        gestión y perfilamiento de aspirantes, implementando mecanismos no
        tradicionales que optimizan tiempos y precisión en la obtención de
        datos.
      </h3>
      <div className="grid">
        <div>
          <img src={image1} alt="destination-1" />
          <h3>selección</h3>
          <p>
            Brindamos soporte para realizar los procesos de selección de
            personal de tu empresa. Reconociendo la trascedencia de un proceso
            de selección de personal que implica la inclusión de aspectos
            legales, garantías, trazabilidad, equidad, medición, precisión,
            entre otros.
          </p>
        </div>

        <div>
          <img src={image2} alt="destination-2" />
          <h3>Perfiles</h3>
          <p>
            La caracterización adecuada del perfil de un aspirante es de vital
            importancia, previo a una entrevista. Esto le permite al equipo de
            Recusos Humanos, llegar a indagar, corroborar o contrastar aspectos
            identificados por medio de la aplicación web.
          </p>
        </div>

        <div>
          <img src={image3} alt="destination-3" />
          <h3>Make-decision</h3>
          <p>
            Las competencias psicológicas medidas se concentran en caracterizar
            los procesos de toma de decisiones, en tanto se pretende evaluar
            aspirantes para cargos de alta gerencia. La toma de decisiones está
            permeada por una serie de características definidas en el
            comportamiento humano, y cuando se produce en eventos inesperados,
            eventuales o con poca información, se expone la experiticia de una
            persona.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
