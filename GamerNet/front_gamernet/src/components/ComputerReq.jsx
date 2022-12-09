import React, { useState } from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import { AiFillSetting } from "react-icons/ai"

const ComputerReq = (props) => {

    const [authuser, setAuthuser] = useState(false)
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show);
    const [Cpu, setCpu] = useState([])
    const [Card, setCard] = useState([])

    const AuthLogin = () => {
        const  token = localStorage.getItem("token");
        const res = fetch("https://localhost:5001/api/Authenticate", {
            method: "GET",
            headers: {
                "accept":"text/plain",
                "Authorization": "Bearer " + token,
            }
        })
        if (res.ok != true) {
            setAuthuser(false)
        } else {
            setAuthuser(true)
        }
    }

    const GetCPU = () => {
        const res = fetch("https://localhost:7150/api/Processors", {
        method: "GET",
        headers: {
            "accept":"text/json"
        }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .then((data) => {
            setCpu(data);
            console.log("DATACPU STORED");
        })
        .catch((error) => {
            console.log('error: ' + error);
        });
    }
    const GetCARD = () => {
        const res = fetch("https://localhost:7150/api/Processors", {
        method: "GET",
        headers: {
            "accept":"text/json"
        }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .then((data) => {
            setCard(data);
            console.log("DATACPU STORED");
        })
        .catch((error) => {
            console.log('error: ' + error);
        });
    }

    function Autuser() {
        return (
            <>
                <Row>
                    <div className="computerReq-autuser-row">
                        <Button variant="outline-light" className="me-5 w-25">Сравнить с моим ПК</Button>
                        <AiFillSetting className="settings-img-button" onClick={handleShow}/>
                    </div>                    
                </Row>               
            </>
        )
    }

    function Noautuser(props) {
        const ram = props.ramItem
        const Cpu = props.Cpu
        const Card = props.Card
        return (
            <>
                <Row>
                    <h4 className="mt-2 mb-2">Ваша система:</h4>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" placeholder="Процессор">
                            <option value="1">-</option>
                                {/* {Cpu.map(el=>(
                                    <option value={el.id}> {el.name}</option>
                                ))} */}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Процессор</label>
                        </div>
                    </Col>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" placeholder="Видеокарта">
                                <option value="1">-</option>
                                {/* {Card.map(el=>(
                                    <option value={el.id}>{el.name}</option>
                                ))} */}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Видеокарта</label>
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div class="form-floating mb-3 shadow">                    
                        <select class="form-select" id="formGroupExampleInputO">
                        <option value="1">-</option>
                        {ram.map(el=>(
                            <option value={el.id}>{el.number} ГБ</option>
                        ))}
                        </select>
                        <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                        </div>
                    </Col>
                </Row>
                <Button variant="outline-light" className="button-check-pc">Сравнить</Button>
            </>
        )
    }
    const AuthNoAuth = (props) => {
        AuthLogin()
        GetCPU()
        GetCARD()
        const user = authuser
        if (user == true) {
            return <Autuser/>
        }
        else {
            return <Noautuser ramItem = {props.ramItem}/>
        }
    }
    const SetPC = (props) => {
        const ram = props.ramItem
        const Cpu = props.Cpu
        const Card = props.Card
        if (show == true) {
            return (
                <>
                    <h4 className="mt-2 mb-2">Ваша система:</h4>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" placeholder="Процессор">
                            <option value="1">-</option>
                                {/* {Cpu.map(el=>(
                                    <option value={el.id}> {el.name}</option>
                                ))} */}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Процессор</label>
                        </div>
                    </Col>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" placeholder="Видеокарта">
                                <option value="1">-</option>
                                {/* {Card.map(el=>(
                                    <option value={el.id}>{el.name}</option>
                                ))} */}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Видеокарта</label>
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div class="form-floating mb-3 shadow">                    
                        <select class="form-select" id="formGroupExampleInputO">
                        <option value="1">-</option>
                        {/* {ram.map(el=>(
                            <option value={el.id}>{el.number} ГБ</option>
                        ))} */}
                        </select>
                        <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                        </div>
                    </Col>
                </>
            )
        }
        else {
            <Autuser/>
        }
    }
    
    return (
        <>
            <SetPC ramItem={props.ramItem} Cpu={Cpu} Card={Card}/>
            <AuthNoAuth ramItem={props.ramItem} Cpu={Cpu} Card={Card}/>
        </>
    )    
}

export default ComputerReq;