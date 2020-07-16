import React from 'react';

import Card from '../components/Card';

import decibel from '../assets/images/decibel.png'
import hpwizardsunite from '../assets/images/hpwizardsunite.png';
import burgerqueen from '../assets/images/burgerqueen.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Decibel Card Validator",
          subTitle: "Validador de tarjeta de crédito en plataforma ficticia",
          imgSrc: decibel,
          link: "https://ivvnv.github.io/SCL013-card-validation/src/index.html",
          selected: false,
        },
        {
          id: 1,
          title: "Guía para el Novato Absoluto",
          subTitle:
            "Manual por personajes del juego mobile Harry Potter: Wizards Unite",
          imgSrc: hpwizardsunite,
          link: "https://ivvnv.github.io/SCL013-data-lovers/src/index.html",
          selected: false,
        },
        {
          id: 2,
          title: "Burger Queen",
          subTitle: "App interna para la toma de órdenes de una hamburguesería",
          imgSrc: burgerqueen,
          link: "https://github.com/garrettlove8/evverest",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;