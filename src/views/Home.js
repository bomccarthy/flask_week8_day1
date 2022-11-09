import React, { Component } from 'react';
import '../main.css';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            age: 49
        }
    }

    render() {
        return (
        <div>
            Home
        </div>
        )
    }
}
