import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('softfacts-store');

export class Softfacts extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           dfm : '',
           inherit : '',
           freedom : '',
           lumpsum : '',
           earlybenefits : '',
           investment : '',
           balance : '',
           employersolvency : '',
           cappedpension : '',
           widowspension : '',
           dependents : '',
           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);
       this.handleCheck = this.handleCheck.bind(this);

  }

  componentDidMount = () => {

    get('dfm', dbStore).then(val =>  
      this.setState({ dfm : val})
    );
    get('inherit', dbStore).then(val =>  
      this.setState({ inherit : val})
    );
    get('freedom', dbStore).then(val =>  
      this.setState({ freedom : val})
    );
    get('lumpsum', dbStore).then(val =>  
      this.setState({ lumpsum : val})
    );
    get('earlybenefits', dbStore).then(val =>  
      this.setState({ earlybenefits : val})
    );
    get('investment', dbStore).then(val =>  
      this.setState({ investment : val})
    );
    get('balance', dbStore).then(val =>  
      this.setState({ balance : val})
    );
    get('employersolvency', dbStore).then(val =>  
      this.setState({ employersolvency : val})
    );
    get('cappedpension', dbStore).then(val =>  
      this.setState({ cappedpension : val})
    );
    get('widowspension', dbStore).then(val =>  
      this.setState({ widowspension : val})
    );
    get('dependents', dbStore).then(val =>  
      this.setState({ dependents : val})
    );
    get('notes', dbStore).then(val =>  
      this.setState({ notes: val})
    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save to indexeddb
    set('dfm', this.state.dfm, dbStore);
    set('inherit', this.state.inherit, dbStore);
    set('freedom', this.state.freedom, dbStore);
    set('lumpsum', this.state.lumpsum, dbStore);
    set('earlybenefits', this.state.earlybenefits, dbStore);
    set('investment', this.state.investment, dbStore);
    set('balance', this.state.balance, dbStore);
    set('employersolvency', this.state.employersolvency, dbStore);
    set('cappedpension', this.state.cappedpension, dbStore);
    set('widowspension', this.state.widowspension, dbStore);
    set('dependents', this.state.dependents, dbStore);
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

  handleCheck(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }

  render() {


    return (
      <div className="wrapper">

        <div className="titleBlock">
          <h1>Soft facts</h1>
          <h2>Pensions &amp; retirement</h2>
        </div>

        <div className="group checkboxGroup">
          <label><input name="dfm" type="checkbox" onChange={this.handleCheck} checked={this.state.dfm} /> Client uses the services of a DFM (Discretionary Fund Manager).</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="inherit" type="checkbox" onChange={this.handleCheck} checked={this.state.inherit} /> Client wishes for dependents to inherit as much of the pension fund as possible.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="freedom" type="checkbox" onChange={this.handleCheck} checked={this.state.freedom} /> Client wishes to take full control over his/her pension in line with recent pension freedom legislation.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="lumpsum" type="checkbox" onChange={this.handleCheck} checked={this.state.lumpsum} /> Client would like the option to access the highest pension commencement lump sum that his/her pension benefits will allow.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="earlybenefits" type="checkbox" onChange={this.handleCheck} checked={this.state.earlybenefits} /> Client would like option to take benefits earlier than the existing DB retirement age (not earlier than 55).</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="investment" type="checkbox" onChange={this.handleCheck} checked={this.state.investment} /> Client would like to invest in an investment strategy which matches his/her attitude to risk.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="balance" type="checkbox" onChange={this.handleCheck} checked={this.state.balance} /> It is important to Client that any balance of his/her pension fund be passed on when he/she dies.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="employersolvency" type="checkbox" onChange={this.handleCheck} checked={this.state.employersolvency} /> Client is worried about the employer solvency and the current shortfall in the DB scheme funding (as per the last Actuarial funding statement).</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="cappedpension" type="checkbox" onChange={this.handleCheck} checked={this.state.cappedpension} /> Client is worried that if the DB scheme did go into the pension protection fund his/her pension could be capped.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="widowspension" type="checkbox" onChange={this.handleCheck} checked={this.state.widowspension} /> Due to marital status client has no need for widows and/or dependents pension.</label>
        </div>

        <div className="group checkboxGroup">
          <label><input name="dependents" type="checkbox" onChange={this.handleCheck} checked={this.state.dependents} /> As client is divorced or unmarried with adult children, he/she wishes his/her pension fund to be passed to dependents (in a DB scheme -Typically would pay a 50% pension to dependent children until they reach the age of 18-23 or in full time education ).</label>
        </div>
       

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./priorities" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./policies">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./priorities">
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

export default Softfacts;
