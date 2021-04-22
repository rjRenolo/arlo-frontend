import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('riskprofiling-store');

export class Riskprofiling extends React.Component {

  constructor(props){
       super(props);

       this.state = {
        moneyreturn: '',
        happyrisk: '',
        expecthigh: '',
        notriskyinvestments: '',
        predictableinvestments: '',
        considerriskyinvestments: '',
        comfortable: '',
        upsdowns: '',
        makemoney: '',
        thrillriskyinvestments: '',
        greatdeal: '',
        stockmarket: '',
        fewmonths: '',
        investhighrisk: '',
        acceptlarge: '',
        anxiousinvesment: '',
        relaxed: '',
        biggerinvesment: '',
        riskprofile: '1',
        timeframe: '',
        investmentexperience: '',
        maximudrawdown: '',
        notes : '',
        agreedlevel: '',
        attitudetorisk_one: '',
        attitudetorisk_two: '',
        attitudetorisk_three: '',
        attitudetorisk_four: '',
        attitudetorisk_five: '',
        attitudetorisk_six: '',
        attitudetorisk_seven: '',
        totalscore: 0,
        isComplete : false,
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    //Iterate through state and set the state based
    //on any values that exist in indexeddb
    Object.keys(this.state).map(key => 

    //  get(key, dbStore).then(val =>  
    //     this.setState({ 
    //       [key] : val
    //     })
    //   )
     get(key, dbStore).then(val => {
       if(val !== undefined){
        this.setState({ 
          [key] : val
        })
       }
     })

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

  // testing = (event) => {
  //   this.setState(({totalscore}) => {
  //       let s = totalscore
  //       s = s + 4
  //       return {totalscore: s}
  //   })
  //   console.log(this.state.totalscore)
  // }

  handleChange(event) {
    const value = event.target.value;
    console.log(event.target.name, value)
    this.setState({
      ...state,
      [event.target.name]: value
    });

    console.log('somename', event.target.name)

    // Strongly Aggree Column 1
    // Strongly Disagree Column 5
    switch(event.target.name){ 
        case 'moneyreturn': // 1.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'happyrisk': // 2.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'expecthigh': // 3.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'notriskyinvestments': // 4.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'predictableinvestments': // 5.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }
            break;
        case 'considerriskyinvestments': // 6.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'comfortable': // 7.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'upsdowns': // 8.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'makemoney': // 9.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'thrillriskyinvestments': // 10.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'greatdeal': // 11.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }
            break;
        case 'stockmarket': // 12.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }
            break;
        case 'fewmonths': // 13.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }
            break;
        case 'investhighrisk': // 14.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'acceptlarge': // 15.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'anxiousinvesment': // 16.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'relaxed': // 17.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        case 'biggerinvesment': // 18.
            if(event.target.value == 'Strongly agree'){
              this.setState({...state, totalscore: this.state.totalscore + 5})
            }else if(event.target.value == 'Agree'){
              this.setState({...state, totalscore: this.state.totalscore + 4})
            }else if(event.target.value == 'Neither agree nor disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 3})
              
            }else if(event.target,value == 'Disagree'){
              this.setState({...state, totalscore: this.state.totalscore + 2})

            }else{ //Strongly disagree
              this.setState({...state, totalscore: this.state.totalscore + 1})
            }
            break;
        default:
            break;
    }
    if(this.state.totalscore <= 24){
      this.setState({...state, riskprofile: '1'})
    }else if(this.state.totalscore > 24 && this.state.totalscore <= 32){
      this.setState({...state, riskprofile: '2'})
    }else if(this.state.totalscore > 32 && this.state.totalscore <= 39){
      this.setState({...state, riskprofile: '3'})
    }else if(this.state.totalscore > 39 && this.state.totalscore <= 47){
      this.setState({...state, riskprofile: '4'})
    }else if(this.state.totalscore > 47 && this.state.totalscore <=54){
      this.setState({...state, riskprofile: '5'})
    }else if(this.state.totalscore > 54 && this.state.totalscore <= 61){
      this.setState({...state, riskprofile: '6'})
    }else if(this.state.totalscore > 61 && this.state.totalscore <= 69){
      this.setState({...state, riskprofile: '7'})
    }else if(this.state.totalscore > 69 && this.state.totalscore <= 76){
      this.setState({...state, riskprofile: '8'})
    }else if(this.state.totalscore > 76 && this.state.totalscore <= 84){
      this.setState({...state, riskprofile: '9'})
    }else{
      this.setState({...state, riskprofile: '10'})
    }

  }

  render() {

    return (
      <div className="wrapper">
        <div className="titleBlock">
          <h1>Risk Profiling</h1>
        </div>

        <div className="multiChoice" >
          <p>1. To get a good return on my money I am prepared to risk a portion of my wealth.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="moneyreturn" onChange={this.handleChange} checked={this.state.moneyreturn === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="moneyreturn" onChange={this.handleChange} checked={this.state.moneyreturn === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="moneyreturn" onChange={this.handleChange} checked={this.state.moneyreturn === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="moneyreturn" onChange={this.handleChange} checked={this.state.moneyreturn === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="moneyreturn" onChange={this.handleChange} checked={this.state.moneyreturn === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>2. I would be happy to risk losses to get potentially greater long-term gains.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="happyrisk" onChange={this.handleChange} checked={this.state.happyrisk === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="happyrisk" onChange={this.handleChange} checked={this.state.happyrisk === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="happyrisk" onChange={this.handleChange} checked={this.state.happyrisk === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="happyrisk" onChange={this.handleChange} checked={this.state.happyrisk === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="happyrisk" onChange={this.handleChange} checked={this.state.happyrisk === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>3. I expect high investment growth and am willing to accept the consequent possibility of large losses.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="expecthigh" onChange={this.handleChange} checked={this.state.expecthigh === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="expecthigh" onChange={this.handleChange} checked={this.state.expecthigh === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="expecthigh" onChange={this.handleChange} checked={this.state.expecthigh === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="expecthigh" onChange={this.handleChange} checked={this.state.expecthigh === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="expecthigh" onChange={this.handleChange} checked={this.state.expecthigh === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>4. I would not be put of risky investments even if on a past investment I had made a big loss.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="notriskyinvestments" onChange={this.handleChange} checked={this.state.notriskyinvestments === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="notriskyinvestments" onChange={this.handleChange} checked={this.state.notriskyinvestments === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="notriskyinvestments" onChange={this.handleChange} checked={this.state.notriskyinvestments === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="notriskyinvestments" onChange={this.handleChange} checked={this.state.notriskyinvestments === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="notriskyinvestments" onChange={this.handleChange} checked={this.state.notriskyinvestments === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>5. I would rather have a predictable investment outcome than one that is potentially higher but unpredictable.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="predictableinvestments" onChange={this.handleChange} checked={this.state.predictableinvestments === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="predictableinvestments" onChange={this.handleChange} checked={this.state.predictableinvestments === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="predictableinvestments" onChange={this.handleChange} checked={this.state.predictableinvestments === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="predictableinvestments" onChange={this.handleChange} checked={this.state.predictableinvestments === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="predictableinvestments" onChange={this.handleChange} checked={this.state.predictableinvestments === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>6. I would consider investing in a risky investment for the excitement of seeing whether it goes up or down in value.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="considerriskyinvestments" onChange={this.handleChange} checked={this.state.considerriskyinvestments === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="considerriskyinvestments" onChange={this.handleChange} checked={this.state.considerriskyinvestments === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="considerriskyinvestments" onChange={this.handleChange} checked={this.state.considerriskyinvestments === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="considerriskyinvestments" onChange={this.handleChange} checked={this.state.considerriskyinvestments === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="considerriskyinvestments" onChange={this.handleChange} checked={this.state.considerriskyinvestments === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>7. I’m comfortable with uncertainty when investment my money.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="comfortable" onChange={this.handleChange} checked={this.state.comfortable === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="comfortable" onChange={this.handleChange} checked={this.state.comfortable === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="comfortable" onChange={this.handleChange} checked={this.state.comfortable === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="comfortable" onChange={this.handleChange} checked={this.state.comfortable === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="comfortable" onChange={this.handleChange} checked={this.state.comfortable === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>8. For me, part of investing is experiencing the ups and downs.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="upsdowns" onChange={this.handleChange} checked={this.state.upsdowns === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="upsdowns" onChange={this.handleChange} checked={this.state.upsdowns === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="upsdowns" onChange={this.handleChange} checked={this.state.upsdowns === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="upsdowns" onChange={this.handleChange} checked={this.state.upsdowns === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="upsdowns" onChange={this.handleChange} checked={this.state.upsdowns === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>9. In my view, you need to take risks to make money.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="makemoney" onChange={this.handleChange} checked={this.state.makemoney === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="makemoney" onChange={this.handleChange} checked={this.state.makemoney === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="makemoney" onChange={this.handleChange} checked={this.state.makemoney === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="makemoney" onChange={this.handleChange} checked={this.state.makemoney === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="makemoney" onChange={this.handleChange} checked={this.state.makemoney === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>10. I would get a thrill from making risky investments with my money.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="thrillriskyinvestments" onChange={this.handleChange} checked={this.state.thrillriskyinvestments === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="thrillriskyinvestments" onChange={this.handleChange} checked={this.state.thrillriskyinvestments === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="thrillriskyinvestments" onChange={this.handleChange} checked={this.state.thrillriskyinvestments === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="thrillriskyinvestments" onChange={this.handleChange} checked={this.state.thrillriskyinvestments === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="thrillriskyinvestments" onChange={this.handleChange} checked={this.state.thrillriskyinvestments === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>11. I would worry a great deal if I thought I would lose my money in an investment.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="greatdeal" onChange={this.handleChange} checked={this.state.greatdeal === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="greatdeal" onChange={this.handleChange} checked={this.state.greatdeal === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="greatdeal" onChange={this.handleChange} checked={this.state.greatdeal === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="greatdeal" onChange={this.handleChange} checked={this.state.greatdeal === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="greatdeal" onChange={this.handleChange} checked={this.state.greatdeal === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>


        <div className="multiChoice" >
          <p>12. I would worry about losing money on the stock market.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="stockmarket" onChange={this.handleChange} checked={this.state.stockmarket === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="stockmarket" onChange={this.handleChange} checked={this.state.stockmarket === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="stockmarket" onChange={this.handleChange} checked={this.state.stockmarket === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="stockmarket" onChange={this.handleChange} checked={this.state.stockmarket === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="stockmarket" onChange={this.handleChange} checked={this.state.stockmarket === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>13. In the first few months of my investment, I would be worried if its value declined significantly.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="fewmonths" onChange={this.handleChange} checked={this.state.fewmonths === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="fewmonths" onChange={this.handleChange} checked={this.state.fewmonths === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="fewmonths" onChange={this.handleChange} checked={this.state.fewmonths === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="fewmonths" onChange={this.handleChange} checked={this.state.fewmonths === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="fewmonths" onChange={this.handleChange} checked={this.state.fewmonths === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>14. I would probably invest a significant amount in a high-risk investment.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="investhighrisk" onChange={this.handleChange} checked={this.state.investhighrisk === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="investhighrisk" onChange={this.handleChange} checked={this.state.investhighrisk === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="investhighrisk" onChange={this.handleChange} checked={this.state.investhighrisk === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="investhighrisk" onChange={this.handleChange} checked={this.state.investhighrisk === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="investhighrisk" onChange={this.handleChange} checked={this.state.investhighrisk === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>15. I would be happy to accept large, short term falls in the value of my investments to maximise my potential longer-term returns.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="acceptlarge" onChange={this.handleChange} checked={this.state.acceptlarge === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="acceptlarge" onChange={this.handleChange} checked={this.state.acceptlarge === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="acceptlarge" onChange={this.handleChange} checked={this.state.acceptlarge === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="acceptlarge" onChange={this.handleChange} checked={this.state.acceptlarge === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="acceptlarge" onChange={this.handleChange} checked={this.state.acceptlarge === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>16. The idea that the value of my investments can be variable makes me anxious.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="anxiousinvesment" onChange={this.handleChange} checked={this.state.anxiousinvesment === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="anxiousinvesment" onChange={this.handleChange} checked={this.state.anxiousinvesment === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="anxiousinvesment" onChange={this.handleChange} checked={this.state.anxiousinvesment === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="anxiousinvesment" onChange={this.handleChange} checked={this.state.anxiousinvesment === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="anxiousinvesment" onChange={this.handleChange} checked={this.state.anxiousinvesment === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>17. Compared with other people I think I would be more relaxed about my investments losing value in the short term.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="relaxed" onChange={this.handleChange} checked={this.state.relaxed === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="relaxed" onChange={this.handleChange} checked={this.state.relaxed === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="relaxed" onChange={this.handleChange} checked={this.state.relaxed === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="relaxed" onChange={this.handleChange} checked={this.state.relaxed === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="relaxed" onChange={this.handleChange} checked={this.state.relaxed === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>18. I believe that I generally take bigger investment risks with my money than other people.</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="biggerinvesment" onChange={this.handleChange} checked={this.state.biggerinvesment === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="biggerinvesment" onChange={this.handleChange} checked={this.state.biggerinvesment === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="biggerinvesment" onChange={this.handleChange} checked={this.state.biggerinvesment === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="biggerinvesment" onChange={this.handleChange} checked={this.state.biggerinvesment === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="biggerinvesment" onChange={this.handleChange} checked={this.state.biggerinvesment === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <p><strong>Overall Score: </strong> {this.state.totalscore}</p><hr/>

        <div className="group">
            <label>Natural Risk Profile</label>
            <select disabled onChange={this.handleChange} name="riskprofile" value={this.state.riskprofile}>
                <option value="1">1 Low Risk</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 High Risk</option>
            </select>
        </div>

        <div className="row">
            <div className="g_grid_6">
                <h3>Time Frame Available</h3>
                <div className="group">
                    <label>How long will it be before you wish to access your funds?</label>
                    <select onChange={this.handleChange} name="timeframe" value={this.state.timeframe}>
                        <option value="0-3 years">0-3 years</option>
                        <option value="3-7 years">3-7 years</option>
                        <option value="7 years or more">7 years or more</option>
                    </select>
                </div>
            </div>
            <div className="g_grid_6">
                <h3>Investment Experience</h3>
                <div className="group">
                    <label>Investment Experience</label>
                    <select onChange={this.handleChange} name="investmentexperience" value={this.state.investmentexperience}>
                        <option value="None">None</option>
                        <option value="Basic">Basic</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Professional">Professional</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="group">
            <h3>Maximum Drawdown</h3>
            <label>This is the maximum fall in investment value you would be prepared to absorb in any 12-month period.</label>
            <select onChange={this.handleChange} name="maximudrawdown" value={this.state.maximudrawdown}>
                <option value="10%">10%</option>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
                <option value="40%">40%</option>
                <option value="50%">50%</option>
                <option value="60%">60%</option>
                <option value="70%">70%</option>
                <option value="80%">80%</option>
                <option value="90%">90%</option>
                <option value="100%">100%</option>
            </select>
        </div>
      
        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
            <ul>
              <li>What is the investment for? </li>
              <li>Will any withdrawal be as a lump sum or as income? Over what time frame will income be taken?</li>
              <li>Desired/Required return?</li>
              <li>Does the capacity for loss change the level of investment risk that can be onboarded?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>

        <div className="group">
            <label>Agreed Level of Risk</label>
            <input type="text" name="agreedlevel" onChange={this.handleChange} value={this.state.agreedlevel}></input>
        </div>

        <h2 className="center-text">Appendix</h2>
        <h2>1. Defensive</h2>
        <p>You are not prepared to take investment risk and it is very important that your capital is protected. This means you are prepared to accept lower long term returns to meet your risk criteria. A typical Defensive investor would invest mainly in cash and fixed interest investments.</p>
        <hr/>
        <h2>2. Very Cautious</h2>
        <p>You are prepared to take only a small amount of investment risk and capital protection is
important. This means that your portfolio will contain a small amount of riskier assets in
order to increase the chance of obtaining better long term returns. A typical Very Cautious
investor will be invested in fixed interest and cash and will also include an element of equities
and/or property. The range of assets provides diversification benefits to reduce the overall
risk.</p>
        <hr/>
        <h2>3. Cautious</h2>
        <p>You are prepared to take some investment risk in order to increase the chances of achieving
a reasonable return but would still like to ensure that capital protection is still considered. A
typical Cautious investor will be invested in a moderate amount of fixed interest, but with a
greater proportion in equities and property. In the short term there may also be some cash.</p>
        <hr/>
        <h2>4. Cautious Balanced</h2>
        <p>You are comfortable in taking some investment risk in order to increase the chances of
achieving a reasonable return but would still like to ensure that capital protection is still
considered. A typical Cautious Balanced investor will be invested in a moderate amount of
fixed interest, but with a greater proportion in equities and property. In the short term there
may also be some cash.
</p>
        <hr/>
        <h2>5. Balanced</h2>
        <p>You are prepared to take a reasonable amount of investment risk in order to increase the
chance of achieving a better return. Capital protection is less important to you than the
return on the investment. A typical Balanced investor will usually invest in a variety of assets
to obtain diversification. There would be a higher proportion of equities compared to fixed
interest and cash, and the range of assets provides diversification benefits.</p>
        <hr/>
        <h2>6. Balanced Growth</h2>
        <p>You are comfortable in taking a reasonable amount of investment risk in order to increase
the chance of achieving a better return. Capital protection is less important to you than the
return on the investment. A typical Balanced Growth investor will usually invest in a variety
of assets to obtain diversification. There would be a higher proportion of equities compared
to fixed interest and cash, and the range of assets provides diversification benefits.</p>
        <hr/>
        <h2>7. Growth</h2>
        <p>You are comfortable in taking a reasonable amount of investment risk in order to increase
the chance of achieving a better return. Capital protection is less important to you than the
return on the investment. A typical Growth investor will usually invest in a variety of assets to
obtain diversification. There would be a higher proportion of equities compared to fixed
interest and cash, and the range of assets provides diversification benefits</p>
        <hr/>
        <h2>8. Adventurous</h2>
        <p>You are prepared to take some risk with your investment in return for the prospect of the
improving longer term investment performance as short term capital protection is not
important. A typical Adventurous investor will be invested mainly in equities but with other
assets included to provide some diversification. There may be a small amount of specialised
equity within the portfolio</p>
        <hr/>
        <h2>9. Very Adventurous</h2>
        <p>You are comfortable in taking some risk with your investment in return for the prospect of
the improving longer term investment performance as short term capital protection is not
important. A typical Very Adventurous investor will be invested mainly in equities but with
other assets included to provide some diversification. There may be a small amount of
specialised equity within the portfolio.
</p>
        <hr/>
        <h2>10. Speculative</h2>
        <p>You are prepared to take greater risks with your investment in return for the prospect of the
highest longer term investment performance. You appreciate that over some periods of time
there can be significant falls, as well as rises, in the value of your investment and you may get
back less than you invest. This strategy holds significant risk in the shorter term. A typical
Speculative investor will be invested fully in equities or equity like instruments. There may be
a significant proportion of the investment in specialised equities.</p>
        <hr/>



        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Your Pension Transfer Attitude To Risk - Please attempt to answer each of the questions detailed below:</h4>
            <ul>
              <li>Why are you considering a transfer and why now? Has there been a 'driver' that has led you to review your peension?</li>
              <li>What do you believe transferring your scheme will allow you to achieve that could not be done leaving it where it is?</li>
              <li>Have you consider other options to meet these benefits?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_one" onChange={this.handleChange} value={this.state.attitudetorisk_one}></textarea>

            <hr/>

          <div className="adviserNotes">
            <ul>
              <li>What are your views on the RISKS of staying your scheme?</li>
              <li>What are your views on the BENEFITS of staying your scheme?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_two" onChange={this.handleChange} value={this.state.attitudetorisk_two}></textarea>

          <hr/>
          <div className="adviserNotes">
            <ul>
            <li>What are your views on the RISKS of transferring your scheme?</li>
            <li>What are your views on the BENEFITS of transferring your scheme?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_three" onChange={this.handleChange} value={this.state.attitudetorisk_three}></textarea>

          <hr/>
          <div className="adviserNotes">
            <ul>
              <li>How do you feel about giving up a regular secure income from you scheme, for an income that may not last throughout your retirement?</li>
              <li>Would you wish to discuss the options available to provide a secure income outside of the scheme pension?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_four" onChange={this.handleChange} value={this.state.attitudetorisk_four}></textarea>

          <hr/>
          <div className="adviserNotes">
            <ul>
              <li>Do you think you may need to make ad-hoc withdrawals from your pensionn, over and above your planned retirement income and/or cpital withdrawals? Could this lead to potential financial difficulties?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_five" onChange={this.handleChange} value={this.state.attitudetorisk_five}></textarea>

          <hr/>
          <div className="adviserNotes">
            <ul>
              <li>If, at the end of the process, we consider that a transfer isn't the right thing for you, what would that mean for you?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_six" onChange={this.handleChange} value={this.state.attitudetorisk_six}></textarea>

          <hr/>
          <div className="adviserNotes">
            <ul>
              <li>What experience do you have in managing investments? How do you feel about paying for advice on managing investments?</li>
            </ul>
          </div>
          <textarea name="attitudetorisk_seven" onChange={this.handleChange} value={this.state.attitudetorisk_seven}></textarea>

        </div>

        {/* <div className="group adviserGroup">
          
        </div>

        <div className="group adviserGroup">
          
        </div>

        <div className="group adviserGroup">
          
        </div>

        <div className="group adviserGroup">
          
        </div>

        <div className="group adviserGroup">
          
        </div>

        <div className="group adviserGroup">
          
        </div> */}



        
        <div className="row">
          <div className="group submit">
            <Link to="./capacity" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./attitude">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./capacity">
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

export default Riskprofiling;
