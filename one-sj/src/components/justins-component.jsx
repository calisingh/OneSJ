import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class JustinsComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Justin's Component</h1> 
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
        );
    }
}