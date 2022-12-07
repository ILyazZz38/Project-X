import React from "react";
import { Col, Row } from 'react-bootstrap'
import {Component} from 'react';

class Userinfo extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render(){
        return (
            <div className="div-block-usercomputer">
                <div className="div-wrapper-usercomputer">
                    <p>Аккаунт</p>
                    <p>Никнейм: {this.props.user.userName}</p>
                    <p>Почта: {this.props.user.email}</p>
                    <p>Телефон: {this.props.user.phoneNumber}</p>
                </div>            
            </div>
        )
    }
}
export default Userinfo;