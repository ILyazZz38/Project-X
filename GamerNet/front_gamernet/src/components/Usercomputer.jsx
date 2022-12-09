import React from "react";
import { Button, Col, Row } from 'react-bootstrap'
import { AiFillSetting } from "react-icons/ai"
import {Component} from 'react';

class Usercomputer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          processors: [],
          videocards: [],
          pcsetting: false,
          setProcessor: "",
          setVideocard: "",
          setRAM: ""
      };
      this.onPCsetting = this.onPCsetting.bind(this)
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

    componentDidMount() {
        this.getProcessors();
        this.getvideocards();
    }

    onPCsetting() {
        this.setState({pcsetting :!this.state.pcsetting})
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
            console.log("База процессоров загружена");
          })
          .catch((error) => {
            console.log('Ошибка загрузки базы процессоров: ' + error);
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
            console.log("База видеокарт загружена");
        })
        .catch((error) => {
            console.log('Ошибка загрузки базы видеокарт: ' + error);
            this.setState({ requestFailed: true });
        });
    }

    putPCsetting = async() => {
        if (this.state.setProcessor.length > 0 && 
            this.state.setVideocard.length > 0 &&
            this.state.setRAM.length > 0)
        {
            const res = await fetch(`https://localhost:7150/api/Computers/${this.props.userPCId}`, {
                method: "PUT",
                headers: {
                    "accept": "*/*",
                    "Content-Type":"application/json"                
                },
                body: JSON.stringify({
                    id : this.props.userPCId,
                    processorId : this.state.setProcessor,
                    videoCardId : this.state.setVideocard,
                    ram: this.state.setRAM
                }),
            })
            if (res.ok === true) {
                alert("Данные о вашем ПК успешно изменены");
            } 
            else {
                alert("Ошибка, что-то пошле не так")
            }
        }
        else {
            alert("Заполните все поля!")
        }
    };

    render(){
        const pcsetting = this.state.pcsetting;
        let pc;

        if (pcsetting === false) {
            pc = <div className="div-block-usercomputer">
                    <div className="div-wrapper-usercomputer">
                        <h3 className="text-align">КОМПЛЕКТУЮЩИЕ ВАШЕГО ПК</h3>
                        <Col>
                            <div class="form-floating mb-3 shadow">
                                <select class="form-select" id="formGroupExampleInputO" placeholder="Процессор" disabled>
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
                                <select class="form-select" id="formGroupExampleInputO" placeholder="Видеокарта" disabled>
                                    <option selected>{this.props.videocard.name}</option>
                                    {this.state.videocards.map(el=>(
                                        <option value={el.id}>{el.name}</option>
                                    ))}
                                </select>
                                <label for="formGroupExampleInputO" className="text-color-dark">Видеокарта</label>
                            </div>
                        </Col>
                        <Col>
                            <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" disabled>
                            <option selected>{this.props.pcram}</option>
                            {this.props.ram.map(el=>(
                                <option value={el.id}>{el.number} ГБ</option>
                            ))}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                            </div>
                        </Col>
                    </div>
                    <AiFillSetting className="settings-img-button-account-page" onClick={this.onPCsetting}/> 
                </div>
          } else {
            pc = <div className="div-block-usercomputer">
                    <div className="div-wrapper-usercomputer">
                        <h3 className="text-align">КОМПЛЕКТУЮЩИЕ ВАШЕГО ПК</h3>
                        <Col>
                            <div class="form-floating mb-3 shadow">
                                <select class="form-select" id="formGroupExampleInputO" value={this.state.setProcessor} onChange={(text) => this.setprocessor(text.target.value)} placeholder="Процессор">
                                <option selected>Выберите процессор</option>
                                    {this.state.processors.map(el=>(
                                        <option value={el.id}>{el.name}</option>
                                    ))}
                                </select>
                                <label for="formGroupExampleInputO" className="text-color-dark">Процессор</label>
                            </div>
                        </Col>
                        <Col>
                            <div class="form-floating mb-3 shadow">
                                <select class="form-select" id="formGroupExampleInputO" value={this.state.setVideocard} onChange={(text) => this.setvideocard(text.target.value)} placeholder="Видеокарта">
                                    <option selected>Выберите видеокарту</option>
                                    {this.state.videocards.map(el=>(
                                        <option value={el.id}>{el.name}</option>
                                    ))}
                                </select>
                                <label for="formGroupExampleInputO" className="text-color-dark">Видеокарта</label>
                            </div>
                        </Col>
                        <Col>
                            <div class="form-floating mb-3 shadow">
                            <select class="form-select" id="formGroupExampleInputO" value={this.state.setRAM} onChange={(text) => this.setram(text.target.value)} placeholder="Оперативная память">
                            <option selected>Выберите ОЗУ</option>
                            {this.props.ram.map(el=>(
                                <option value={el.number}>{el.number} ГБ</option>
                            ))}
                            </select>
                            <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                            </div>
                        </Col>
                    </div>
                    <Button className="button-usercomputer-save-setting" variant="outline-light" onClick={this.putPCsetting}>Сохранить изменения</Button>
                    <AiFillSetting className="settings-img-button-account-page" onClick={this.onPCsetting}/>
                </div>
          }
        return (
            <>
                {pc}
            </>
        )
    }
}
export default Usercomputer;