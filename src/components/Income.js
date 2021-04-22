import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('income-store');

export class Income extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           income1 : '',
           expenditure1 : '',
           income2 : '',
           expenditure2 : '',
           joint : '',
           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    get('income1', dbStore).then(val =>  
      this.setState({ income1 : val})
    );
    get('expenditure1', dbStore).then(val =>  
      this.setState({ expenditure1 : val})
    );
    get('income2', dbStore).then(val =>  
      this.setState({ income2 : val})
    );
    get('expenditure2', dbStore).then(val =>  
      this.setState({ expenditure2 : val})
    );
    get('joint', dbStore).then(val =>  
      this.setState({ joint : val})
    );
    get('notes', dbStore).then(val =>  
      this.setState({ notes: val})
    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save to indexeddb
    set('income1', this.state.income1, dbStore)
    set('expenditure1', this.state.expenditure1, dbStore);
    set('income2', this.state.income2, dbStore)
    set('expenditure2', this.state.expenditure2, dbStore);
    set('joint', this.state.joint, dbStore);
    set('notes', this.state.notes, dbStore);
    set('ver', this.props.ver, dbStore);
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
          <h1>Income and expenditure</h1>
          <h2>(approximation)</h2>
        </div>

        <div className="row">

          <div className="g_grid_6">
            <h3>Client 1</h3>
            <div className="group">
              <label>Net monthly income</label>
              <input type="text" name="income1" value={this.state.income1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Monthly expenditure</label>
              <input type="text" name="expenditure1" value={this.state.expenditure1} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="g_grid_6">
            <h3>Client 2</h3>
            <div className="group">
              <label>Net monthly income</label>
              <input type="text" name="income2" value={this.state.income2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Monthly expenditure</label>
              <input type="text" name="expenditure2" value={this.state.expenditure2} onChange={this.handleChange}/>
            </div>
          </div>
          
        </div>

        <div className="group">
          <label>Joint monthly surplus or shortfall</label>
          <textarea name="joint" onChange={this.handleChange} value={this.state.joint}></textarea>
        </div>

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
            <ul>
              <li>Is income expected to change – when and by how much?</li>
              <li>Planned, extraordinary, spending</li>
              <li>Contingency fund – in place and how has the client addressed this?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./policies" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./employment">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./policies">
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

export default Income;
