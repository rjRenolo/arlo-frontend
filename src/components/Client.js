import React from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export class Client extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           consultant: '',

       }


  }

  componentDidMount = () => {

  }

  componentDidUpdate = () => {
    
  }

  render() {


    return (
      <div className="wrapper">
        Client questions

        
      </div>
    );

  }
  
}

export default Client;
