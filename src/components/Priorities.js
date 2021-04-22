import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('priorities-store');

export class Priorities extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           guaranteed1 : '',
           cash1 : '',
           spouse1 : '',
           lumpsum1 : '',
           retire1 : '',
           flexibility1 : '',
           planning1 : '',
           consolidation1 : '',
           breakties1 : '',
           growth1 : '',
           currency1 : '',
           guaranteed2 : '',
           cash2 : '',
           spouse2 : '',
           lumpsum2 : '',
           retire2 : '',
           flexibility2 : '',
           planning2 : '',
           consolidation2 : '',
           breakties2 : '',
           growth2 : '',
           currency2 : '',
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

    const numbers = ['Select' ,'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    return (
      <div className="wrapper">

        <div className="titleBlock">
          <h1>Client priorities</h1>
          <h2>Pensions &amp; retirement</h2>
        </div>

        <p>Please number from 1-11 with 1 being highest priority</p>

        <div className="row">

          <div className="g_grid_6">

            <h3>Client 1</h3>
            
            <div className="group">
              <label>Certainty of pension benefits / Guaranteed Income</label>
              <select name="guaranteed1" onChange={this.handleChange} value={this.state.guaranteed1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Maximising Tax-Free Cash*</label>
              <select name="cash1" onChange={this.handleChange} value={this.state.cash1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Provision of a spouse’s pension</label>
              <select name="spouse1" onChange={this.handleChange} value={this.state.spouse1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Provision of lump sum death benefits / legacy</label>
              <select name="lumpsum1" onChange={this.handleChange} value={this.state.lumpsum1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Ability to retire early</label>
              <select name="retire1" onChange={this.handleChange} value={this.state.retire1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Flexibility to vary and control retirement income</label>
              <select name="flexibility1" onChange={this.handleChange} value={this.state.flexibility1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Tax planning in retirement</label>
              <select name="planning1" onChange={this.handleChange} value={this.state.planning1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Consolidation of pension funds</label>
              <select name="consolidation1" onChange={this.handleChange} value={this.state.consolidation1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Break ties with scheme (e.g. due to deficit)</label>
              <select name="breakties1" onChange={this.handleChange} value={this.state.breakties1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Opportunity for investment growth</label>
              <select name="growth1" onChange={this.handleChange} value={this.state.growth1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Currency consideration / minimising currency risk**</label>
              <select name="currency1" onChange={this.handleChange} value={this.state.currency1}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>
          </div>

          <div className="g_grid_6">

            <h3>Client 2</h3>
            
            <div className="group">
              <label>Certainty of pension benefits / Guaranteed Income</label>
              <select name="guaranteed2" onChange={this.handleChange} value={this.state.guaranteed2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Maximising Tax-Free Cash*</label>
              <select name="cash2" onChange={this.handleChange} value={this.state.cash2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Provision of a spouse’s pension</label>
              <select name="spouse2" onChange={this.handleChange} value={this.state.spouse2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Provision of lump sum death benefits / legacy</label>
              <select name="lumpsum2" onChange={this.handleChange} value={this.state.lumpsum2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Ability to retire early</label>
              <select name="retire2" onChange={this.handleChange} value={this.state.retire2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Flexibility to vary and control retirement income</label>
              <select name="flexibility2" onChange={this.handleChange} value={this.state.flexibility2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Tax planning in retirement</label>
              <select name="planning2" onChange={this.handleChange} value={this.state.planning2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Consolidation of pension funds</label>
              <select name="consolidation2" onChange={this.handleChange} value={this.state.consolidation2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Break ties with scheme (e.g. due to deficit)</label>
              <select name="breakties2" onChange={this.handleChange} value={this.state.breakties2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Opportunity for investment growth</label>
              <select name="growth2" onChange={this.handleChange} value={this.state.growth2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>

            <div className="group">
              <label>Currency consideration / minimising currency risk**</label>
              <select name="currency2" onChange={this.handleChange} value={this.state.currency2}>

                {Object.keys(numbers).map((k, i) => (
                  <option key={numbers[k]} value={numbers[k]}>{numbers[k]}</option>
                ))}

              </select>
            </div>
          </div>

        </div>

        

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>

            <p><strong>Currency Risk**</strong></p>
            <p>If living overseas, a defined benefit pension would be payable in GBP. If this is different than the currency of the client’s outgoings and expenditure, there may be fluctuations due to currency conversion. Would they prefer that their pension is paid in the same currency as their retirement outgoings? If so, please provide their view on this and confirm how important this factor is.</p>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./thirdpartyadvice" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./softfacts">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./thirdpartyadvice">
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

export default Priorities;
