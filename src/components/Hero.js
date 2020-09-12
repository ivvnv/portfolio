import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function Hero(props) {
    return (
        <Jumbotron className = 'bg-transparent jumbotron-fluid p-0 mt-5'>
            <Container fluid = {true}>
                <Row className = 'justify-content-center py-4'>
                    <Col md={8} sm={6}>
                        <div className="container-title">{ props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1> }</div>
                        { props.subtitle && <h3 className='display-4 font-weight-light mb-4'>{props.subtitle}</h3> }
                        { props.text && <h3 className='display-5 lead font-weight-light'>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;