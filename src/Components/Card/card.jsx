import React from "react";
import { Component } from "react";
import "./card.scss";


export default class Card extends Component {
    state = {
        data: [],
    };

    

    render() {
        return (
            <div className="card">
                <div className="img">
                    <img src={this.props.img} alt=""></img>
                </div>
                <div className="info">
                    <p className="name">{this.props.name}</p>
                    <p className="surname">{this.props.surname}</p>
                    <p className="age">{this.props.age}</p>
                </div>
            </div>
        );
    }
}
