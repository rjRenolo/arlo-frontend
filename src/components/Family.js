import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('family-store');

export class Family extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           name1 : '',
           relationship1 : '',
           dob1 : '',
           dependent1 : 'Yes',
           name2 : '',
           relationship2 : '',
           dob2 : '',
           dependent2 : 'Yes',
           name3 : '',
           relationship3 : '',
           dob3 : '',
           dependent3 : 'Yes',
           name4 : '',
           relationship4 : '',
           dob4 : '',
           dependent4 : 'Yes',
           name5 : '',
           relationship5 : '',
           dob5 : '',
           dependent5 : 'Yes',
           name6 : '',
           relationship6 : '',
           dob6 : '',
           dependent6 : 'Yes',
           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    get('name1', dbStore).then(val =>  
      this.setState({ name1 : val})
    );
    get('dob1', dbStore).then(val =>  
      this.setState({ dob1 : val})
    );
    get('relationship1', dbStore).then(val =>  
      this.setState({ relationship1 : val})
    );
    get('dependent1', dbStore).then(val =>  
      this.setState({ dependent1 : val})
    );
    get('name2', dbStore).then(val =>  
      this.setState({ name2 : val})
    );
    get('dob2', dbStore).then(val =>  
      this.setState({ dob2 : val})
    );
    get('relationship2', dbStore).then(val =>  
      this.setState({ relationship2 : val})
    );
    get('dependent2', dbStore).then(val =>  
      this.setState({ dependent2 : val})
    );
    get('name3', dbStore).then(val =>  
      this.setState({ name3 : val})
    );
    get('dob3', dbStore).then(val =>  
      this.setState({ dob3 : val})
    );
    get('relationship3', dbStore).then(val =>  
      this.setState({ relationship3 : val})
    );
    get('dependent3', dbStore).then(val =>  
      this.setState({ dependent3 : val})
    );
    get('name4', dbStore).then(val =>  
      this.setState({ name4 : val})
    );
    get('dob4', dbStore).then(val =>  
      this.setState({ dob4 : val})
    );
    get('relationship4', dbStore).then(val =>  
      this.setState({ relationship4 : val})
    );
    get('dependent4', dbStore).then(val =>  
      this.setState({ dependent4 : val})
    );
    get('name5', dbStore).then(val =>  
      this.setState({ name5 : val})
    );
    get('dob5', dbStore).then(val =>  
      this.setState({ dob5 : val})
    );
    get('relationship5', dbStore).then(val =>  
      this.setState({ relationship5 : val})
    );
    get('dependent5', dbStore).then(val =>  
      this.setState({ dependent5 : val})
    );
    get('name6', dbStore).then(val =>  
      this.setState({ name6 : val})
    );
    get('dob6', dbStore).then(val =>  
      this.setState({ dob6 : val})
    );
    get('relationship6', dbStore).then(val =>  
      this.setState({ relationship6 : val})
    );
    get('dependent6', dbStore).then(val =>  
      this.setState({ dependent6 : val})
    );
    get('notes', dbStore).then(val =>  
      this.setState({ notes: val})
    );

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save to indexeddb
    set('name1', this.state.name1, dbStore)
    set('relationship1', this.state.relationship1, dbStore);
    set('dob1', this.state.dob1, dbStore);
    set('dependent1', this.state.dependent1, dbStore);
    set('name2', this.state.name2, dbStore)
    set('relationship2', this.state.relationship2, dbStore);
    set('dob2', this.state.dob2, dbStore);
    set('dependent2', this.state.dependent2, dbStore);
    set('name3', this.state.name3, dbStore)
    set('relationship3', this.state.relationship3, dbStore);
    set('dob3', this.state.dob3, dbStore);
    set('dependent3', this.state.dependent3, dbStore);
    set('name4', this.state.name4, dbStore)
    set('relationship4', this.state.relationship4, dbStore);
    set('dob4', this.state.dob4, dbStore);
    set('dependent4', this.state.dependent4, dbStore);
    set('name5', this.state.name5, dbStore)
    set('relationship5', this.state.relationship5, dbStore);
    set('dob5', this.state.dob5, dbStore);
    set('dependent5', this.state.dependent5, dbStore);
    set('name6', this.state.name6, dbStore)
    set('relationship6', this.state.relationship6, dbStore);
    set('dob6', this.state.dob6, dbStore);
    set('dependent6', this.state.dependent6, dbStore);
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
          <h1>Family details</h1>
          <h2>Children, dependents &amp; others</h2>
        </div>

        <div className="row">
          <div className="g_grid_3">
            <div className="group">
              <label>Name</label>
              <input type="text" name="name1" value={this.state.name1} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label>Relationship</label>
              <input type="text" name="relationship1" value={this.state.relationship1} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label>Date of Birth</label>
              <input type="text" name="dob1" value={this.state.dob1} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label>Dependent</label>
              <select name="dependent1" value={this.state.dependent1} onChange={this.handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mobSection">
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Name</label>
              <input type="text" name="name2" value={this.state.name2} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Relationship</label>
              <input type="text" name="relationship2" value={this.state.relationship2} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Date of Birth</label>
              <input type="text" name="dob2" value={this.state.dob2} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Dependent</label>
              <select name="dependent2" value={this.state.dependent2} onChange={this.handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mobSection">
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Name</label>
              <input type="text" name="name3" value={this.state.name3} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Relationship</label>
              <input type="text" name="relationship3" value={this.state.relationship3} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Date of Birth</label>
              <input type="text" name="dob3" value={this.state.dob3} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Dependent</label>
              <select name="dependent3" value={this.state.dependent3} onChange={this.handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mobSection">
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Name</label>
              <input type="text" name="name4" value={this.state.name4} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Relationship</label>
              <input type="text" name="relationship4" value={this.state.relationship4} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Date of Birth</label>
              <input type="text" name="dob4" value={this.state.dob4} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Dependent</label>
              <select name="dependent4" value={this.state.dependent4} onChange={this.handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mobSection">
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Name</label>
              <input type="text" name="name5" value={this.state.name5} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Relationship</label>
              <input type="text" name="relationship5" value={this.state.relationship5} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Date of Birth</label>
              <input type="text" name="dob5" value={this.state.dob5} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Dependent</label>
              <select name="dependent5" value={this.state.dependent5} onChange={this.handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mobSection">
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Name</label>
              <input type="text" name="name6" value={this.state.name6} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Relationship</label>
              <input type="text" name="relationship6" value={this.state.relationship6} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Date of Birth</label>
              <input type="text" name="dob6" value={this.state.dob6} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="g_grid_3">
            <div className="group">
              <label className="mobOnly">Dependent</label>
              <select name="dependent6" value={this.state.dependent6} onChange={this.handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="group adviserGroup">
          <div className="adviserNotes">
            <h4 className="has-white-color">Adviser Notes</h4>
            <ul>
              <li>Dependent Children education costs</li>
              <li>Planned Special Events (Marriages etc.)</li>
              <li>Care obligations and impacts (Spousal/Parental)</li>
              <li>Family Trusts</li>
            </ul>
          </div>

          <textarea name="notes" onChange={this.handleChange} value={this.state.notes}></textarea>
        </div>
        
        <div className="row">
          <div className="group submit">
            <Link to="./employment" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
          </div>

          <div className="group navigation">
            <Link to="./consultant">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevrons-left</title>
              <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./personal">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
              </svg>
            </Link>
            <Link to="./employment">
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

export default Family;
