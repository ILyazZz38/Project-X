import React, { useState } from 'react';
import {Nav, Navbar, Button, Modal, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Register from './registr';

export default function Navibar() {
    
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>GamerNet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/home">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/Games">Игры</Link></Nav.Link>
                        <Nav.Link><Link to="/Library">Подойдет ли игра?</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2" onClick={handleShow}>Войти</Button>
                        <Button variant="primary" className="mr-2" onClick={handleShow2}>Регистрация</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Register/>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicLogin">
                            <Form.Label>Никнейм/Login</Form.Label>
                            <Form.Control type="login" placeholder="Введите логин"/>
                            <Form.Text className="text-muted">Сюда что-нибудь можно написать</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Пароль/Password</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль"/>
                            <Form.Text className="text-muted">Пароль должен содержать ваш пароль</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" className="mr-2" onClick={handleShow2}>Зарегистрироваться</Button>
                            <Button variant="primary" onClick={handleClose}>Войти</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
    
}