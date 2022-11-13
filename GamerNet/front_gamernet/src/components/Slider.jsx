import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

export default function Slider() {
    
    return (
        <div className="">
            <div className="w-100 mx-auto">
                <Carousel style={{"height":"450px", "width":"100%"}}>            
                    <Carousel.Item >
                        <Row className="mt-5 mx-auto w-75 gx-3">
                            <Col>
                                <div>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://css-pro.ru/_ld/101/10184.jpg"
                                        alt="Тут должен быть первый слайд"
                                        style={{"width":"400px", "height":"250px"}}
                                    />
                                    <h4 class="text-center">Название игры</h4>
                                    <p class="text-center">Описание игры</p>
                                </div>                                
                            </Col>
                            <Col>
                                <div>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg"
                                        alt="Тут должен быть первый слайд"
                                        style={{"width":"400px", "height":"250px"}}
                                    />
                                    <h4 class="text-center">Counter-Strike: Source</h4>
                                    <p class="text-center">Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://difmark.com/images/product/2/2/22002/the-surge-2-ps4_orig_6.jpg"
                                        alt="Тут должен быть первый слайд"
                                        style={{"width":"400px", "height":"250px"}}
                                    />
                                    <h4 class="text-center">Counter-Strike: Source</h4>
                                    <p class="text-center">Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>                            
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="mt-5 mx-auto w-75 gx-3">
                            <Col>
                                <div>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://www.mmohelper.ru/wp-content/uploads/2020/07/1-far-cry-3-odna-iz-naibolee-uspeshnyh-chastey-v-serii.jpg"
                                        alt="Тут должен быть первый слайд"
                                        style={{"width":"400px", "height":"250px"}}
                                    />
                                    <h4 class="text-center">Counter-Strike: Source</h4>
                                    <p class="text-center">Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>                                                    
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://www.digiseller.ru/preview/853650/p1_2892346_d124c856.jpeg"
                                        alt="Тут должен быть первый слайд"
                                        style={{"width":"400px", "height":"250px"}}
                                    />
                                    <h4 class="text-center">Counter-Strike: Source</h4>
                                    <p class="text-center">Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img
                                        className="d-block w-100 rounded"
                                        src="https://difmark.com/images/product/4/1/14527/trials-rising-pc_orig_5.jpg"
                                        alt="Тут должен быть первый слайд"
                                        style={{"width":"400px", "height":"250px"}}
                                    />
                                    <h4 class="text-center">Counter-Strike: Source</h4>
                                    <p class="text-center">Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel> 
            </div>            
        </div>
            
    )
    
}