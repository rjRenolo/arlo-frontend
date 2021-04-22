import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('thirdpartyadvice-store');

export class Thirdpartyadvice extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           accountant1 : '',
           accountantaddress1 : '',
           solicitor1 : '',
           solicitoraddress1 : '',
           accountant2 : '',
           accountantaddress2 : '',
           solicitor2 : '',
           solicitoraddress2 : '',
           notes : '',
           isComplete : false,
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    //Iterate through state and set the state based
    //on any values that exist in indexeddb
    Object.keys(this.state).map(key => 

     get(key, dbStore).then(val =>  
        this.setState({ 
          [key] : val
        })
      )

    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save version to indexeddb
    set('ver', this.props.ver, dbStore);

    //Iterate through state and save to indexeddb
    Object.keys(this.state).map(key => 

      set(key, this.state.[key], dbStore)

    );
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
          <h1>Third Party Advice</h1>
          <h2>Professional advisers</h2>
        </div>

        <div className="row">

          <div className="g_grid_6">

            <h3>Client 1</h3>
            
            <div className="group">
              <label>Accountant</label>
              <input type="text" name="accountant1" onChange={this.handleChange} value={this.state.accountant1}/>
            </div>

            <div className="group">
              <label>Accountant's Address</label>
              <textarea name="accountantaddress1" onChange={this.handleChange} value={this.state.accountantaddress1}></textarea>
            </div>

            <div className="group">
              <label>Solicitor</label>
              <input type="text" name="solicitor1" onChange={this.handleChange} value={this.state.solicitor1}/>
            </div>

            <div className="group">
              <label>Solicitor's Address</label>
              <textarea name="solicitoraddress1" onChange={this.handleChange} value={this.state.solicitoraddress1}></textarea>
            </div>

          </div>

          <div className="g_grid_6">

            <h3>Client 2</h3>
            
            <div className="group">
              <label>Accountant</label>
              <input type="text" name="accountant2" onChange={this.handleChange} value={this.state.accountant2}/>
            </div>

            <div className="group">
              <label>Accountant's Address</label>
              <textarea name="accountantaddress2" onChange={this.handleChange} value={this.state.accountantaddress2}></textarea>
            </div>

            <div className="group">
              <label>Solicitor</label>
              <input type="text" name="solicitor2" onChange={this.handleChange} value={this.state.solicitor2}/>
            </div>

            <div className="group">
              <label>Solicitor's Address</label>
              <textarea name="solicitoraddress2" onChange={this.handleChange} value={this.state.solicitoraddress2}></textarea>
            </div>

          </div>

        </div>

        

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>

            <ul>
              <li>Add all other TPA to above table – Introducers; Banks; DFM; Investment Manager; previous IFA etc.</li>
              <li>Note fees and commissions</li>
              <li>What is the strength of the relationship (committed; transient etc.)?</li>
              <li>Does the client insist that we need to work with them – can introductions be made?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./whatyouown" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./priorities">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./whatyouown">
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

export default Thirdpartyadvice;
