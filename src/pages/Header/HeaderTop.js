
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import Typewriter from 'typewriter-effect';

const HeaderTop = () => {

    return (
        <section className='header-top mt-4'>
            <Container>
                <Row className='no-gutters'>
                    <Col md={2}>
                        <div className="header-logo">
                            <a href="3">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="header-search">
                            <InputGroup className="mb-3">
                                <FormControl size='lg'
                                    placeholder='Search'
                                />
                                <Button variant="primary" className='px-3' id="button-addon2">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="header-end">
                            <div className="cart-area mr-4">
                                <FontAwesomeIcon icon={faCartPlus} />
                            </div>
                            <div className="sign-in-area">
                                <button className='btn px-3'>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeaderTop;