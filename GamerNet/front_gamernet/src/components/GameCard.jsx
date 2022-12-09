import React, { Component } from "react";
import Card from "./Card";
import { Row, Col } from 'react-bootstrap';

class GameCard extends Component {

  render() {
    return (
      <div className="wrapper-GameCard">
        <Row className="pb-5 mt-4 w-100 gx-3">
        { this.props.games.map(game =>
          <Col className="m-3 col-4 mx-auto" style={{"width":"400px", "height":"250px"}}>
            <Card game={game} onGamePage={this.props.onGamePage}/>
          </Col>
        )}
      </Row>
      </div>
    );
  }
}
export default GameCard;