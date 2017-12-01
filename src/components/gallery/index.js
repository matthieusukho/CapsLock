import React, {Component} from 'react';
import CapsLog from '../screencaps/caps';


class Caps extends Component {
    render() {
        return(
        <div>
            <h1>{this.props.name}</h1>
            <img src={this.props.picture}/>
        </div>
        )
    }
}


export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            capsMovie: []
        }
    }
    render() {
        let id = 0;
        const component = CapsLog.map(c => {
            return <Caps name={c.movie} picture={c.pathcaps} key={id++}/>
        });
        return (
            <div>
                {component}
            </div>
        )

    }
}