import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const consultantStore = new Store('consultant-store');

export class Consultant extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           consultant : '',
           date : '',
           client : '',
           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {

    get('consultant', consultantStore).then(val =>  
      this.setState({ consultant : val})
    );

    get('date', consultantStore).then(val =>  
      this.setState({ date : val})
    );

    get('client', consultantStore).then(val =>  
      this.setState({ client : val})
    );

    get('notes', consultantStore).then(val =>  
      this.setState({ notes : val})
    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    var path = this.props.path;
    var pass = this.props.pass;
    var consultant = this.state.consultant;
    var date = this.state.date;
    var client = this.state.client;
    var notes = this.state.notes;
    var ver = this.props.ver;

    //save to indexeddb
    set('consultant', this.state.consultant, consultantStore)
    set('dated', this.state.date, consultantStore);
    set('client', this.state.client, consultantStore);
    set('notes', this.state.notes, consultantStore);
    set('ver', this.props.ver, consultantStore);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...state,
      [event.target.name]: value
    });
  }

  render() {


    return (
      <div className="wrapper">

        <div className="titleBlock">
          <h1>Core fact find</h1>
          <h2>Structured file note</h2>
        </div>

        <div className="group">
          <label>Consultant</label>
          <input type="text" name="consultant" value={this.state.consultant} onChange={this.handleChange}/>
        </div>

        <div className="group">
          <label>Date</label>
          <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
        </div>

        <div className="group">
          <label>Client(s)</label>
          <input type="text" name="client" value={this.state.client} onChange={this.handleChange}/>
        </div>

        <div className="group adviserGroup">
          <label>Adviser Notes</label>
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange}></textarea>
        </div>

        <div className="row">
          <div className="group submit">
            <Link to="./personal" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./" className="disabled">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./" className="disabled">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./personal">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
              </svg>
            </Link>
            <Link to="./capacity">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-right</title>
              <path d="M13.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM6.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    );

  }
  
}

export default Consultant;
