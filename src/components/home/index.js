import React, { Component } from 'react';
import CapsLog from '../screencaps/caps.json';
import _ from 'lodash';

class Caps extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.picture}/>
            </div>
        )
    }
}

export default class Home extends Component {
    render() {
        let id = 0;
        const component = CapsLog.map(c => {
            return <Caps name={c.movie} picture={c.pathcaps} key={id++}/>
        });

        let component2 = _.sample(component);
        return (
            <div>
                {component2}
            </div>
        )

    }
}