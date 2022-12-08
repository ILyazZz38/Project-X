import React, { Component } from 'react'

export class CardForSlider extends Component {
  render() {
    return (
        <div className="img-hover-scale">
            <div style={{"position": "relative"}}>
                
                
                <img
                className="d-block w-75 rounded mx-auto"
                src={this.props.game.capture.url}
                style={{"width":"400px", "height":"350px"}}
                />
                

                <div style={{"position": "absolute","left": "0","top": "0", "width":"auto","max-width": "50%"}}
                    className="m-3">
                    <div className="bg-black rounded w-auto bg-opacity-75"
                        style={{"margin-left":"120px"}}>
                        <h5 className="mx-auto p-1"                            
                            >{this.props.game.name}
                        </h5>
                    </div>
                </div>            
                
                <div style={{"position": "absolute","left": "0","bottom": "0", "max-width": "80%"}}>
                    <div className="bg-black rounded w-auto bg-opacity-75"
                        style={{"margin-left":"120px"}}>
                        <p class="text-center"
                            className="m-2"
                            >{this.props.game.description}
                        </p>
                    </div>                    
                </div>                                           
            </div>
        </div>
        
    )
  }
}

export default CardForSlider