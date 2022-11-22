import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Logo from './img/Feasty_logo.gif'
import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {

    const initialValues = { username: "", email: "", cellphone: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]); // eslint-disable-line react-hooks/exhaustive-deps
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "¡Necesitas ingresar el Nombre!";
        }
        if (!values.email) {
            errors.email = "¡Necesitas ingresar el Email!";
        } else if (!regex.test(values.email)) {
            errors.email = "Formato de correo no valido";
        }
        if (!values.cellphone) {
            errors.cellphone = "¡Necesitas ingresar el Celular!";
        }
        return errors;
    };

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
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div>
                        <center>
                            <h3 id='SuccessMessage'>¡Registro exitoso!</h3>
                        </center>
                    </div>
                ) : (
                    <div></div>
                )}
                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text"
                            name="username"
                            placeholder="Ingresa tu Nombre"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>{formErrors.username}</p>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Ingresa tu Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>{formErrors.email}</p>

                    <Form.Group className="mb-3" controlId="formBasicCel">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control
                            type="text"
                            name="cellphone"
                            placeholder="Ingresa tu Numero"
                            value={formValues.cellphone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>{formErrors.cellphone}</p>
            
                    <center>
                        <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                        <Button type="submit">Enviar</Button>
                    </center>
                </form>
            </Modal.Body>
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
            </div>
        </div>
    )
}

export default Header
