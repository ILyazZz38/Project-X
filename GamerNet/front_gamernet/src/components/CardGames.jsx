import React, { Component } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { GiSevenPointedStar } from "react-icons/gi"
import { NavLink } from 'react-router-dom'

class CardGames extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div  className=' img-hover-scale'>
                <NavLink to="../Game" className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'} onClick={() =>this.props.onGamePage(this.props.game)}>
                    <div  style={{"position": "relative"}}>
                        <img
                            className="rounded shadow cursor-pointer"
                            src={this.props.game.capture.url}
                            style={{"width":"300px", "height":"180px"}}
                            />
                        <div className="bg-black rounded bg-opacity-75" 
                            style={{"position": "absolute","left": "0","top": "0", "width": "300px"}} >
                            <h6 className="p-1 text-center mt-1 mx-5"                     
                            >
                            {this.props.game.name}
                            </h6>
                        </div>
                        <div className="m-1 sizing-div" 
                            style={{"position": "absolute","top": "0", "left": "0","bottom": "0"}} >
                                                    
                                <GiSevenPointedStar className="star-for-rating"/>
                                <p className="star-for-rating-text">
                                    1
                                </p>                        
                            
                        </div>
                    </div>
                </NavLink>       
            </div>
        )
    }
    
  }

export default CardGames;
    

