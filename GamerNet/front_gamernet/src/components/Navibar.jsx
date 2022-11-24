import React, { useState } from 'react';
import {Nav, Navbar, Button, Modal, Form,} from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const Navibar = () => {
    
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="ms-5">
                    <NavLink to="/" className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'}>
                        <h1 className="navbar-brand m-1">
                            <img src="https://cdn-icons-png.flaticon.com/512/7297/7297795.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top"                            
                            />
                            GamerNet
                        </h1>
                    </NavLink>                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/"className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'}>
                            <h5 className="navlink-homepage">Главная</h5>
                        </NavLink>
                        <NavLink to="Games" className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'}>
                            <h5 className="navlink-gamepage">Игры</h5>
                        </NavLink>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" className="me-5" onClick={handleShow}>Войти</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Outlet/>
            
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h1>Регистрация</h1>
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
                            <Button variant="primary" className="mx-5" onClick={handleClose}>Войти</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
    
}
export default Navibar;