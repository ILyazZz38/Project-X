import React from 'react'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'
import { propTypes } from 'react-bootstrap/esm/Image'
import { GiSevenPointedStar } from "react-icons/gi"
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const CardGames = props => {

    const{
        game = {}
    } = props.game || {};

    return (
        <div  className=' img-hover-scale'>
            <NavLink to="../Game" className={({isActive}) => isActive? 'link-active-yes': 'link-active-no'} onClick={() =>props.onGamePage(props.game)}>
                <div  style={{"position": "relative"}}>
                    <img
                        className="rounded shadow cursor-pointer"
                        src={props.game.capture.url}
                        style={{"width":"300px", "height":"180px"}}
                        />
                    <div className="bg-black rounded bg-opacity-75" 
                        style={{"position": "absolute","left": "0","top": "0", "width": "300px"}} >
                        <h6 className="p-1 text-center mt-1 mx-5"                     
                        >
                        {props.game.name}
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

  CardGames.propTypes={
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        capture: PropTypes.shape({
            url: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
  };

export default CardGames;
    

