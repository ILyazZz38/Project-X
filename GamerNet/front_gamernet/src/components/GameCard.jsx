import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function GameCard(props) {
    return(
        <Container className="">
            <Row className="pb-5 mt-5 w-100 gx-3">
                {props.list.map((item) =>(
                    <Col className="m-3 col-4"
                        style={{"width":"400px", "height":"250px"}}>

                        <div className=""
                            style={{"position": "relative"}}>

                            <img
                                className="rounded shadow"
                                src={item.img}
                                style={{"width":"400px", "height":"250px"}}                                
                                />
                            <div>
                                
                            </div>
                            <h4 className="ms-3 text-center"
                                style={{"position": "absolute","left": "0","top": "0","width": "100%"}}
                                >
                                {item.name}
                            </h4>
                            <p className="ms-3"
                                style={{"position": "absolute","left": "0","bottom": "0","width": "100%"}}>
                                {item.discription}
                            </p>
                        </div>                        
                    </Col>
                ))}
            </Row>
        </Container>        
    )
}