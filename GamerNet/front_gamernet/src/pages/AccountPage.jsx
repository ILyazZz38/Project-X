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
            console.log("DATA STORED");
            this.getPC(this.state.user.computerId);
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
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
            console.log("DATA STORED");
            this.getPeocessor(this.state.pc.processorId)
            this.getCard(this.state.pc.videoCardId)
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
    }

    getPeocessor = async (processorId) => {
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
            console.log("DATA STORED");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
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
            console.log("DATA STORED");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
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
                    <Usercomputer ram = {this.props.ramItem} processor = {this.state.processor} videocard ={this.state.videocard} pcram = {this.state.pc.ram}/>
                </Col>
                <Col>
                    <Userinfo user = {this.state.user}/>
                </Col>
                <Col>
                    <Favoritegenres/>
                </Col>
            </Row>
            <Button variant="outline-light" className="me-5" onClick={this.cleatToken}>Выйти</Button>
            <p>{this.state.user.userName}</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.phoneNumber}</p>
        </div>
        );
    }
}

const AccountPage = (props) => {
    
 return (
    <ResponseData ramItem = {props.ramItem}/>
 )   
}
export default AccountPage;