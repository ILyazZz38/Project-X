import React, { Component } from 'react'

export class CardForSlider extends Component {
  render() {
    return (
        <div>
            <div style={{"position": "relative"}}>
                <img
                    className="d-block w-100 rounded"
                    src={this.props.game.img}
                    style={{"width":"400px", "height":"350px"}}
                />

                <div style={{"position": "absolute","left": "0","top": "0", "width":"auto","max-width": "50%"}}
                    className="m-3">
                    <div className="bg-black rounded w-auto bg-opacity-75">
                        <h5 className="mx-auto p-1"
                            >{this.props.game.name}
                        </h5>
                    </div>
                </div>            
                
                <div className="bg-black rounded w-auto bg-opacity-75 m-3"
                    style={{"position": "absolute","left": "0","bottom": "0", "max-width": "80%"}}>
                    <p class="text-center"
                        className="m-2"
                    >{this.props.game.discription}
                    </p>
                </div>                                           
            </div>
        </div>
        
    )
  }
}

export default CardForSlider