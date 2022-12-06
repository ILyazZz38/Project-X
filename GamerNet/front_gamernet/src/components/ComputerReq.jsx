import React, { useState } from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import { AiFillSetting } from "react-icons/ai"

const ComputerReq = (props) => {

    const [authuser, setAuthuser] = useState(false)
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show);

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
            setAuthuser(false)
        } else {
            setAuthuser(true)
        }
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
        return (
            <>
                <h4 className="mt-2 mb-2">Ваша система:</h4>
                <Col>
                    <div class="form-floating mb-3 shadow">
                    <input type="text" class="form-control" id="formGroupExampleInputP" placeholder="Процессор"/>
                    <label for="floatingInput" className="text-color-dark">Процессор</label>
                    </div>
                </Col>
                <Col>
                    <div class="form-floating mb-3 shadow">
                    <input type="text" class="form-control" id="formGroupExampleInputV" placeholder="Видеокарта"/>
                    <label for="formGroupExampleInputV" className="text-color-dark">Видеокарта</label>
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
            </>
        )
    }
    const AuthNoAuth = (props) => {
        AuthLogin()
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
        if (show == true) {
            return (
                <>
                    <h4 className="mt-2 mb-2">Ваша система:</h4>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                        <input type="text" class="form-control" id="formGroupExampleInputP" placeholder="Процессор"/>
                        <label for="floatingInput" className="text-color-dark">Процессор</label>
                        </div>
                    </Col>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                        <input type="text" class="form-control" id="formGroupExampleInputV" placeholder="Видеокарта"/>
                        <label for="formGroupExampleInputV" className="text-color-dark">Видеокарта</label>
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
                </>
            )
        }
        else {
            <Autuser/>
        }
    }

    setInterval(<SetPC ramItem={props.ramItem}/>, 1000);
    
    return (
        <>
            <SetPC ramItem={props.ramItem}/>
            <AuthNoAuth ramItem={props.ramItem}/>
        </>
    )    
}

export default ComputerReq;