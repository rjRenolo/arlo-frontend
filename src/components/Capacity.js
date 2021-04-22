import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('capacity-store');

export class Capacity extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           financialgoals : '',
           losses : '',
           earliest : '',
           takemoney : '',
           likely : '',
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
    console.log(value);
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
          <h1>Capacity for Risk</h1>
          <h2>&nbsp;</h2>
        </div>

        <p>These questions are designed to understand how your financial situation might affect how much risk you can take. Taken together with the previous questions, they will help your adviser provide you with financial advice that is appropriate for your needs.</p>

        <div className="multiChoice" >
          <p>1. Do you have any specific financial goals for this investment? If you have multiple goals, please choose the main one that applies to you.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="No, my investment is to meet a range of goals" name="financialgoals" onChange={this.handleChange} checked={this.state.financialgoals === "No, my investment is to meet a range of goals"}/> No, my investment is to meet a range of goals</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes - to meet essential living costs: Any losses from this investment would reduce my standard of living" name="financialgoals" onChange={this.handleChange} checked={this.state.financialgoals === "Yes - to meet essential living costs: Any losses from this investment would reduce my standard of living"}/> Yes - to meet essential living costs: Any losses from this investment would reduce my standard of living</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes - to meet other important financial goals: If this investment fell in value I’d have enough to live on, but couldn’t meet these goals" name="financialgoals" onChange={this.handleChange} checked={this.state.financialgoals === "Yes - to meet other important financial goals: If this investment fell in value I’d have enough to live on, but couldn’t meet these goals"}/> Yes - to meet other important financial goals: If this investment fell in value I’d have enough to live on, but couldn’t meet these goals</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes - to meet non-essential financial goals: I’d still be able to cover my essential living costs and other important financial goals if this investment fell in value" name="financialgoals" onChange={this.handleChange} checked={this.state.financialgoals === "Yes - to meet non-essential financial goals: I’d still be able to cover my essential living costs and other important financial goals if this investment fell in value"}/> Yes - to meet non-essential financial goals: I’d still be able to cover my essential living costs and other important financial goals if this investment fell in value</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>2. How much of your investments could you afford to lose without reducing your future standard of living?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I can’t afford any loss" name="losses" onChange={this.handleChange} checked={this.state.losses === "I can’t afford any loss"}/> I can’t afford any loss</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I could afford a small loss" name="losses" onChange={this.handleChange} checked={this.state.losses === "I could afford a small loss"}/> I could afford a small loss</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I could afford a medium loss" name="losses" onChange={this.handleChange} checked={this.state.losses === "I could afford a medium loss"}/> I could afford a medium loss</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I could afford a large loss" name="losses" onChange={this.handleChange} checked={this.state.losses === "I could afford a large loss"}/> I could afford a large loss</label>
          </div>
         
        </div>

        <div className="multiChoice" >
          <p>3. When is the earliest you plan to take money from your investments?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Within the next year" name="earliest" onChange={this.handleChange} checked={this.state.earliest === "Within the next year"}/> Within the next year</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Between 1 and 5 years from now" name="earliest" onChange={this.handleChange} checked={this.state.earliest === "Between 1 and 5 years from now"}/> Between 1 and 5 years from now</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Between 6 and 10 years from now" name="earliest" onChange={this.handleChange} checked={this.state.earliest=== "Between 6 and 10 years from now"}/> Between 6 and 10 years from now</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="More than 10 years from now" name="earliest" onChange={this.handleChange} checked={this.state.earliest === "More than 10 years from now"}/> More than 10 years from now</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>4. How do you plan to take money from your investments?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="As a single lump sum" name="takemoney" onChange={this.handleChange} checked={this.state.certainty === "As a single lump sum"}/> As a single lump sum</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Leave it invested and withdraw amounts only as needed" name="takemoney" onChange={this.handleChange} checked={this.state.takemoney === "Leave it invested and withdraw amounts only as needed"}/> Leave it invested and withdraw amounts only as needed</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Leave it invested and withdraw amounts regularly" name="takemoney" onChange={this.handleChange} checked={this.state.takemoney === "Leave it invested and withdraw amounts regularly"}/> Leave it invested and withdraw amounts regularly (e.g. taking it as regular income)</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Leave it invested and only take money out in an emergency" name="takemoney" onChange={this.handleChange} checked={this.state.takemoney === "Leave it invested and only take money out in an emergency"}/> Leave it invested and only take money out in an emergency</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>5. How likely is it that you will need to take money from your investments earlier than planned?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Very likely : Under certain circumstances I can see a situation where I would need to access my investments early – e.g. in a financial emergency" name="likely" onChange={this.handleChange} checked={this.state.likely === "Very likely : Under certain circumstances I can see a situation where I would need to access my investments early – e.g. in a financial emergencye"}/> Very likely : Under certain circumstances I can see a situation where I would need to access my investments early – e.g. in a financial emergency</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Possibly: I may need to access my investments early" name="likely" onChange={this.handleChange} checked={this.state.likely === "Possibly: I may need to access my investments early"}/> Possibly: I may need to access my investments early e.g. in a financial emergency</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Unlikely: I won’t need to access my investments early as I have other money for financial emergencies" name="likely" onChange={this.handleChange} checked={this.state.likely === "Unlikely: I won’t need to access my investments early as I have other money for financial emergencies"}/> Unlikely: I won’t need to access my investments early as I have other money for financial emergencies</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I can’t access some or all of my investments early (e.g. a pension)" name="likely" onChange={this.handleChange} checked={this.state.likely === "I can’t access some or all of my investments early (e.g. a pension)"}/> I can’t access some or all of my investments early (e.g. a pension)</label>
          </div>
        </div>

     
      
        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./complete" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./risk-profiling">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./complete">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
              </svg>
            </Link>
            <Link to="./capacity" className="disabled">
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

export default Capacity;
