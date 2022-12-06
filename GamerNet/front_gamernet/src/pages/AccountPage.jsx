import React, { useState } from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import { AiFillSetting } from "react-icons/ai"
import Favoritegenres from '../components/Favoritegenres';
import Usercomputer from '../components/Usercomputer';

const AccountPage = (props) => {

    function cleatToken() {        
        localStorage.clear("token");
        window.location.assign("https://localhost:3000/");
    }
 return (
    <div className="accountpage-wrapper">  
        <Row>
            <Col>
                <Usercomputer/>
            </Col>
            <Col>
                <Favoritegenres/>
            </Col>
        </Row>
        <Button variant="outline-light" className="me-5" onClick={cleatToken}>Выйти</Button>
    </div>
 )   
}
export default AccountPage;