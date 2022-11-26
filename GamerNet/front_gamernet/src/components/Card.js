import React, { Component } from 'react'
import { GiSevenPointedStar } from "react-icons/gi"
import { NavLink } from 'react-router-dom'

export class Card extends Component {
    
  render() {
    return (
        <div  className=' img-hover-scale'>
            <NavLink to="../Game" className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'}>
                <div  style={{"position": "relative"}}>
                    <img
                        className="rounded shadow cursor-pointer"
                        src={this.props.game.img}
                        style={{"width":"400px", "height":"250px"}}
                        onClick={() =>
                        this.props.onGamePage(this.props.game)}
                        />
                    <div className="bg-black rounded bg-opacity-75" 
                        style={{"position": "absolute","left": "0","top": "0", "width": "400px"}} >
                        <h4 className="p-1 text-center mt-1 mx-5"                     
                        >
                        {this.props.game.name}
                        </h4>
                    </div>
                    <div className="m-2 sizing-div" 
                        style={{"position": "absolute","top": "0", "left": "0","bottom": "0"}} >
                                                
                            <GiSevenPointedStar className="star-for-rating"/>
                            <p className="star-for-rating-text">
                                {this.props.game.rating}
                            </p>                        
                        
                    </div>
                </div> 
            </NavLink>
               
        </div>
    )
  }  
}

export default Card
    

