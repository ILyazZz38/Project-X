import React from "react";
import { Col, Button, Row } from 'react-bootstrap'
import { AiFillSetting } from "react-icons/ai"
import {Component} from 'react';

class NormalComputerReq extends Component {
    constructor(props) {
      super(props);
      this.state = {
          processors: [],
          videocards: [],
          Min: [],
          Max: [],
          isLoggedIn: false,
          show: false,
          setProcessor: "",
          setVideocard: "",
          setRAM: ""
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
            console.log("Пользователь авторизован");
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
            console.log("Процессоры получены");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
          if (this.state.processors == undefined){
            this.getProcessors()
          }
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
            console.log("Видеокарты получены");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
          if (this.state.videocards == undefined){
            this.getvideocards()
          }
    }

    setprocessor(processor)  {
        this.setState({setProcessor: processor})
    }
    setvideocard(videocard) {
        this.setState({setVideocard: videocard})
    }
    setram(ram) {
        this.setState({setRAM: ram})
    }

    getminimal = async (gameId,videocard,processor,pcram) => {
        const res = await fetch(`https://localhost:7150/api/MinRequirements/${gameId}?cardID=${videocard}&processorID=${processor}&ram=${pcram}`, {
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
            this.setState({ Min: data });
            console.log("Минималки получены");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
          if(this.state.Min != undefined){
            this.getmaximal(gameId,videocard,processor,pcram)
          }
          else{
            this.getminimal()
          }
    }

    getmaximal = async (gameId,videocard,processor,pcram) => {
        const res = await fetch(`https://localhost:7150/api/MaxRequirements/${gameId}?cardID=${videocard}&processorID=${processor}&ram=${pcram}`, {
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
            this.setState({ Max: data });
            console.log("Максималки получены");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let pc;
        let aut;

        if (isLoggedIn) {
            aut = <Row>
            <div className="computerReq-autuser-row">
                <Button variant="outline-light" className="me-5 w-25" onClick = {() => this.getminimal(this.props.gameId,this.props.videocard.id,this.props.processor.id,this.props.pcram)}>Сравнить с моим ПК</Button>
            </div>                    
        </Row>  
          } else {
            pc = <>
            <h4 className="mt-2 mb-2">Данные компьютера:</h4>
            <Col>
                <div class="form-floating mb-3 shadow">
                <select class="form-select" id="formGroupExampleInputO" value={this.state.setProcessor} onChange={(text) => this.setprocessor(text.target.value)} placeholder="Процессор">
                        {this.state.processors.map(el=>(
                            <option value={el.id}> {el.name}</option>
                        ))}
                    </select>
                    <label for="formGroupExampleInputO" className="text-color-dark">Процессор</label>
                </div>
            </Col>
            <Col>
                <div class="form-floating mb-3 shadow">
                <select class="form-select" id="formGroupExampleInputO" value={this.state.setVideocard} onChange={(text) => this.setvideocard(text.target.value)} placeholder="Видеокарта">
                        {this.state.videocards.map(el=>(
                            <option value={el.id}>{el.name}</option>
                        ))}
                    </select>
                    <label for="formGroupExampleInputO" className="text-color-dark">Видеокарта</label>
                </div>
            </Col>
            <Col className="col-3">
                <div class="form-floating mb-3 shadow">                    
                <select class="form-select" id="formGroupExampleInputO" value={this.state.setRAM} onChange={(text) => this.setram(text.target.value)} placeholder="Оперативная память">
                {this.props.ramItem.map(el=>(
                    <option value={el.number}>{el.number} ГБ</option>
                ))}
                </select>
                <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                </div>
            </Col>
        </>
            aut = <Row>
            <div className="computerReq-autuser-row">
                <Button variant="outline-light" className="me-5 w-25" onClick = {() => this.getminimal(this.props.gameId,this.state.setVideocard,this.state.setProcessor,this.state.setRAM)}>Сравнить по выбранным характеристикам</Button>
            </div>                    
        </Row>  
          }
        return (
            <div>
            {pc}
            {aut}
            </div>
            )
        }
    }

export default NormalComputerReq;