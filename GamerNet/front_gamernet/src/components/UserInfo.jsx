import React from "react";
import { Col, Row } from 'react-bootstrap'
import { ImExit } from "react-icons/im"
import {Component} from 'react';

class Userinfo extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    cleatToken() {        
        localStorage.clear("token");
        window.location.assign("https://localhost:3000/");
    }


    render(){
        return (
            <div className="div-block-userinfo">
                <div className="div-wrapper-userinfo">
                    <h1>{this.props.user.userName}</h1>
                    <Row>
                        <Col>
                        <img src="https://coolsen.ru/wp-content/uploads/2022/02/68-20220208_184839.jpg"
                            className="img-account-page"
                        />
                        </Col>
                        <Col>
                            <h6>Почта: <p>{this.props.user.email}</p></h6>
                            <h6>Телефон: <p>{this.props.user.phoneNumber}</p></h6>
                        </Col>
                    </Row>
                </div>
                <ImExit className="img-exit-account-page" onClick={this.cleatToken}/>            
            </div>
            
        )
    }
}
export default Userinfo;