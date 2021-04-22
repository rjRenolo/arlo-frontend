import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('whatyouown-store');

export class Whatyouown extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           home1 : '',
           properties1 : '',
           bankaccount1 : '',
           savings1 : '',
           pension1 : '',
           isa1 : '',
           trusts1 : '',
           bonds1 : '',
           shares1: '',
           vct1 : '',
           other1 : '',
           home2 : '',
           properties2 : '',
           bankaccount2 : '',
           savings2 : '',
           pension2 : '',
           isa2 : '',
           trusts2 : '',
           bonds2 : '',
           shares2: '',
           vct2 : '',
           other2 : '',
           home3 : '',
           properties3 : '',
           bankaccount3 : '',
           savings3 : '',
           pension3 : '',
           isa3 : '',
           trusts3 : '',
           bonds3 : '',
           shares3: '',
           vct3 : '',
           other3 : '',
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
          <h1>What you own</h1>
          <h2>&nbsp;</h2>
        </div>

        <div className="row">

          <div className="g_grid_4">

            <h3>Client 1</h3>
            
            <div className="group">
              <label>Home</label>
              <input type="text" name="home1" onChange={this.handleChange} value={this.state.home1}/>
            </div>

            <div className="group">
              <label>Other properties</label>
              <input type="text" name="properties1" onChange={this.handleChange} value={this.state.properties1}/>
            </div>

            <div className="group">
              <label>Bank account and deposit holdings</label>
              <input type="text" name="bankaccount1" onChange={this.handleChange} value={this.state.bankaccount1}/>
            </div>

            <div className="group">
              <label>National savings</label>
              <input type="text" name="savings1" onChange={this.handleChange} value={this.state.savings1}/>
            </div>

            <div className="group">
              <label>Value of pension plans</label>
              <input type="text" name="pension1" onChange={this.handleChange} value={this.state.pension1}/>
            </div>

            <div className="group">
              <label>ISA</label>
              <input type="text" name="isa1" onChange={this.handleChange} value={this.state.isa1}/>
            </div>

            <div className="group">
              <label>Unit trusts or investment trusts</label>
              <input type="text" name="trusts1" onChange={this.handleChange} value={this.state.trusts1}/>
            </div>

            <div className="group">
              <label>Investment bonds</label>
              <input type="text" name="bonds1" onChange={this.handleChange} value={this.state.bonds1}/>
            </div>

            <div className="group">
              <label>Share / equities holdings</label>
              <input type="text" name="shares1" onChange={this.handleChange} value={this.state.shares1}/>
            </div>

            <div className="group">
              <label>VCT / EIS / EZT</label>
              <input type="text" name="vct1" onChange={this.handleChange} value={this.state.vct1}/>
            </div>

            <div className="group">
              <label>Other</label>
              <input type="text" name="other1" onChange={this.handleChange} value={this.state.other1}/>
            </div>

          </div>

          <div className="g_grid_4">

            <h3>Client 2</h3>
            
            <div className="group">
              <label>Home</label>
              <input type="text" name="home2" onChange={this.handleChange} value={this.state.home2}/>
            </div>

            <div className="group">
              <label>Other properties</label>
              <input type="text" name="properties2" onChange={this.handleChange} value={this.state.properties2}/>
            </div>

            <div className="group">
              <label>Bank account and deposit holdings</label>
              <input type="text" name="bankaccount2" onChange={this.handleChange} value={this.state.bankaccount2}/>
            </div>

            <div className="group">
              <label>National savings</label>
              <input type="text" name="savings2" onChange={this.handleChange} value={this.state.savings2}/>
            </div>

            <div className="group">
              <label>Value of pension plans</label>
              <input type="text" name="pension2" onChange={this.handleChange} value={this.state.pension2}/>
            </div>

            <div className="group">
              <label>ISA</label>
              <input type="text" name="isa2" onChange={this.handleChange} value={this.state.isa2}/>
            </div>

            <div className="group">
              <label>Unit trusts or investment trusts</label>
              <input type="text" name="trusts2" onChange={this.handleChange} value={this.state.trusts2}/>
            </div>

            <div className="group">
              <label>Investment bonds</label>
              <input type="text" name="bonds2" onChange={this.handleChange} value={this.state.bonds2}/>
            </div>

            <div className="group">
              <label>Share / equities holdings</label>
              <input type="text" name="shares2" onChange={this.handleChange} value={this.state.shares2}/>
            </div>

            <div className="group">
              <label>VCT / EIS / EZT</label>
              <input type="text" name="vct2" onChange={this.handleChange} value={this.state.vct2}/>
            </div>

            <div className="group">
              <label>Other</label>
              <input type="text" name="other2" onChange={this.handleChange} value={this.state.other2}/>
            </div>

          </div>

          <div className="g_grid_4">

            <h3>Joint</h3>
            
            <div className="group">
              <label>Home</label>
              <input type="text" name="home3" onChange={this.handleChange} value={this.state.home3}/>
            </div>

            <div className="group">
              <label>Other properties</label>
              <input type="text" name="properties3" onChange={this.handleChange} value={this.state.properties3}/>
            </div>

            <div className="group">
              <label>Bank account and deposit holdings</label>
              <input type="text" name="bankaccount3" onChange={this.handleChange} value={this.state.bankaccount3}/>
            </div>

            <div className="group">
              <label>National savings</label>
              <input type="text" name="savings3" onChange={this.handleChange} value={this.state.savings3}/>
            </div>

            <div className="group">
              <label>Value of pension plans</label>
              <input type="text" name="pension3" onChange={this.handleChange} value={this.state.pension3}/>
            </div>

            <div className="group">
              <label>ISA</label>
              <input type="text" name="isa3" onChange={this.handleChange} value={this.state.isa3}/>
            </div>

            <div className="group">
              <label>Unit trusts or investment trusts</label>
              <input type="text" name="trusts3" onChange={this.handleChange} value={this.state.trusts3}/>
            </div>

            <div className="group">
              <label>Investment bonds</label>
              <input type="text" name="bonds3" onChange={this.handleChange} value={this.state.bonds3}/>
            </div>

            <div className="group">
              <label>Share / equities holdings</label>
              <input type="text" name="shares3" onChange={this.handleChange} value={this.state.shares3}/>
            </div>

            <div className="group">
              <label>VCT / EIS / EZT</label>
              <input type="text" name="vct3" onChange={this.handleChange} value={this.state.vct3}/>
            </div>

            <div className="group">
              <label>Other</label>
              <input type="text" name="other3" onChange={this.handleChange} value={this.state.other3}/>
            </div>

          </div>

        </div>

        

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>

            <p>NOTE : If you prefer, we are happy to accept a separate record of your investments (e.g. spreadsheets, valuations etc.) which can be attached to this document for ease of reference.</p>

            <ul>
              <li>Is a house move in prospect (timescale)?</li>
              <li>Any rented property considerations?</li>
              <li>Any anticipated future inheritances</li>
              <li>Will/LPA details and any IHT considerations (Gifting, to or from)?</li>
              <li>Are clients assets arranged relevant to their current circumstances?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./whatyouowe" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./thirdpartyadvice">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./whatyouowe">
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

export default Whatyouown;
