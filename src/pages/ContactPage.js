import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import ReactTooltip from 'react-tooltip';
import ivanaCV from '../assets/cv-ivana.pdf'

function ContactPage(props) {

    return (
      <div>
        <Navigation />
       
        <Hero title={props.title} text={props.text} />
        <Content>
        <ReactTooltip />
          <div class="row justify-content-md-center set-social-icons">
            <div class="col col-lg-1">
              <a href="mailto:ivana.rivera.c@gmail.com">
                <i class="fas fa-envelope-square socialicon" />
              </a>
            </div>
            <div class="col col-lg-1">
              <a href="https://github.com/ivvnv" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github-square socialicon" />
              </a>
            </div>
            <div class="col col-lg-1">
              <a href="https://www.linkedin.com/in/riveraivana/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin socialicon" />
              </a>
            </div>
            <div class="col col-lg-1">
              <a href={ivanaCV} download rel="noopener noreferrer" target="_blank">
                <i class="fas fa-file-download socialicon" data-tip="Download my CV"/>
              </a>
            </div>
          </div>
          </Content>
          <Footer />
      </div>
    );

}

export default ContactPage;
