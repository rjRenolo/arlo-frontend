import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

// const consultantStore = new Store('consultant-store');

export class Home extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           
       }

      // this.testSubmit = this.testSubmit.bind(this);
  }

  componentDidMount = () => {


  }

  componentDidUpdate = () => {
    
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...state,
      [event.target.name]: value
    });
  }

  // testSubmit = async () => {
  //   // console.log('test')
  //   const data = {sample: this.state.sample}
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
  //     body: 'client=test&consultant=test&dated=test&notes=test&ver=1.0.0&'
  //   }
  //   const response = await fetch('http://localhost:8000/test',options);
  //   const json = await response.json()
  //   console.log(json)
  // }

  render() {


    return (
      <div className="wrapper">

        {/* <input type="text" name="sample" onChange={this.handleChange}/>
        <button onClick={() => this.testSubmit()}>Test</button> */}

      </div>
    );

  }
  
}

export default Home;
