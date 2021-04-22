import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('personal-store');

export class Personal extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           title1 : '',
           forename1 : '',
           surname1 : '',
           status1 : '',
           dob1 : '',
           address1 : '',
           phone1 : '',
           mobile1 : '',
           email1 : '',
           nationality1 : '',
           residence1 : '',
           taxcode1 : '',
           ninumber1 : '',
           title2 : '',
           forename2 : '',
           surname2 : '',
           status2 : '',
           dob2 : '',
           address2 : '',
           phone2 : '',
           mobile2 : '',
           email2 : '',
           nationality2 : '',
           residence2 : '',
           taxcode2 : '',
           ninumber2 : '',
           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    get('title1', dbStore).then(val =>  
      this.setState({ title1 : val})
    );
    get('forename1', dbStore).then(val =>  
      this.setState({ forename1 : val})
    );
    get('surname1', dbStore).then(val =>  
      this.setState({ surname1 : val})
    );
    get('status1', dbStore).then(val =>  
      this.setState({ status1 : val})
    );
    get('dob1', dbStore).then(val =>  
      this.setState({ dob1 : val})
    );
    get('address1', dbStore).then(val =>  
      this.setState({ address1 : val})
    );
    get('phone1', dbStore).then(val =>  
      this.setState({ phone1 : val})
    );
    get('mobile1', dbStore).then(val =>  
      this.setState({ mobile1 : val})
    );
    get('email1', dbStore).then(val =>  
      this.setState({ email1 : val})
    );
    get('nationality1', dbStore).then(val =>  
      this.setState({ nationality1 : val})
    );
    get('residence1', dbStore).then(val =>  
      this.setState({ residence1 : val})
    );
    get('taxcode1', dbStore).then(val =>  
      this.setState({ taxcode1 : val})
    );
    get('ninumber1', dbStore).then(val =>  
      this.setState({ ninumber1 : val})
    );
    get('title2', dbStore).then(val =>  
      this.setState({ title2 : val})
    );
    get('forename2', dbStore).then(val =>  
      this.setState({ forename2 : val})
    );
    get('surname2', dbStore).then(val =>  
      this.setState({ surname2 : val})
    );
    get('status2', dbStore).then(val =>  
      this.setState({ status2 : val})
    );
    get('dob2', dbStore).then(val =>  
      this.setState({ dob2 : val})
    );
    get('address2', dbStore).then(val =>  
      this.setState({ address2 : val})
    );
    get('phone2', dbStore).then(val =>  
      this.setState({ phone2 : val})
    );
    get('mobile2', dbStore).then(val =>  
      this.setState({ mobile2 : val})
    );
    get('email2', dbStore).then(val =>  
      this.setState({ email2 : val})
    );
    get('nationality2', dbStore).then(val =>  
      this.setState({ nationality2 : val})
    );
    get('residence2', dbStore).then(val =>  
      this.setState({ residence2 : val})
    );
    get('taxcode2', dbStore).then(val =>  
      this.setState({ taxcode2 : val})
    );
    get('ninumber2', dbStore).then(val =>  
      this.setState({ ninumber2 : val})
    );
    get('notes', dbStore).then(val =>  
      this.setState({ notes : val})
    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save to indexeddb
    set('title1', this.state.title1, dbStore)
    set('forename1', this.state.forename1, dbStore);
    set('surname1', this.state.surname1, dbStore);
    set('status1', this.state.status1, dbStore);
    set('dob1', this.state.dob1, dbStore);
    set('address1', this.state.address1, dbStore);
    set('phone1', this.state.phone1, dbStore);
    set('mobile1', this.state.mobile1, dbStore);
    set('email1', this.state.email1, dbStore);
    set('nationality1', this.state.nationality1, dbStore);
    set('residence1', this.state.residence1, dbStore);
    set('taxcode1', this.state.taxcode1, dbStore);
    set('ninumber1', this.state.ninumber1, dbStore);
    set('title2', this.state.title2, dbStore)
    set('forename2', this.state.forename2, dbStore);
    set('surname2', this.state.surname2, dbStore);
    set('status2', this.state.status2, dbStore);
    set('dob2', this.state.dob2, dbStore);
    set('address2', this.state.address2, dbStore);
    set('phone2', this.state.phone2, dbStore);
    set('mobile2', this.state.mobile2, dbStore);
    set('email2', this.state.email2, dbStore);
    set('nationality2', this.state.nationality2, dbStore);
    set('residence2', this.state.residence2, dbStore);
    set('taxcode2', this.state.taxcode2, dbStore);
    set('ninumber2', this.state.ninumber2, dbStore);
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
          <h1>Core fact find</h1>
          <h2>Personal &amp; contact details</h2>
        </div>

        <div className="row">
          <div className="g_grid_6">
            <h3>Client 1</h3>
            <div className="group">
              <label>Title</label>
              <input type="text" name="title1" value={this.state.title1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Forename(s)</label>
              <input type="text" name="forename1" value={this.state.forename1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Surname</label>
              <input type="text" name="surname1" value={this.state.surname1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Marital Status</label>
              <input type="text" name="status1" value={this.state.status1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Date of Birth</label>
              <input type="text" name="dob1" value={this.state.dob1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Home address</label>
              <textarea name="address1" value={this.state.address1} onChange={this.handleChange}></textarea>
            </div>
            <div className="group">
              <label>Home Phone Number</label>
              <input type="text" name="phone1" value={this.state.phone1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Mobile Number</label>
              <input type="text" name="mobile1" value={this.state.mobile1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Email address</label>
              <input type="text" name="email1" value={this.state.email1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Nationality</label>
              <input type="text" name="nationality1" value={this.state.nationality1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Residence for tax</label>
              <input type="text" name="residence1" value={this.state.residence1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Tax code</label>
              <input type="text" name="taxcode1" value={this.state.taxcode1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>NI number</label>
              <input type="text" name="ninumber1" value={this.state.ninumber1} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="g_grid_6">
            <h3>Client 2</h3>
            <div className="group">
              <label>Title</label>
              <input type="text" name="title2" value={this.state.title2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Forename(s)</label>
              <input type="text" name="forename2" value={this.state.forename2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Surname</label>
              <input type="text" name="surname2" value={this.state.surname2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Marital Status</label>
              <input type="text" name="status2" value={this.state.status2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Date of Birth</label>
              <input type="text" name="dob2" value={this.state.dob2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Home address</label>
              <textarea name="address2" value={this.state.address2} onChange={this.handleChange}></textarea>
            </div>
            <div className="group">
              <label>Home Phone Number</label>
              <input type="text" name="phone2" value={this.state.phone2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Mobile Number</label>
              <input type="text" name="mobile2" value={this.state.mobile2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Email address</label>
              <input type="text" name="email2" value={this.state.email2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Nationality</label>
              <input type="text" name="nationality2" value={this.state.nationality2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Residence for tax</label>
              <input type="text" name="residence2" value={this.state.residence2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Tax code</label>
              <input type="text" name="taxcode2" value={this.state.taxcode2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>NI number</label>
              <input type="text" name="ninumber2" value={this.state.ninumber2} onChange={this.handleChange}/>
            </div>
          </div>
        </div>

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
            <ul>
              <li>Has the Disclosure Document been provided?</li>
              <li>Has the Service and Fee Agreement been updated?</li>
              <li>Has all the Fact Find information (e.g. ATR/RPQ) been updated?</li>
              <li>How does this meeting link to the current Suitability Report (where applicable)?</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./family" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">

            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./family">
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

export default Personal;
