import React from "react";
import { Col, Row } from 'react-bootstrap'
import {Component} from 'react';

class Usercomputer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          processors: [],
          videocards: []
      };
    }

    componentDidMount() {
        this.getProcessors();
        this.getvideocards();
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
        return (
            <div className="div-block-usercomputer">
                <div className="div-wrapper-usercomputer">
                    <p>КОМПЛЕКТУЮЩИЕ ВАШЕГО ПК</p>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" placeholder="Процессор">
                            <option selected>{this.props.processor.name}</option>
                                {this.state.processors.map(el=>(
                                    <option value={el.id}>{el.name}</option>
                                ))}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Процессор</label>
                        </div>
                    </Col>
                    <Col>
                        <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" placeholder="Видеокарта">
                                <option selected></option>
                                {this.state.videocards.map(el=>(
                                    <option value={el.id}>{el.name} ГБ</option>
                                ))}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Видеокарта</label>
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div class="form-floating mb-3 shadow">
                        <select class="form-select" id="formGroupExampleInputO">
                        <option selected></option>
                        {this.props.ram.map(el=>(
                            <option value={el.id}>{el.number} ГБ</option>
                        ))}
                        </select>
                        <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                        </div>
                    </Col>
                </div>            
            </div>
        )
    }
}
export default Usercomputer;