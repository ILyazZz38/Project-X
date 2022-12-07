import React from "react";
import { Col, Row } from 'react-bootstrap'
import {Component} from 'react';

class NormalComputerReq extends Component {
    constructor(props) {
      super(props);
      this.state = {
          processors: [],
          videocards: [],
          isLoggedIn: false
      };
    }

    componentDidMount() {
        this.getUserId();
        this.getProcessors();
        this.getvideocards();
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
            this.setState({ isLoggedIn: true });
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ isLoggedIn: false });
          });
    }

    getProcessors = async () => {
        const res = await fetch('https://localhost:7150/api/Processors', {
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
            this.setState({ processors: data });
            console.log("DATA STORED");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
    }

    getvideocards = async () => {
        const res = await fetch('https://localhost:7150/api/VideoCards', {
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
            this.setState({ videocards: data });
            console.log("DATA STORED");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let pc;

        if (isLoggedIn) {
            pc = <p>авторизован</p>
          } else {
            pc = <p>неавторизован</p>
          }
        return (
            <div>
                
        {pc}
            </div>
            )
        }
    }

export default NormalComputerReq;