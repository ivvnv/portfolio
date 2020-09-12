import React from 'react';

import Card from '../components/Card';

import decibel from '../assets/images/decibel.png'
import hpwizardsunite from '../assets/images/hpwizardsunite.png';
import burgerqueen from '../assets/images/burgerqueen.png';
import gav from '../assets/images/ganemosleav.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Ganémosle al Virus",
          subTitle: "PWA that provides info about COVID-19 for children",
          imgSrc: gav,
          link: "https://github.com/ivvnv/GanemosleAlVirus",
          link2: "https://trusting-jepsen-2abf56.netlify.app/",
          selected: false,
        },
        {
          id: 1,
          title: "Burger Queen",
          subTitle: "Ordering app for waiters and kitchen staff",
          imgSrc: burgerqueen,
          link: "https://github.com/ivvnv/SCL013-burger-queen",
          link2: "https://burgerqueen-615be.web.app/",
          selected: false,
        },
        {
          id: 2,
          title: "Guía para el Novato Absoluto",
          subTitle:
            "Sorting platform for game Harry Potter: Wizards Unite",
          imgSrc: hpwizardsunite,
          link: "https://ivvnv.github.io/SCL013-data-lovers",
          link2: "https://ivvnv.github.io/SCL013-data-lovers/src/index.html",
          selected: false,
        },
        {
          id: 3,
          title: "Decibel Card Validator",
          subTitle: "Credit card validating system exercise",
          imgSrc: decibel,
          link: "https://github.com/ivvnv/SCL013-card-validation",
          link2: "https://ivvnv.github.io/SCL013-card-validation/src/index.html",
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