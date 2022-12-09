import React, { useState } from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import { AiFillSetting } from "react-icons/ai"
import Favoritegenres from '../components/Favoritegenres';
import Usercomputer from '../components/Usercomputer';
import {Component} from 'react';
import Userinfo from '../components/UserInfo';
import axios from "axios";

class ResponseData extends Component {
    constructor(props) {
      super(props);
      this.state = {
          user: [],
          pc: [],
          processor: [],
          videocard: []
      };
    }

    componentDidMount() {
        this.getUserId();       
    }

    getUserId = async () => {
        const  token = localStorage.getItem("token");
        const res = await fetch("https://localhost:5001/api/Authenticate", {
            method: "GET",
            headers: {
                "accept":"text/json",
                "Authorization": "Bearer " + token,
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
        .then((data) => {
            this.setState({ user: data });
        })
        .catch((error) => {
        console.log('Ошибка получения данных о пользователя: ' + error);
        this.setState({ requestFailed: true });
        })
        if (this.state.user.computerId != undefined) {
            this.getPC(this.state.user.computerId)
            console.log("Данные о пользователе загружены")
        }
        else {
            this.getUserId();
        }
    }

    getPC = async (pcid) => {
        const res = await fetch(`https://localhost:7150/api/Computers/${pcid}`, {
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
            this.setState({ pc: data });
        })
        .catch((error) => {
            console.log('Ошибка загрузки данных о ПК пользователя: ' + error);
            this.setState({ requestFailed: true });
        })
        if (this.state.pc.processorId != undefined) {
            this.getProcessor(this.state.pc.processorId)
            console.log("Данные о ПК пользователя загружены")
        }
        else {
            this.getPC(pcid);
        }
    }

    getProcessor = async (processorId) => {
        const res = await fetch(`https://localhost:7150/api/Processors/${processorId}`, {
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
            this.setState({ processor: data });
        })
        .catch((error) => {
            console.log('Ошибка загрузки данных о процессоре: ' + error);
            this.setState({ requestFailed: true });
        })
        if (this.state.processor.name != undefined) {
            this.getCard(this.state.pc.videoCardId)
            console.log("Процессоре пользователя загружен")
        }
        else {
            this.getProcessor(processorId);
        }
    }

    getCard = async (CardId) => {
        const res = await fetch(`https://localhost:7150/api/VideoCards/${CardId}`, {
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
            this.setState({ videocard: data });
        })
        .catch((error) => {
            console.log('Ошибка загрузки данных о видеокарте: ' + error);
            this.setState({ requestFailed: true });
        })
        if (this.state.videocard.name!= undefined) {
            console.log("Видео карта пользователя загружена")
        }
        else {
            this.getCard(CardId);
        }
    }    

    cleatToken() {        
        localStorage.clear("token");
        window.location.assign("https://localhost:3000/");
    }

    render() {
        return(
            <div className="accountpage-wrapper">  
            <Row>                
                <Col>
                    <Userinfo user = {this.state.user}/>
                </Col>
                <Col>
                    <Usercomputer ram = {this.props.ramItem}
                    processor = {this.state.processor}
                    videocard ={this.state.videocard}
                    pcram = {this.state.pc.ram}
                    userPCId={this.state.user.computerId}
                    />
                </Col>
                <Col>
                    <Favoritegenres userId={this.state.user.id}/>
                </Col>
            </Row>            
        </div>
        );
    }
}

class AccountPage extends Component {
    
 render() {
    return (
        <ResponseData ramItem = {this.props.ramItem}/>
    ) 
 }
      
}
export default AccountPage;