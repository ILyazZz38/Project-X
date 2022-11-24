import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export class RequirementsTabl extends Component {
  render() {
    return (
      <div>
        <Row className="tabl-for-requirements">
            <Col className="tabl-for-minrequirements bg-light bg-opacity-50 shadow">
                <div className="gamepage-will-fit-div">
                    <h5 className="gamepage-will-fit-text border-bottom-yes">Минимальные системные требования:</h5>
                </div>

                <Row className="gamepage-will-fit-text-row">
                    <Col className="col-3">
                        <p className="name-params-tabl">Процессор:</p>
                    </Col>                    

                    <Col>
                        <Row>
                        {this.props.requirements.cpu.map(el=>(
                        <Col className="">
                            <p>{el.name}</p> 
                        </Col>
                        ))}                                              
                        </Row>
                    </Col>
                </Row>

                <Row className="">
                    <Col className="col-3">
                        <p className="name-params-tabl">Видеокарта:</p>
                    </Col>
                    <Col>
                        <Row>
                        {this.props.requirements.videocards.map(el=>(
                        <Col className="">
                            <p>{el.name}</p> 
                        </Col>
                        ))}                                              
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="name-params-tabl">Оперативная память:</p>
                    </Col>
                    <Col className="margin-ram">
                        <p>{this.props.requirements.ram}</p>
                    </Col>
                </Row>
            </Col>

            <Col className="tabl-for-recrequirements bg-light bg-opacity-50 shadow">
                <div>
                    <h5 className="gamepage-will-fit-text border-bottom-yes">Рекомендуемые системные требования:</h5>
                </div>
                <Row className="gamepage-will-fit-text-row">
                    <Col className="col-3">
                        <p className="name-params-tabl">Процессор:</p>
                    </Col>                    

                    <Col>
                        <Row>
                        {this.props.recrements.cpu.map(el=>(
                        <Col className="">
                            <p>{el.name}</p> 
                        </Col>
                        ))}                                              
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-3">
                        <p className="name-params-tabl">Видеокарта:</p>
                    </Col>
                    <Col>
                        <Row>
                        {this.props.recrements.videocards.map(el=>(
                        <Col className="">
                            <p>{el.name}</p> 
                        </Col>
                        ))}                                              
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="name-params-tabl">Оперативная память:</p>
                    </Col>
                    <Col className="margin-ram">
                        <p>{this.props.recrements.ram}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
    )
  }
}

export default RequirementsTabl