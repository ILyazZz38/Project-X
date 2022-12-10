import React, { Component } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap';
import CardForSlider from './CardForSlider';

class Slider extends Component {
    
  render() {
    return (
       <div className="div-bg-img">
            <Carousel style={{"height":"420px"}}>
            {this.props.games.map(el =>(                   
                <Carousel.Item>                        
                    <Row className="mt-4 mx-auto gx-3">                                                        
                        <Col>
                            <CardForSlider game={el} onGamePage={this.props.onGamePage}/>
                        </Col>                                                                                    
                    </Row>
                </Carousel.Item>
                ))}                    
            </Carousel>           
        </div>
    )
  }
}

export default Slider




