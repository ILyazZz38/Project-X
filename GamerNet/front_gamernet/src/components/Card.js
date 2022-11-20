import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
        <div>
            <div  style={{"position": "relative"}}>
                <img
                    className="rounded shadow"
                    src={this.props.game.img}
                    style={{"width":"400px", "height":"250px"}}                                
                    />
                <div>
                    
                </div>
                <div className="bg-black rounded bg-opacity-75 " 
                    style={{"position": "absolute","left": "0","top": "0", "width": "400px"}} >
                    <h4 className="p-1 text-center"                     
                     >
                     {this.props.game.name}
                    </h4>
                </div>
            </div>     
        </div>
    )
  }
}

export default Card
    

