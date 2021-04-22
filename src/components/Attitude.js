import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('attitude-store');

export class Attitude extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           financialsuccess : '',
           makemoney : '',
           financialrisks : '',
           certainty : '',
           risesfalls : '',
           concern : '',
           avoidinvestments : '',
           steadyreturn : '',
           opportunity : '',
           avoidlosses : '',
           stress : '',
           regret : '',
           myself : '',
           riskterm : '',
           risktaking : '',
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
          <h1>Attitude to Risk Questionnaire</h1>
          <h2>&nbsp;</h2>
        </div>

        <p>These questions will help you and your adviser to better understand how you think about risk. There are no right or wrong answers, you just need to select the answer that is the best match for how you feel.</p>

        <div className="multiChoice" >
          <p>1. To achieve financial success,I would take financial risks</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="financialsuccess" onChange={this.handleChange} checked={this.state.financialsuccess === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="financialsuccess" onChange={this.handleChange} checked={this.state.financialsuccess === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="financialsuccess" onChange={this.handleChange} checked={this.state.financialsuccess === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="financialsuccess" onChange={this.handleChange} checked={this.state.financialsuccess === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="financialsuccess" onChange={this.handleChange} checked={this.state.financialsuccess === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>2. I would take more financial risk if there was a chance I could make a lot of money</p>
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
          <p>3. I am the kind of person who takes financial risks</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="financialrisks" onChange={this.handleChange} checked={this.state.financialrisks === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="financialrisks" onChange={this.handleChange} checked={this.state.financialrisks === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="financialrisks" onChange={this.handleChange} checked={this.state.financialrisks=== "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="financialrisks" onChange={this.handleChange} checked={this.state.financialrisks === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="financialrisks" onChange={this.handleChange} checked={this.state.financialrisks === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>4. I prefer certainty about the future value of my investments, even if it means making less money</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="certainty" onChange={this.handleChange} checked={this.state.certainty === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="certainty" onChange={this.handleChange} checked={this.state.certainty === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="certainty" onChange={this.handleChange} checked={this.state.certainty === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="certainty" onChange={this.handleChange} checked={this.state.certainty === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="certainty" onChange={this.handleChange} checked={this.state.certainty === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>5. Rises and falls in the value of my investments would not worry me</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="risesfalls" onChange={this.handleChange} checked={this.state.risesfalls === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="risesfalls" onChange={this.handleChange} checked={this.state.risesfalls === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="risesfalls" onChange={this.handleChange} checked={this.state.risesfalls === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="risesfalls" onChange={this.handleChange} checked={this.state.risesfalls === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="risesfalls" onChange={this.handleChange} checked={this.state.risesfalls === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>6. If the value of my investment fell, even for a short time, it would concern me</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="concern" onChange={this.handleChange} checked={this.state.concern === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="concern" onChange={this.handleChange} checked={this.state.concern === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="concern" onChange={this.handleChange} checked={this.state.concern === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="concern" onChange={this.handleChange} checked={this.state.concern === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="concern" onChange={this.handleChange} checked={this.state.concern === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>7. I would generally avoid investments whose values rise and fall over time</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="avoidinvestments" onChange={this.handleChange} checked={this.state.avoidinvestments === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="avoidinvestments" onChange={this.handleChange} checked={this.state.avoidinvestments === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="avoidinvestments" onChange={this.handleChange} checked={this.state.avoidinvestments === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="avoidinvestments" onChange={this.handleChange} checked={this.state.avoidinvestments === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="avoidinvestments" onChange={this.handleChange} checked={this.state.avoidinvestments === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>8. I would frequently choose investments offering a steady return rather than those which could rise a lot in value</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="steadyreturn" onChange={this.handleChange} checked={this.state.steadyreturn === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="steadyreturn" onChange={this.handleChange} checked={this.state.steadyreturn === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="steadyreturn" onChange={this.handleChange} checked={this.state.steadyreturn === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="steadyreturn" onChange={this.handleChange} checked={this.state.steadyreturn === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="steadyreturn" onChange={this.handleChange} checked={this.state.steadyreturn === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>9. Missing an investment opportunity concerns me more than making a loss</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="opportunity" onChange={this.handleChange} checked={this.state.opportunity === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="opportunity" onChange={this.handleChange} checked={this.state.opportunity === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="opportunity" onChange={this.handleChange} checked={this.state.opportunity === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="opportunity" onChange={this.handleChange} checked={this.state.opportunity === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="opportunity" onChange={this.handleChange} checked={this.state.opportunity === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>10. I care more about avoiding losses than making money</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="avoidlosses" onChange={this.handleChange} checked={this.state.avoidlosses === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="avoidlosses" onChange={this.handleChange} checked={this.state.avoidlosses === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="avoidlosses" onChange={this.handleChange} checked={this.state.avoidlosses === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="avoidlosses" onChange={this.handleChange} checked={this.state.avoidlosses === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="avoidlosses" onChange={this.handleChange} checked={this.state.avoidlosses === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>11. Taking financial risks causes me a lot of stress</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="stress" onChange={this.handleChange} checked={this.state.stress === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="stress" onChange={this.handleChange} checked={this.state.stress === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="stress" onChange={this.handleChange} checked={this.state.stress === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="stress" onChange={this.handleChange} checked={this.state.stress === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="stress" onChange={this.handleChange} checked={this.state.stress === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>12. I would regret deciding not to take a risky investment opportunity if it then performed well</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly disagree" name="regret" onChange={this.handleChange} checked={this.state.regret === "Strongly disagree"}/> Strongly disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disagree" name="regret" onChange={this.handleChange} checked={this.state.regret === "Disagree"}/> Disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Neither agree nor disagree" name="regret" onChange={this.handleChange} checked={this.state.regret === "Neither agree nor disagree"}/> Neither agree nor disagree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Agree" name="regret" onChange={this.handleChange} checked={this.state.regret === "Agree"}/> Agree</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Strongly agree" name="regret" onChange={this.handleChange} checked={this.state.regret === "Strongly agree"}/> Strongly agree</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>13. When considering investing, I would describe myself as:</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Very concerned" name="myself" onChange={this.handleChange} checked={this.state.myself === "Very concerned"}/> Very concerned</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Slightly concerned" name="myself" onChange={this.handleChange} checked={this.state.myself === "Slightly concerned"}/> Slightly concerned</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Not concerned" name="myself" onChange={this.handleChange} checked={this.state.myself === "Not concerned"}/> Not concerned</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Cautiously optimistic" name="myself" onChange={this.handleChange} checked={this.state.myself === "Cautiously optimistic"}/> Cautiously optimistic</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Very optimistic" name="myself" onChange={this.handleChange} checked={this.state.myself === "Very optimistic"}/> Very optimistic</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>14. The term I most closely associate with financial risk is:</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Excitement" name="riskterm" onChange={this.handleChange} checked={this.state.riskterm === "Excitement"}/> Excitement</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Opportunity" name="riskterm" onChange={this.handleChange} checked={this.state.riskterm === "Opportunity"}/> Opportunity</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Necessity" name="riskterm" onChange={this.handleChange} checked={this.state.riskterm === "Necessity"}/> Necessity</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Worry" name="riskterm" onChange={this.handleChange} checked={this.state.riskterm === "Worry"}/> Worry</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="Disaster" name="riskterm" onChange={this.handleChange} checked={this.state.riskterm === "Disaster"}/> Disaster</label>
          </div>
        </div>

        <div className="multiChoice" >
          <p>15. The statement about risk-taking that best describes me is:</p>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I take risks at opportunity" name="risktaking" onChange={this.handleChange} checked={this.state.risktaking === "I take risks at opportunity"}/> I take risks at opportunity</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I often take risks" name="risktaking" onChange={this.handleChange} checked={this.state.risktaking === "I often take risks"}/> I often take risks</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I sometimes take risks" name="risktaking" onChange={this.handleChange} checked={this.state.risktaking === "I sometimes take risks"}/> I sometimes take risks</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I very rarely take risks" name="risktaking" onChange={this.handleChange} checked={this.state.risktaking === "I very rarely take risks"}/> I very rarely take risks</label>
          </div>
          <div className="group checkboxGroup">
            <label><input type="radio" value="I never take risks" name="risktaking" onChange={this.handleChange} checked={this.state.risktaking === "I never take risks"}/> I never take risks</label>
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
            <Link to="./risk-profiling" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./investing">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./risk-profiling">
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

export default Attitude;
