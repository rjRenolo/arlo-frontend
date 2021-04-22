import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('employment-store');

export class Employment extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           occupation1 : '',
           status1 : '',
           employer1 : '',
           description1 : '',
           basic1 : '',
           bonus1 : '',
           dividend1 : '',
           investment1 : '',
           pension1 : '',
           benefits1 : '',
           other1 : '',
           occupation2 : '',
           status2 : '',
           employer2 : '',
           description2 : '',
           basic2 : '',
           bonus2: '',
           dividend2: '',
           investment2 : '',
           pension2 : '',
           benefits2 : '',
           other2: '',
           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    get('occupation1', dbStore).then(val =>  
      this.setState({ occupation1 : val})
    );
    get('status1', dbStore).then(val =>  
      this.setState({ status1 : val})
    );
    get('employer1', dbStore).then(val =>  
      this.setState({ employer1 : val})
    );
    get('description1', dbStore).then(val =>  
      this.setState({ description1 : val})
    );
    get('basic1', dbStore).then(val =>  
      this.setState({ basic1 : val})
    );
    get('bonus1', dbStore).then(val =>  
      this.setState({ bonus1: val})
    );
    get('dividend1', dbStore).then(val =>  
      this.setState({ dividend1 : val})
    );
    get('investment1', dbStore).then(val =>  
      this.setState({ investment1 : val})
    );
    get('pension1', dbStore).then(val =>  
      this.setState({ pension1 : val})
    );
    get('benefits1', dbStore).then(val =>  
      this.setState({ benfits1 : val})
    );
    get('other1', dbStore).then(val =>  
      this.setState({ other1 : val})
    );
    get('occupation2', dbStore).then(val =>  
      this.setState({ occupation2: val})
    );
    get('status2', dbStore).then(val =>  
      this.setState({ status2 : val})
    );
    get('employer2', dbStore).then(val =>  
      this.setState({ employer2 : val})
    );
    get('description2', dbStore).then(val =>  
      this.setState({ description2 : val})
    );
    get('basic2', dbStore).then(val =>  
      this.setState({ basic2 : val})
    );
    get('bonus2', dbStore).then(val =>  
      this.setState({ bonus2: val})
    );
    get('dividend2', dbStore).then(val =>  
      this.setState({ dividend2 : val})
    );
    get('investment2', dbStore).then(val =>  
      this.setState({ investment2 : val})
    );
    get('pension2', dbStore).then(val =>  
      this.setState({ pension2 : val})
    );
    get('benefits2', dbStore).then(val =>  
      this.setState({ benfits2 : val})
    );
    get('other2', dbStore).then(val =>  
      this.setState({ other2 : val})
    );
    get('notes', dbStore).then(val =>  
      this.setState({ notes: val})
    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save to indexeddb
    set('occupation1', this.state.occupation1, dbStore)
    set('status1', this.state.status1, dbStore);
    set('employer1', this.state.employer1, dbStore);
    set('description1', this.state.description1, dbStore);
    set('basic1', this.state.basic1, dbStore)
    set('bonus1', this.state.bonus1, dbStore);
    set('dividend1', this.state.dividend1, dbStore);
    set('investment1', this.state.investment1, dbStore);
    set('pension1', this.state.pension1, dbStore)
    set('benefits1', this.state.benefits1, dbStore);
    set('other1', this.state.other1, dbStore);
    set('occupation2', this.state.occupation2, dbStore)
    set('status2', this.state.status2, dbStore);
    set('employer2', this.state.employer2, dbStore);
    set('description2', this.state.description2, dbStore);
    set('basic2', this.state.basic2, dbStore)
    set('bonus2', this.state.bonus2, dbStore);
    set('dividend2', this.state.dividend2, dbStore);
    set('investment2', this.state.investment2, dbStore);
    set('pension2', this.state.pension2, dbStore)
    set('benefits2', this.state.benefits2, dbStore);
    set('other2', this.state.other2, dbStore);
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
          <h1>Employment</h1>
          <h2>Status and Sources of Income</h2>
        </div>

        <div className="row">

          <div className="g_grid_6">
            <h3>Client 1</h3>
            <div className="group">
              <label>Occupation</label>
              <input type="text" name="occupation1" value={this.state.occupation1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Employment Status</label>
              <input type="text" name="status1" placehoder="e.g. employed, self-employed, retired" value={this.state.status1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Name of Employer</label>
              <input type="text" name="employer1" value={this.state.employer1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Brief description of the nature of your business</label>
              <textarea name="description1" value={this.state.description1} onChange={this.handleChange}></textarea>
            </div>
            <div className="group">
              <label>Basic earned income</label>
              <input type="text" name="basic1" placeholder="(pa, pm, pw)" value={this.state.basic1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Bonus or variable payments</label>
              <input type="text" name="bonus1"  value={this.state.bonus1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Dividend income</label>
              <input type="text" name="dividend1"  value={this.state.dividend1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Other investment income</label>
              <input type="text" name="investment1"  value={this.state.investment1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Pension income</label>
              <input type="text" name="pension1"  value={this.state.pension1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>State benefits or allowances</label>
              <input type="text" name="benefits1"  value={this.state.benefits1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Other (please state)</label>
              <input type="text" name="other1"  value={this.state.other1} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="g_grid_6">
            <h3>Client 2</h3>
            <div className="group">
              <label>Occupation</label>
              <input type="text" name="occupation2" value={this.state.occupation2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Employment Status</label>
              <input type="text" name="status2" placehoder="e.g. employed, self-employed, retired" value={this.state.status2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Name of Employer</label>
              <input type="text" name="employer2" value={this.state.employer2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Brief description of the nature of your business</label>
              <textarea name="description2" value={this.state.description2} onChange={this.handleChange}></textarea>
            </div>
            <div className="group">
              <label>Basic earned income</label>
              <input type="text" name="basic2" placeholder="(pa, pm, pw)" value={this.state.basic2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Bonus or variable payments</label>
              <input type="text" name="bonus2"  value={this.state.bonus2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Dividend income</label>
              <input type="text" name="dividend2"  value={this.state.dividend2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Other investment income</label>
              <input type="text" name="investment2"  value={this.state.investment2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Pension income</label>
              <input type="text" name="pension2"  value={this.state.pension2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>State benefits or allowances</label>
              <input type="text" name="benefits2"  value={this.state.benefits2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Other (please state)</label>
              <input type="text" name="other2"  value={this.state.other2} onChange={this.handleChange}/>
            </div>
          </div>
          
        </div>

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
            <ul>
              <li>Is the Employer or Employee Status expected to change?</li>
              <li>Time in current role / employment history</li>
              <li>Any changes within salary package (e.g. Car, Pension, Share Schemes)?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./income" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./family">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./income">
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

export default Employment;
