import React, { Component } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap';
import CardForSlider from './CardForSlider';

export class Slider extends Component {
  render() {
    return (
       <div>
            <div className="w-100 mx-auto">
                <Carousel style={{"height":"450px", "width":"100%"}}>
                {this.props.gamesList.map(el =>(                   
                    <Carousel.Item >                        
                        <Row className="mt-4 mx-auto w-75 gx-3">                                                        
                            <Col>
                                <CardForSlider game={el}/>
                            </Col>                                                                                    
                        </Row>
                    </Carousel.Item>
                    ))}                    
                </Carousel> 
            </div>            
        </div>
    )
  }
}

export default Slider




