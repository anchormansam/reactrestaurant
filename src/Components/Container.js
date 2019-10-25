import React from 'react';
import { render } from "react-dom";
import { blockStatement } from '@babel/types';
import { NONAME } from 'dns';
import Tile from './Tile';
import ApiCall from './ApiCall'



class Container extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        
            
        return <div
        id='container-fluid'
        style={{display: 'inline-block', margin: 0}}
        className='menu-item-container-fluid'>
            <h4>
                Tomorrow's {this.props.title} 
            </h4>
            <h2>
                {this.props.price}
            </h2>
            <h5>
                {this.props.description}
            </h5>
            
        </div>
    }
}





export default Container;