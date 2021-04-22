import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('estate-store');

export class Estate extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           will1 : 'No',
           beneficiaries1 : '',
           wishes1 : 'No',
           trusts1 : 'No',
           trustdetail1 : '',
           attorney1 : 'No',
           power1 : '',
           gifts1 : 'No',
           inheritance1 : 'No',
           will2 : 'No',
           beneficiaries2 : '',
           wishes2 : 'No',
           trusts2 : 'No',
           trustdetail2 : '',
           attorney2 : 'No',
           power2 : '',
           gifts2 : 'No',
           inheritance2 : 'No',
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
          <h1>Estate planning</h1>
          <h2>&nbsp;</h2>
        </div>

        <div className="row">

          <div className="g_grid_6">

            <h3>Client 1</h3>
            
            <div className="group">
              <label>Have you made a will?</label>
              <select name="will1" onChange={this.handleChange} value={this.state.will1}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className={`group ${this.state.will1 == 'Yes' ? "" : "hidden"}`} >
              <label>Who are the main beneficiaries of your will?</label>
              <input type="text" name="beneficiaries1" onChange={this.handleChange} value={this.state.beneficiaries1}/>
            </div>

            <div className={`group ${this.state.will1 == 'Yes' ? "" : "hidden"}`}>
              <label>Does it reflect your current wishes?</label>
              <select name="wishes1" onChange={this.handleChange} value={this.state.wishes1}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="group">
              <label>Are any trusts in place?</label>
              <select name="trusts1" onChange={this.handleChange} value={this.state.trusts1}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className={`group ${this.state.trusts1 == 'Yes' ? "" : "hidden"}`}>
              <label>Detail trusts (including trustees)</label>
              <textarea name="trustdetail1" onChange={this.handleChange} value={this.state.trustdetail1}></textarea>
            </div>

            <div className="group">
              <label>Do you have a Lasting or Enduring Power of Attorney?</label>
              <select name="attorney1" onChange={this.handleChange} value={this.state.attorney1}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className={`group ${this.state.attorney1 == 'Yes' ? "" : "hidden"}`}>
              <label>To whom has the “Power” been given?</label>
              <textarea name="power1" onChange={this.handleChange} value={this.state.power1}></textarea>
            </div>

            <div className="group">
              <label>Have you made any gifts in the last 7 years?</label>
              <select name="gifts1" onChange={this.handleChange} value={this.state.gifts1}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="group">
              <label>Are you expecting an inheritance?</label>
              <select name="inheritance1" onChange={this.handleChange} value={this.state.inheritance1}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

          </div>

          <div className="g_grid_6">

            <h3>Client 2</h3>
            
            <div className="group">
              <label>Have you made a will?</label>
              <select name="will2" onChange={this.handleChange} value={this.state.will2}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className={`group ${this.state.will2 == 'Yes' ? "" : "hidden"}`} >
              <label>Who are the main beneficiaries of your will?</label>
              <input type="text" name="beneficiaries2" onChange={this.handleChange} value={this.state.beneficiaries2}/>
            </div>

            <div className={`group ${this.state.will2 == 'Yes' ? "" : "hidden"}`}>
              <label>Does it reflect your current wishes?</label>
              <select name="wishes2" onChange={this.handleChange} value={this.state.wishes2}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="group">
              <label>Are any trusts in place?</label>
              <select name="trusts2" onChange={this.handleChange} value={this.state.trusts2}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className={`group ${this.state.trusts2 == 'Yes' ? "" : "hidden"}`}>
              <label>Detail trusts (including trustees)</label>
              <textarea name="trustdetail2" onChange={this.handleChange} value={this.state.trustdetail2}></textarea>
            </div>

            <div className="group">
              <label>Do you have a Lasting or Enduring Power of Attorney?</label>
              <select name="attorney2" onChange={this.handleChange} value={this.state.attorney2}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className={`group ${this.state.attorney2 == 'Yes' ? "" : "hidden"}`}>
              <label>To whom has the “Power” been given?</label>
              <textarea name="power2" onChange={this.handleChange} value={this.state.power2}></textarea>
            </div>

            <div className="group">
              <label>Have you made any gifts in the last 7 years?</label>
              <select name="gifts2" onChange={this.handleChange} value={this.state.gifts2}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="group">
              <label>Are you expecting an inheritance?</label>
              <select name="inheritance2" onChange={this.handleChange} value={this.state.inheritance2}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

          </div>

        </div>

        

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
            <ul>
              <li>Have they made a will?</li>
              <li>Main Beneficiaries</li>
              <li>Power of Attorney</li>
              <li>Made any gifts?</li>
              <li>Expecting Inheritance?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./changes" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./whatyouowe">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./changes">
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

export default Estate;
