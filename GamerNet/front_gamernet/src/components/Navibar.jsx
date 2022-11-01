import React, { useState } from 'react';
import {Nav, Navbar, Button, Modal, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Navibar() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>GamerNet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/home">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/Games">Игры</Link></Nav.Link>
                        <Nav.Link><Link to="/Library">Библиотека</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2" onClick={handleShow}>Регистрация</Button>
                        <Button variant="primary" className="mr-2"onClick={handleShow}>Авторизация</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введите почту"/>
                            <Form.Text className="text-muted">Сюда что-нибудь можно написать</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль"/>
                            <Form.Text className="text-muted">Пароль должен содержать ваш пароль</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remeber me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
    
}