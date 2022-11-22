import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import Paypal from './img/Paypal.png'
import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modal1(props) {

    const [modalTwoShow, setModalTwoShow] = React.useState(false);

    const initialValues = { username: "", email: "", invitados: "" };
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
        if (!values.invitados) {
            errors.invitados = "¡Necesitas ingresar la cantidad de invitados!";
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
                    Baucher del comprador
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div>
                        <center>
                            <h3 id='SuccessMessage'>¡Validación Exitosa!</h3>
                            <Button variant="success" type="submit" onClick={() => setModalTwoShow(true)}>Pagar</Button>
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
                            placeholder="Email al que enviaremos la orden de compra"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>{formErrors.email}</p>

                    <Form.Group className="mb-3" controlId="formBasicCel">
                        <Form.Label>Invitados</Form.Label>
                        <Form.Control
                            type="number"
                            name="invitados"
                            placeholder="100"
                            value={formValues.invitados}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>{formErrors.invitados}</p>
            
                    <center>
                        <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                        <Button type="submit">Comprobar</Button>
                    </center>
                </form>
            </Modal.Body>

            <Modal2
                show={modalTwoShow}
                onHide={() => setModalTwoShow(false)}
            />

        </Modal>
    );
}

function Modal2(props) {

    const initialValues = { email: "", password: "" };
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
        if (!values.email) {
            errors.email = "¡Necesitas ingresar el Email!";
        } else if (!regex.test(values.email)) {
            errors.email = "Formato de correo no valido";
        }
        if (!values.password) {
            errors.password = "¡Necesitas ingresar la contraseña!";
        }
        return errors;
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Realiza tu pago
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div>
                        <center>
                            <h3 id='SuccessMessage'>¡Pago Exitoso!</h3>
                            <Button variant="success" type="submit" onClick={props.onHide}>Cerrar</Button>
                        </center>
                    </div>
                ) : (
                    <div></div>
                )}
                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                    <center>
                            <img src={Paypal} alt="Paypal banner" id='PaypalImg'/>
                        </center>
                    </Form.Group>

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
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>{formErrors.password}</p>
            
                    <center>
                        <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                        <Button type="submit">Pagar</Button>
                    </center>
                </form>
            </Modal.Body>
        </Modal>
    );
}

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {

    const [modalOneShow, setModalOneShow] = React.useState(false);

    return (
        <div>
            <div className='searchResult' onClick={() => setModalOneShow(true)}>
                <img src={img} alt="" />
                <FavoriteBorderIcon className="searchResult__heart" />

                <div className='searchResult__info'>
                    <div className="searchResult__infoTop">
                        <p>{location}</p>
                        <h3>{title}</h3>
                        <p>____</p>
                        <p>{description}</p>
                    </div>

                    <div className="searchResult__infoBottom">
                        <div className="searchResult__stars">
                            <StarIcon className="searchResult__star" />
                            <p>
                                <strong>{star}</strong>
                            </p>
                        </div>
                        <div className='searchResults__price'>
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal1
                show={modalOneShow}
                onHide={() => setModalOneShow(false)}
            />

        </div>
    )
}

export default SearchResult
