import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('investing-store');

export class Investing extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           cashsavings : '',
           fundchoice : '',
           stocksisa : '',
           individualshares : '',
           pensionreview : '',
           fallresponse : '',
           confidence : '',
           comments : '',
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
          <h1>Your Investing Experience</h1>
          <h2>&nbsp;</h2>
        </div>

        <p>To provide you with financial advice, your adviser firstly needs to understand how experienced you are with investing.</p>

        <div className="multiChoice" >
          <p>1. Other than a current account,have you ever had a cash savings account, a cash ISA or savings bonds (e.g. from a bank, building society or NS&I)?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, after taking professional financial advice" name="cashsavings" onChange={this.handleChange} checked={this.state.cashsavings === "Yes, after taking professional financial advice"}/> Yes, after taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, without taking professional financial advice" name="cashsavings" onChange={this.handleChange} checked={this.state.cashsavings === "Yes, without taking professional financial advice"}/> Yes, without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, both with and without taking professional financial advice" name="cashsavings" onChange={this.handleChange} checked={this.state.cashsavings === "Yes, both with and without taking professional financial advice"}/> Yes, both with and without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="No" name="cashsavings" onChange={this.handleChange} checked={this.state.cashsavings === "No"}/> No</label>
          </div>
        </div>

        <div className="multiChoice">
          <p>2. Have you ever had a pension where you could choose the funds you invest in?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, after taking professional financial advice" name="fundchoice" onChange={this.handleChange}  checked={this.state.fundchoice === "Yes, after taking professional financial advice"}/> Yes, after taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, without taking professional financial advice" name="fundchoice" onChange={this.handleChange}  checked={this.state.fundchoice === "Yes, without taking professional financial advice"}/> Yes, without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, both with and without taking professional financial advice" name="fundchoice"  onChange={this.handleChange}  checked={this.state.fundchoice === "Yes, both with and without taking professional financial advice"}/> Yes, both with and without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="No" name="fundchoice" onChange={this.handleChange}  checked={this.state.fundchoice === "No"}/> No</label>
          </div>
        </div>

        <div className="multiChoice">
          <p>3. Have you ever had a stocks and shares ISA, or a professionally managed investment fund such as an OEIC, unit trust or investment bond?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, after taking professional financial advice" name="stocksisa" onChange={this.handleChange}  checked={this.state.stocksisa === "Yes, after taking professional financial advice"}/> Yes, after taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, without taking professional financial advice" name="stocksisa" onChange={this.handleChange}  checked={this.state.stocksisa === "Yes, without taking professional financial advice"}/> Yes, without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, both with and without taking professional financial advice" name="stocksisa"  onChange={this.handleChange}  checked={this.state.stocksisa === "Yes, both with and without taking professional financial advice"}/> Yes, both with and without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="No" name="stocksisa" onChange={this.handleChange}  checked={this.state.stocksisa === "No"}/> No</label>
          </div>
        </div>

        <div className="multiChoice">
          <p>4. Have you ever bought or sold individual shares on the stock market?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, after taking professional financial advice" name="individualshares" onChange={this.handleChange}  checked={this.state.individualshares === "Yes, after taking professional financial advice"}/> Yes, after taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, without taking professional financial advice" name="individualshares" onChange={this.handleChange}  checked={this.state.individualshares === "Yes, without taking professional financial advice"}/> Yes, without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Yes, both with and without taking professional financial advice" name="individualshares"  onChange={this.handleChange}  checked={this.state.individualshares === "Yes, both with and without taking professional financial advice"}/> Yes, both with and without taking professional financial advice</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="No" name="individualshares" onChange={this.handleChange}  checked={this.state.individualshares === "No"}/> No</label>
          </div>
        </div>

        <div className="multiChoice">
          <p>5. How often do you review the value of your pensions or investments?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I do not have any pensions or investments" name="pensionreview" onChange={this.handleChange}  checked={this.state.pensionreview === "I do not have any pensions or investments"}/> I do not have any pensions or investments</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="At least every 3 months" name="pensionreview" onChange={this.handleChange}  checked={this.state.pensionreview === "At least every 3 months"}/> At least every 3 months</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Between 3 months and a year" name="pensionreview"  onChange={this.handleChange}  checked={this.state.pensionreview === "Between 3 months and a year"}/> Between 3 months and a year</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Less often than once a year" name="pensionreview" onChange={this.handleChange}  checked={this.state.pensionreview === "Less often than once a year"}/> Less often than once a year</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Only when I see a major financial event in the news" name="pensionreview" onChange={this.handleChange}  checked={this.state.pensionreview === "Only when I see a major financial event in the news"}/> Only when I see a major financial event in the news</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I leave this to my financial adviser" name="pensionreview" onChange={this.handleChange}  checked={this.state.pensionreview === "I leave this to my financial adviser"}/> I leave this to my financial adviser</label>
          </div>
        </div>

        <div className="multiChoice">
          <p>6. If the value of your pensions or investments has ever fallen substantially, how did you respond?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I don't recall the value of my investments ever falling substantially" name="fallresponse" onChange={this.handleChange}  checked={this.state.fallresponse === "I don't recall the value of my investments ever falling substantially"}/> I don't recall the value of my investments ever falling substantially</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Immediately contacted my financial adviser" name="fallresponse" onChange={this.handleChange}  checked={this.state.fallresponse === "Immediately contacted my financial adviser"}/> Immediately contacted my financial adviser</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Waited to discuss it with my financial adviser at our next planned review" name="fallresponse"  onChange={this.handleChange}  checked={this.state.fallresponse === "Waited to discuss it with my financial adviser at our next planned review"}/> Waited to discuss it with my financial adviser at our next planned review</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Took some or all of the remaining money out of the investment" name="fallresponse" onChange={this.handleChange}  checked={this.state.fallresponse === "Took some or all of the remaining money out of the investment"}/> Took some or all of the remaining money out of the investment</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Invested more as I saw the fall in value as an opportunity" name="fallresponse" onChange={this.handleChange}  checked={this.state.fallresponse === "Invested more as I saw the fall in value as an opportunity"}/> Invested more as I saw the fall in value as an opportunity</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I took no action as I felt nothing needed to be done" name="fallresponse" onChange={this.handleChange}  checked={this.state.fallresponse === "I took no action as I felt nothing needed to be done"}/> I took no action as I felt nothing needed to be done</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I took no action as I was unsure what to do" name="fallresponse" onChange={this.handleChange}  checked={this.state.fallresponse === "I took no action as I was unsure what to do"}/> I took no action as I was unsure what to do</label>
          </div>
        </div>

        <div className="multiChoice">
          <p>7. How would you describe your level of investment confidence?</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Not confident: I'm not very comfortable with investing" name="confidence" onChange={this.handleChange}  checked={this.state.confidence === "Not confident: I'm not very comfortable with investing"}/> Not confident: I'm not very comfortable with investing</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Somewhat confident: I’m comfortable with some investments but still need some things explained to me" name="confidence" onChange={this.handleChange}  checked={this.state.confidence === "Somewhat confident: I’m comfortable with some investments but still need some things explained to me"}/> Somewhat confident: I’m comfortable with some investments but still need some things explained to me</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Confident: I'm comfortable with investing and have a reasonable understanding of the potential risks and rewards" name="confidence"  onChange={this.handleChange}  checked={this.state.confidence === "Confident: I'm comfortable with investing and have a reasonable understanding of the potential risks and rewards"}/> Confident: I'm comfortable with investing and have a reasonable understanding of the potential risks and rewards</label>
          </div>
        </div> 

        <div className="group">
          <label>If you would like to make any other comment about your previous investment experience (e.g. buy to let), background or education which you feel is relevant here, please do so (optional):</label>
          <textarea name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
        </div>


      
        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./attitude" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./Other">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./attitude">
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

export default Investing;
