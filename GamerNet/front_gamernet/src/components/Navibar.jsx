import React, { Component } from 'react';
import {Nav, Navbar, Button, Modal, Form, Row, Col} from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

class Navibar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: false,
            cemail: "",
            cpassword: "",
            cname: "",
            isLoggedIn: false
        };
        this.setShowOpen = this.setShowOpen.bind(this)
        this.setShowClose = this.setShowClose.bind(this)
        this.setShow2CloseShow = this.setShow2CloseShow.bind(this)
        this.setShow2Open = this.setShow2Open.bind(this)
        this.setShow2Close = this.setShow2Close.bind(this)
    }

    setemail(mail)  {
        this.setState({cemail: mail})
    }
    setpassword(pas) {
        this.setState({cpassword: pas})
    }
    setname(name) {
        this.setState({cname: name})
    }

    setShowOpen()  {
        this.setState({show: true})
    }
    setShowClose()  {
        this.setState({show: false})
    }
    setShow2CloseShow() {
        this.setState({show: false});
        this.setState({show2: true});
    }
    setShow2Open()  {
        this.setState({show2: true})
    }
    setShow2Close()  {
        this.setState({show2: false})
    }

    componentDidMount() {
        this.AuthLogin();
    }

    AuthLogin = async () => {
        const  token = localStorage.getItem("token");
        const res = await fetch("https://localhost:5001/api/Authenticate", {
            method: "GET",
            headers: {
                "accept":"text/plain",
                "Authorization": "Bearer " + token,
            }
        })
        if(res.ok === true) {
            this.setState({ isLoggedIn: true });
        } 
        else  {
            this.setState({ isLoggedIn: false });
        }
    }


    registeruser = async() => {
        if (this.state.cemail.length > 0 && 
            this.state.cpassword.length > 0 &&
            this.state.cname.length > 0)
        {
            const reg = await fetch("https://localhost:5001/api/Authenticate/register", {
                method: "POST",
                headers: {"accept": "*/*", "Content-Type": "application/json"},
                body: JSON.stringify({
                    username : this.state.cname,
                    email : this.state.cemail,
                    password : this.state.cpassword,
                }),
            })
            if (reg.ok === true) {
                const data = await reg.json()
                console.log(data);
                alert("Регистрация прошла успешно");
                this.setState({show2: false});
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

    authorizatuser = async() => {
        if (this.state.cname.length > 0 &&
            this.state.cpassword.length > 0)
        {
            const auth = await fetch("https://localhost:5001/api/Authenticate/login", {
                method: "POST",
                headers: {"accept": "*/*", "Content-Type": "application/json"},
                body: JSON.stringify({
                    username : this.state.cname,
                    password : this.state.cpassword,
                }),
            })
            if (auth.ok === true) {
                const data = await auth.json()
                localStorage.setItem("token", data.token);
                console.log(data);
                this.setState({show: false});
                window.location.reload();               
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
    

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let UserButton;

        if (isLoggedIn) {
            UserButton =   
            <div className="div-navlink-text-img">
                <NavLink to="Profile" className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'}>
                    <table>
                        <tr>
                            <td className="size-td-for-img">
                                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className="account-img-navibar"/>
                            </td>
                            <td>
                                <h5 className="size-td-for-text">Профиль</h5>
                            </td>
                        </tr>
                    </table>
                </NavLink>
            </div> 
            
        } 
        else {
            UserButton = <Button variant="outline-light" className="me-5" onClick={this.setShowOpen}>Войти</Button>
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
                            <div>{UserButton}</div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    
                <Outlet/>
    
                <Modal show={this.state.show} onHide={this.setShowClose} className="modal-window-mardin">
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-aut-text-centre">Авторизация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="fromBasicLogin">
                                <Form.Label>Login/Никнейм</Form.Label>
                                <Form.Control type="login" value={this.state.cname} onChange={(text) => this.setname(text.target.value)} placeholder="Введите логин"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassword" className="mt-3">
                                <Form.Label>Password/Пароль</Form.Label>
                                <Form.Control type="password" value={this.state.cpassword} onChange={(text) => this.setpassword(text.target.value)} placeholder="Введите пароль"/>                          
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <p className="no-account" onClick={this.setShow2CloseShow}>У меня нет аккаунта!</p>
                                <Button variant="dark" className="modal-avt-button-centre" onClick={this.authorizatuser}>Войти</Button>                      
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
    
                <Modal show={this.state.show2} onHide={this.setShow2Close} className="modal-window-mardin">
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-aut-text-centre">Регистрация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Электранная почта</Form.Label>
                                <Form.Control type="email" value={this.state.cemail} onChange={(text) => this.setemail(text.target.value)} placeholder="Введите почту"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicLogin" className="mt-3">
                                <Form.Label>Login/Никнейм</Form.Label>
                                <Form.Control type="login" value={this.state.cname} onChange={(text) => this.setname(text.target.value)} placeholder="Введите логин"/>
                                <Form.Text className="text-muted">Логин должен состоять минимум из 8 символов A-Z</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassword" className="mt-3">
                                <Form.Label>Password/Пароль</Form.Label>
                                <Form.Control type="password" value={this.state.cpassword} onChange={(text) => this.setpassword(text.target.value)} placeholder="Введите пароль"/>
                                <Form.Text className="text-muted">Пароль должен состоять минимум из 8 символов и  содержать 1 из знаков !"№;%:?*</Form.Text>                            
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Button variant="dark" className="modal-reg-button-centre" onClick={this.registeruser}>Зарегистрироваться</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
    
}
export default Navibar;