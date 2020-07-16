import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
      <div>
        <Hero title={props.title} />

        <Content>
          <p>
            Hola, mi nombre es Ivana. Soy diseñadora gráfica de profesión y en
            la actualidad me desempeño como estudiante del bootcamp de Front-End
            de Laboratoria, donde he aprendido a manejar HTML 5, CSS 3 y
            Javascript.
          </p>

          <p>
            Aspiro a poder encontrar un trabajo en el sector tech en mi país o
            en el extranjero, donde pueda mezclar lo aprendido de Front-End y
            mis habilidades de diseño, ayudando a desarrollar productos
            funcionales y visualmente atractivos.
          </p>

          <p>
            En estos últimos meses he volcado toda mi atención y tiempo en
            aprender React y Bootstrap, para reforzar el perfil de
            desarrolladora Front-End que quiero alcanzar: el más completo
            posible.
          </p>

          <p>
            Mi último proyecto, Burger Queen, es una app de uso interno para
            manejar las órdenes de comida de un restaurante. Puedes darle una
            mirada <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              aquí
            </a>
            , o en la página principal. Está construida con React y Bootstrap.
          </p>

          <p>
            Si quieres conocer más acerca de mi experiencia laboral, puedes
            revisar mi CV a continuación
          </p>
        </Content>
      </div>
    );

}

export default AboutPage;