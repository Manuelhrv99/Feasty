import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from './img/Feasty_logo.gif'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¡Llena el formulario y nos pondremos en contacto contigo!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Ingresa tu Nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCel">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="cellphone" placeholder="Ingresa tu Celular" />
                    </Form.Group>
            
                    {/* <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                <Button type="submit" onClick={props.onHide}>Enviar</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Header() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src={Logo}
                    alt=""
                />
            </Link>

            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <Button variant="secondary" onClick={() => setModalShow(true)}>
                    Vende con nosotros
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <Avatar />
            </div>
        </div>
    )
}

export default Header
