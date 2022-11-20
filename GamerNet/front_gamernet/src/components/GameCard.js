import React, { Component } from 'react'
import { Col, Row } from "react-bootstrap";
import Card from "./Card";

export class GameCard extends Component {
  render() {
    return (
      <div>
            <Row className="pb-5 mt-5 w-100 gx-3">
                {this.props.gamesList.map(el =>(
                    <Col className="m-3 col-4 mx-auto" style={{"width":"400px", "height":"250px"}}>
                        <Card game={el}/>
                    </Col>
                ))}
            </Row>
        </div> 
    )
  }
}

export default GameCard
