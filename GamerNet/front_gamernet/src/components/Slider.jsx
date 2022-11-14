import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

export default function Slider(props) {
    
    return (
        <div className="">
            <div className="w-100 mx-auto">
                <Carousel style={{"height":"450px", "width":"100%"}}>
                    {props.list.map((game) =>(                    
                        <Carousel.Item >
                            <Row className="mt-4 mx-auto w-75 gx-3">                            
                                <Col>
                                    <div style={{"position": "relative"}}>
                                        <img
                                            className="d-block w-100 rounded"
                                            src={game.img}
                                            style={{"width":"400px", "height":"350px"}}
                                        />
                                        <div style={{"position": "absolute","left": "0","top": "0", "width":"50%"}}
                                            className="m-3">
                                            <div className="bg-black rounded w-auto bg-opacity-75">
                                                <h5 className="mx-auto p-1"
                                                    >{game.name}
                                                </h5>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="bg-black rounded w-auto bg-opacity-75 m-3"
                                            style={{"position": "absolute","left": "0","bottom": "0"}}>
                                            <p class="text-center"
                                                className="m-2"
                                            >{game.discription}
                                            </p>
                                        </div>                                            
                                    </div>                                
                                </Col>
                                <Col>
                                    <div style={{"position": "relative"}}>
                                        <img
                                            className="d-block w-100 rounded"
                                            src={game.img}
                                            style={{"width":"400px", "height":"350px"}}
                                        />
                                        <div style={{"position": "absolute","left": "0","top": "0", "width":"50%"}}
                                            className="m-3">
                                            <div className="bg-black rounded w-auto bg-opacity-75">
                                                <h5 className="mx-auto p-1"
                                                    >{game.name}
                                                </h5>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-black rounded w-auto bg-opacity-75 m-3"
                                            style={{"position": "absolute","left": "0","bottom": "0"}}>
                                            <p class="text-center"
                                                className="m-2"
                                            >{game.discription}
                                            </p>
                                        </div>                                            
                                    </div>                               
                                </Col>                                                              
                            </Row>
                        </Carousel.Item>
                    ))}                    
                </Carousel> 
            </div>            
        </div>
            
    )
    
}