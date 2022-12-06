import React, { useState } from 'react';
import {Nav, Navbar, Button, Modal, Form, Col} from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const Navibar = () => {
    
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [cemail, setEmail] = useState("");
    const [cpassword, setPassword] = useState("");
    const [cname, setName] = useState("");
    const [authuser, setAuthuser] = useState(false)

    const handleClose = () => {setShow(false);setShow2(true)};
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow(false);    
    const handleClose2 = () => setShow2(false);
    const setemail = (mail) => setEmail(mail.target.value);
    const setpassword = (pas) => setPassword(pas.target.value);
    const setname = (name) => setName(name.target.value);

    const registeruser = async() => {
        if (cemail.length > 0 && cpassword.length > 0 && cname.length > 0)
        {
            const reg = await fetch("https://localhost:5001/api/Authenticate/register", {
                method: "POST",
                headers: {"accept": "*/*", "Content-Type": "application/json"},
                body: JSON.stringify({
                    username : cname,
                    email : cemail,
                    password : cpassword,
                }),
            })
            if (reg.ok === true) {
                const data = await reg.json()
                console.log(data);
                alert("Регистрация прошла успешно");
                setShow2(false);
            } else {
                const errorMessage = await reg.json();
                console.log("Ошибка:", errorMessage);
                alert("Ошибка, что-то пошле не так")
            }
        }
        else {
            alert("Заполните все поля!")
        }
    };

    const authorizatuser = async() => {
        if (cname.length > 0 && cpassword.length > 0)
        {
            const auth = await fetch("https://localhost:5001/api/Authenticate/login", {
                method: "POST",
                headers: {"accept": "*/*", "Content-Type": "application/json"},
                body: JSON.stringify({
                    username : cname,
                    password : cpassword,
                }),
            })
            if (auth.ok === true) {
                const data = await auth.json()
                localStorage.setItem("token", data.token);
                console.log(data);
                setShow (false);                 
            } else {
                const errorMessage = await auth.json();
                console.log("errors", errorMessage);
                alert("Неверный логин или пароль")
            }
        }
        else{
            alert("Заполните все поля!")
        }
    }

    const AuthLogin = async () => {
        const  token = localStorage.getItem("token");
        const res = await fetch("https://localhost:5001/api/Authenticate", {
            method: "GET",
            headers: {
                "accept":"text/plain",
                "Authorization": "Bearer " + token,
            }
        })
        if (res.ok != true) {
            const Iduser = res;
            setAuthuser(false)
        } else {
            setAuthuser(true)
        }
    }

    function NoAuthButton() {
        return <Button variant="outline-light" className="me-5" onClick={handleShow}>Войти</Button>;
    }
    function AuthButton() {
        return <>            
            <NavLink to="Profile" className="account-navlink-navibar">
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className="account-img-navibar"/>  
            </NavLink>            
        </>;
    }

    const AuthNoAuth = () => {
        AuthLogin()
        const user = authuser
        if (user == true) {
            return <AuthButton/>
        }
        else {
            return <NoAuthButton/>
        }
    }
    function cleatToken() {        
        localStorage.clear("token");
        window.location.reload();
    }


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
                        <AuthNoAuth/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Outlet/>

            <Modal show={show} onHide={handleClose1} className="modal-window-mardin">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-aut-text-centre">Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicLogin">
                            <Form.Label>Login/Никнейм</Form.Label>
                            <Form.Control type="login" value={cname} onChange={setname} placeholder="Введите логин"/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword" className="mt-3">
                            <Form.Label>Password/Пароль</Form.Label>
                            <Form.Control type="password" value={cpassword} onChange={setpassword} placeholder="Введите пароль"/>                          
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <p className="no-account" onClick={handleClose}>У меня нет аккаунта!</p>
                            <Button variant="dark" className="modal-avt-button-centre" onClick={authorizatuser}>Войти</Button>                      
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2} className="modal-window-mardin">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-aut-text-centre">Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Электранная почта</Form.Label>
                            <Form.Control type="email" value={cemail} onChange={setemail} placeholder="Введите почту"/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicLogin" className="mt-3">
                            <Form.Label>Login/Никнейм</Form.Label>
                            <Form.Control type="login" value={cname} onChange={setname} placeholder="Введите логин"/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword" className="mt-3">
                            <Form.Label>Password/Пароль</Form.Label>
                            <Form.Control type="password" value={cpassword} onChange={setpassword} placeholder="Введите пароль"/>
                            <Form.Text className="text-muted">Пароль должен состоять минимум из 8 символов и  содержать 1 из знаков !"№;%:?*</Form.Text>                            
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Button variant="dark" className="modal-reg-button-centre" onClick={registeruser}>Зарегистрироваться</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
    
}
export default Navibar;