import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ReactTooltip from 'react-tooltip';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';


function AboutPage(props) {

    return (
      <div>
        <Navigation />
        <Hero title={props.title} />

        <Content>
          <p>
            I'm Ivana, a Front-end Developer and Graphic Designer from Santiago,
            Chile.
          </p>

          <p>
            I taught myself how to code and that's why my homepage proudly reads{" "}
            <i style={{ color: "#cdc5e2" }}>Building the future from within.</i></p>
            
            <p>All my
            projects are a result of long hours of self-study and/or great
            teamwork, combined with the addition of what my design background
            taught me, I aspire to create solutions that are efficient and look
            great as well.</p>
          

          {/* <p>
            Mi último proyecto, Burger Queen, es una app de uso interno para
            manejar las órdenes de comida de un restaurante. Puedes darle una
            mirada <a
              href="https://burgerqueen-615be.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aquí
            </a>
            , o en la página principal. Está construida con React y Bootstrap.
          </p> */}

          <p className="last-paragraph">
            Listed below is my skill set, ranging from Front-end tools to
            prototyping and design softwares.
          </p>

          <div className="container justify-content mt-5">
            <div className="row mb-3 text-center">
              <div class="col">
                <i class="fab fa-html5 skilli" data-tip="HTML5"></i>
              </div>
              <div class="col">
                <i class="fab fa-css3-alt skilli" data-tip="CSS3"></i>
              </div>
              <div class="col">
                <i class="fab fa-js skilli" data-tip="JavaScript"></i>
              </div>
              <div class="col">
                <i class="fab fa-react skilli" data-tip="React"></i>
              </div>
              <div class="col">
                <i class="fab fa-node skilli" data-tip="Node.js"></i>
              </div>
            </div>

            <div className="row mb-1 py-3 text-center">
              <div class="col">
                {" "}
                <i class="fab fa-git skilli" data-tip="Git"></i>
              </div>
              <div class="col">
                <i class="fab fa-bootstrap skilli" data-tip="Bootstrap"></i>
              </div>
              <div class="col">
                <i class="fab fa-figma skilli" data-tip="Figma"></i>
              </div>
              <div class="col">
                <i
                  class="fab fa-adobe skilli"
                  data-tip="Adobe Creative Suite"
                ></i>
              </div>
            </div>
          </div>

          <ReactTooltip />
        </Content>
        <Footer />
      </div>
    );

}

export default AboutPage;