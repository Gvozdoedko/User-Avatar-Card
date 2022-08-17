import { React, Component } from "react";
import "./App.scss";
import Card from "./Components/Card/card";
import userData from './Components/json/user.json';


export default class App extends Component {


    render() {
        return (
            <div className="App">
              { userData.map((item) => <Card key={item._id} img={item.img} name={item.name} surname={item.surname} age={item.age}></Card>) }
            </div>
        );
    }
}
