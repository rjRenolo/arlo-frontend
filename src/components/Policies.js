import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const dbStore = new Store('policies-store');

export class Policies extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           eligible1 : '',
           haveyoudone1 : '',
           whynot1 : '',
           retirementage1 : '',
           eligible2 : '',
           haveyoudone2 : '',
           whynot2 : '',
           retirementage2 : '',

           owner1 : '',
           type1 : '',
           company1 : '',
           policyno1 : '',
           frequency1 : '',
           yourcontribution1 : '',
           employercontribution1 : '',
           indexed1 : '',
           start1 : '',
           end1 : '',
           expectedyears1 : '',
           waiver1 : '',
           status1 : '',
           salary1 : '',
           servicestart1 : '',
           range1 : '',
           benefit1 : '',
           penalty1 : '',
           widow1 : '',
           death1 : '',
           pcls1 : '',
           fund1 : '',

           owner2 : '',
           type2 : '',
           company2 : '',
           policyno2 : '',
           frequency2 : '',
           yourcontribution2 : '',
           employercontribution2 : '',
           indexed2 : '',
           start2 : '',
           end2 : '',
           expectedyears2 : '',
           waiver2 : '',
           status2 : '',
           salary2 : '',
           servicestart2 : '',
           range2 : '',
           benefit2 : '',
           penalty2 : '',
           widow2 : '',
           death2 : '',
           pcls2 : '',
           fund2 : '',

           owner3 : '',
           type3 : '',
           company3 : '',
           policyno3 : '',
           frequency3 : '',
           yourcontribution3 : '',
           employercontribution3 : '',
           indexed3 : '',
           start3 : '',
           end3 : '',
           expectedyears3 : '',
           waiver3 : '',
           status3 : '',
           salary3 : '',
           servicestart3 : '',
           range3 : '',
           benefit3 : '',
           penalty3 : '',
           widow3 : '',
           death3 : '',
           pcls3 : '',
           fund3 : '',

           owner4 : '',
           type4 : '',
           company4 : '',
           policyno4 : '',
           frequency4 : '',
           yourcontribution4 : '',
           employercontribution4 : '',
           indexed4 : '',
           start4 : '',
           end4 : '',
           expectedyears4 : '',
           waiver4 : '',
           status4 : '',
           salary4 : '',
           servicestart4 : '',
           range4 : '',
           benefit4 : '',
           penalty4 : '',
           widow4 : '',
           death4 : '',
           pcls4 : '',
           fund4 : '',

           notes : '',
           isComplete : false
       }

       this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {

    get('eligible1', dbStore).then(val =>  
      this.setState({ eligible1 : val})
    );
    get('haveyoudone1', dbStore).then(val =>  
      this.setState({ haveyoudone1 : val})
    );
    get('whynot1', dbStore).then(val =>  
      this.setState({ whynot1 : val})
    );
    get('retirementage1', dbStore).then(val =>  
      this.setState({ retirementage1: val})
    );
    get('eligible2', dbStore).then(val =>  
      this.setState({ eligible2 : val})
    );
    get('haveyoudone2', dbStore).then(val =>  
      this.setState({ haveyoudone2 : val})
    );
    get('whynot2', dbStore).then(val =>  
      this.setState({ whynot2 : val})
    );
    get('retirementage2', dbStore).then(val =>  
      this.setState({ retirementage2: val})
    );

    get('owner1', dbStore).then(val =>  
      this.setState({ owner1 : val})
    );
    get('type1', dbStore).then(val =>  
      this.setState({ type1 : val})
    );
    get('company1', dbStore).then(val =>  
      this.setState({ company1 : val})
    );
    get('policyno1', dbStore).then(val =>  
      this.setState({ policyno1 : val})
    );
    get('frequency1', dbStore).then(val =>  
      this.setState({ frequency1 : val})
    );
    get('yourcontribution1', dbStore).then(val =>  
      this.setState({ yourcontribution1 : val})
    );
    get('employercontribution1', dbStore).then(val =>  
      this.setState({ employercontribution1 : val})
    );
    get('indexed1', dbStore).then(val =>  
      this.setState({ indexed1 : val})
    );
    get('start1', dbStore).then(val =>  
      this.setState({ start1 : val})
    );
    get('end1', dbStore).then(val =>  
      this.setState({ end1 : val})
    );
    get('expectedyears1', dbStore).then(val =>  
      this.setState({ expectedyears1 : val})
    );
    get('waiver1', dbStore).then(val =>  
      this.setState({ waiver1 : val})
    );
    get('status1', dbStore).then(val =>  
      this.setState({ status1 : val})
    );
    get('salary1', dbStore).then(val =>  
      this.setState({ salary1 : val})
    );
    get('servicestart1', dbStore).then(val =>  
      this.setState({ servicestart1 : val})
    );
    get('range1', dbStore).then(val =>  
      this.setState({ range1 : val})
    );
    get('benefit1', dbStore).then(val =>  
      this.setState({ benefit1 : val})
    );
    get('penalty1', dbStore).then(val =>  
      this.setState({ penalty1 : val})
    );
    get('widow1', dbStore).then(val =>  
      this.setState({ widow1 : val})
    );
    get('death1', dbStore).then(val =>  
      this.setState({ death1 : val})
    );
    get('pcls1', dbStore).then(val =>  
      this.setState({ pcls1 : val})
    );
    get('fund1', dbStore).then(val =>  
      this.setState({ fund1 : val})
    );

    get('owner2', dbStore).then(val =>  
      this.setState({ owner2 : val})
    );
    get('type2', dbStore).then(val =>  
      this.setState({ type2 : val})
    );
    get('company2', dbStore).then(val =>  
      this.setState({ company2 : val})
    );
    get('policyno2', dbStore).then(val =>  
      this.setState({ policyno2 : val})
    );
    get('frequency2', dbStore).then(val =>  
      this.setState({ frequency2 : val})
    );
    get('yourcontribution2', dbStore).then(val =>  
      this.setState({ yourcontribution2 : val})
    );
    get('employercontribution2', dbStore).then(val =>  
      this.setState({ employercontribution2: val})
    );
    get('indexed2', dbStore).then(val =>  
      this.setState({ indexed2 : val})
    );
    get('start2', dbStore).then(val =>  
      this.setState({ start2 : val})
    );
    get('end2', dbStore).then(val =>  
      this.setState({ end2 : val})
    );
    get('expectedyears2', dbStore).then(val =>  
      this.setState({ expectedyears2 : val})
    );
    get('waiver2', dbStore).then(val =>  
      this.setState({ waiver2 : val})
    );
    get('status2', dbStore).then(val =>  
      this.setState({ status2 : val})
    );
    get('salary2', dbStore).then(val =>  
      this.setState({ salary2 : val})
    );
    get('servicestart2', dbStore).then(val =>  
      this.setState({ servicestart2 : val})
    );
    get('range2', dbStore).then(val =>  
      this.setState({ range2 : val})
    );
    get('benefit2', dbStore).then(val =>  
      this.setState({ benefit2 : val})
    );
    get('penalty2', dbStore).then(val =>  
      this.setState({ penalty2 : val})
    );
    get('widow2', dbStore).then(val =>  
      this.setState({ widow2 : val})
    );
    get('death2', dbStore).then(val =>  
      this.setState({ death2 : val})
    );
    get('pcls2', dbStore).then(val =>  
      this.setState({ pcls2 : val})
    );
    get('fund2', dbStore).then(val =>  
      this.setState({ fund2 : val})
    );

    get('owner3', dbStore).then(val =>  
      this.setState({ owner3 : val})
    );
    get('type3', dbStore).then(val =>  
      this.setState({ type3 : val})
    );
    get('company3', dbStore).then(val =>  
      this.setState({ company3 : val})
    );
    get('policyno3', dbStore).then(val =>  
      this.setState({ policyno3 : val})
    );
    get('frequency3', dbStore).then(val =>  
      this.setState({ frequency3 : val})
    );
    get('yourcontribution3', dbStore).then(val =>  
      this.setState({ yourcontribution3 : val})
    );
    get('employercontribution3', dbStore).then(val =>  
      this.setState({ employercontribution3 : val})
    );
    get('indexed3', dbStore).then(val =>  
      this.setState({ indexed3 : val})
    );
    get('start3', dbStore).then(val =>  
      this.setState({ start3 : val})
    );
    get('end3', dbStore).then(val =>  
      this.setState({ end3 : val})
    );
    get('expectedyears3', dbStore).then(val =>  
      this.setState({ expectedyears3 : val})
    );
    get('waiver3', dbStore).then(val =>  
      this.setState({ waiver3 : val})
    );
    get('status3', dbStore).then(val =>  
      this.setState({ status3 : val})
    );
    get('salary3', dbStore).then(val =>  
      this.setState({ salary3 : val})
    );
    get('servicestart3', dbStore).then(val =>  
      this.setState({ servicestart3 : val})
    );
    get('range3', dbStore).then(val =>  
      this.setState({ range3 : val})
    );
    get('benefit3', dbStore).then(val =>  
      this.setState({ benefit3 : val})
    );
    get('penalty3', dbStore).then(val =>  
      this.setState({ penalty3 : val})
    );
    get('widow3', dbStore).then(val =>  
      this.setState({ widow3 : val})
    );
    get('death3', dbStore).then(val =>  
      this.setState({ death3 : val})
    );
    get('pcls3', dbStore).then(val =>  
      this.setState({ pcls3 : val})
    );
    get('fund3', dbStore).then(val =>  
      this.setState({ fund3 : val})
    );

    get('owner4', dbStore).then(val =>  
      this.setState({ owner4 : val})
    );
    get('type4', dbStore).then(val =>  
      this.setState({ type4 : val})
    );
    get('company4', dbStore).then(val =>  
      this.setState({ company4 : val})
    );
    get('policyno4', dbStore).then(val =>  
      this.setState({ policyno4 : val})
    );
    get('frequency4', dbStore).then(val =>  
      this.setState({ frequency4 : val})
    );
    get('yourcontribution4', dbStore).then(val =>  
      this.setState({ yourcontribution4 : val})
    );
    get('employercontribution4', dbStore).then(val =>  
      this.setState({ employercontribution4 : val})
    );
    get('indexed4', dbStore).then(val =>  
      this.setState({ indexed4 : val})
    );
    get('start4', dbStore).then(val =>  
      this.setState({ start4 : val})
    );
    get('end4', dbStore).then(val =>  
      this.setState({ end4 : val})
    );
    get('expectedyears4', dbStore).then(val =>  
      this.setState({ expectedyears4 : val})
    );
    get('waiver4', dbStore).then(val =>  
      this.setState({ waiver4 : val})
    );
    get('status4', dbStore).then(val =>  
      this.setState({ status4 : val})
    );
    get('salary4', dbStore).then(val =>  
      this.setState({ salary4 : val})
    );
    get('servicestart4', dbStore).then(val =>  
      this.setState({ servicestart4 : val})
    );
    get('range4', dbStore).then(val =>  
      this.setState({ range4: val})
    );
    get('benefit4', dbStore).then(val =>  
      this.setState({ benefit4 : val})
    );
    get('penalty4', dbStore).then(val =>  
      this.setState({ penalty4 : val})
    );
    get('widow4', dbStore).then(val =>  
      this.setState({ widow4 : val})
    );
    get('death4', dbStore).then(val =>  
      this.setState({ death4 : val})
    );
    get('pcls4', dbStore).then(val =>  
      this.setState({ pcls4 : val})
    );
    get('fund4', dbStore).then(val =>  
      this.setState({ fund4 : val})
    );

    get('notes', dbStore).then(val =>  
      this.setState({ notes: val})
    );

    $('.collapse h4').click(function() {
      $(this).next('.collapse-inner').slideToggle();
    })

  }

  componentDidUpdate = () => {
    
  }

  saveDetails = () => {

    //save to indexeddb
    set('eligible1', this.state.eligible1, dbStore)
    set('haveyoudone1', this.state.haveyoudone1, dbStore);
    set('whynot1', this.state.whynot1, dbStore)
    set('retirementage1', this.state.retirementage1, dbStore);
    set('eligible2', this.state.eligible2, dbStore)
    set('haveyoudone2', this.state.haveyoudone2, dbStore);
    set('whynot2', this.state.whynot2, dbStore)
    set('retirementage2', this.state.retirementage2, dbStore);

    set('owner1', this.state.owner1, dbStore);
    set('type1', this.state.type1, dbStore);
    set('company1', this.state.company1, dbStore);
    set('policyno1', this.state.policyno1, dbStore);
    set('frequency1', this.state.frequency1, dbStore);
    set('yourcontribution1', this.state.yourcontribution1, dbStore);
    set('employercontribution1', this.state.employercontribution1, dbStore);
    set('indexed1', this.state.indexed1, dbStore);
    set('start1', this.state.start1, dbStore);
    set('end1', this.state.end1, dbStore);
    set('expectedyears1', this.state.expectedyears1, dbStore);
    set('waiver1', this.state.waiver1, dbStore);
    set('status1', this.state.status1, dbStore);
    set('salary1', this.state.salary1, dbStore);
    set('servicestart1', this.state.servicestart1, dbStore);
    set('range1', this.state.range1, dbStore);
    set('benefit1', this.state.benefit1, dbStore);
    set('penalty1', this.state.penalty1, dbStore);
    set('widow1', this.state.widow1, dbStore);
    set('death1', this.state.death1, dbStore);
    set('pcls1', this.state.pcls1, dbStore);
    set('fund1', this.state.fund1, dbStore);

    set('owner2', this.state.owner2, dbStore);
    set('type2', this.state.type2, dbStore);
    set('company2', this.state.company2, dbStore);
    set('policyno2', this.state.policyno2, dbStore);
    set('frequency2', this.state.frequency2, dbStore);
    set('yourcontribution2', this.state.yourcontribution2, dbStore);
    set('employercontribution2', this.state.employercontribution2, dbStore);
    set('indexed2', this.state.indexed2, dbStore);
    set('start2', this.state.start2, dbStore);
    set('end2', this.state.end2, dbStore);
    set('expectedyears2', this.state.expectedyears2, dbStore);
    set('waiver2', this.state.waiver2, dbStore);
    set('status2', this.state.status2, dbStore);
    set('salary2', this.state.salary2, dbStore);
    set('servicestart2', this.state.servicestart2, dbStore);
    set('range2', this.state.range2, dbStore);
    set('benefit2', this.state.benefit2, dbStore);
    set('penalty2', this.state.penalty2, dbStore);
    set('widow2', this.state.widow2, dbStore);
    set('death2', this.state.death2, dbStore);
    set('pcls2', this.state.pcls2, dbStore);
    set('fund2', this.state.fund2, dbStore);

    set('owner3', this.state.owner3, dbStore);
    set('type3', this.state.type3, dbStore);
    set('company3', this.state.company3, dbStore);
    set('policyno3', this.state.policyno3, dbStore);
    set('frequency3', this.state.frequency3, dbStore);
    set('yourcontribution3', this.state.yourcontribution3, dbStore);
    set('employercontribution3', this.state.employercontribution3, dbStore);
    set('indexed3', this.state.indexed3, dbStore);
    set('start3', this.state.start3, dbStore);
    set('end3', this.state.end3, dbStore);
    set('expectedyears3', this.state.expectedyears3, dbStore);
    set('waiver3', this.state.waiver3, dbStore);
    set('status3', this.state.status3, dbStore);
    set('salary3', this.state.salary3, dbStore);
    set('servicestart3', this.state.servicestart3, dbStore);
    set('range3', this.state.range3, dbStore);
    set('benefit3', this.state.benefit3, dbStore);
    set('penalty3', this.state.penalty3, dbStore);
    set('widow3', this.state.widow3, dbStore);
    set('death3', this.state.death3, dbStore);
    set('pcls3', this.state.pcls3, dbStore);
    set('fund3', this.state.fund3, dbStore);

    set('owner4', this.state.owner4, dbStore);
    set('type4', this.state.type4, dbStore);
    set('company4', this.state.company4, dbStore);
    set('policyno4', this.state.policyno4, dbStore);
    set('frequency4', this.state.frequency4, dbStore);
    set('yourcontribution4', this.state.yourcontribution4, dbStore);
    set('employercontribution4', this.state.employercontribution4, dbStore);
    set('indexed4', this.state.indexed4, dbStore);
    set('start4', this.state.start4, dbStore);
    set('end4', this.state.end4, dbStore);
    set('expectedyears4', this.state.expectedyears4, dbStore);
    set('waiver4', this.state.waiver4, dbStore);
    set('status4', this.state.status4, dbStore);
    set('salary4', this.state.salary4, dbStore);
    set('servicestart4', this.state.servicestart4, dbStore);
    set('range4', this.state.range4, dbStore);
    set('benefit4', this.state.benefit4, dbStore);
    set('penalty4', this.state.penalty4, dbStore);
    set('widow4', this.state.widow4, dbStore);
    set('death4', this.state.death4, dbStore);
    set('pcls4', this.state.pcls4, dbStore);
    set('fund4', this.state.fund4, dbStore);

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
          <h1>Existing policies</h1>
          <h2>Pensions &amp; retirement</h2>
        </div>

        <div className="row">

          <div className="g_grid_6">
            <h3>Client 1</h3>
            <div className="group">
              <label>Are you eligible to join an employer’s pension scheme?</label>
              <input type="text" name="eligible1" value={this.state.eligible1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Have you done so?</label>
              <input type="text" name="haveyoudone1" value={this.state.haveyoudone1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>If not, why not?</label>
              <input type="text" name="whynot1" value={this.state.whynot1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Selected retirement age</label>
              <input type="text" name="retirementage1" value={this.state.retirementage1} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="g_grid_6">
            <h3>Client 2</h3>
            <div className="group">
              <label>Are you eligible to join an employer’s pension scheme?</label>
              <input type="text" name="eligible2" value={this.state.eligible2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Have you done so?</label>
              <input type="text" name="haveyoudone2" value={this.state.haveyoudone2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>If not, why not?</label>
              <input type="text" name="whynot2" value={this.state.whynot2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Selected retirement age</label>
              <input type="text" name="retirementage2" value={this.state.retirementage2} onChange={this.handleChange}/>
            </div>
          </div>
          
        </div>

        <div className="collapse">
          <h4>1. Policy details</h4>
          <div className="collapse-inner">
            <div className="group">
              <label>Owner</label>
              <input type="text" name="owner1" value={this.state.owner1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Type</label>
              <input type="text" name="type1" value={this.state.type1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Company</label>
              <input type="text" name="company1" value={this.state.company1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Policy Number</label>
              <input type="text" name="policyno1" value={this.state.policyno1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Contribution frequency</label>
              <input type="text" name="frequency1" value={this.state.frequency1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Your contribution</label>
              <input type="text" name="yourcontribution1" value={this.state.yourcontribution1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Employer contribution</label>
              <input type="text" name="employercontribution1" value={this.state.employercontribution1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Indexed</label>
              <input type="text" name="indexed1" value={this.state.indexed1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Start date</label>
              <input type="text" name="start1" value={this.state.start1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>End date</label>
              <input type="text" name="end1" value={this.state.end1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Expected years service</label>
              <input type="text" name="expectedyears1" value={this.state.expectedyears1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Waiver included</label>
              <input type="text" name="waiver1" value={this.state.waiver1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Status</label>
              <input type="text" name="status1" value={this.state.status1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Pensionable salary</label>
              <input type="text" name="salary1" value={this.state.salary1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Service start date</label>
              <input type="text" name="servicestart1" value={this.state.servicestart1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>60th / 80th</label>
              <input type="text" name="range1" value={this.state.range1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Benefit escalation</label>
              <input type="text" name="benefit1" value={this.state.benefit1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Early retirement penalty</label>
              <input type="text" name="penalty1" value={this.state.penalty1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Widow(er)'s pension</label>
              <input type="text" name="widow1" value={this.state.widow1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Death in services</label>
              <input type="text" name="death1" value={this.state.death1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Does enhanced PCLS apply?</label>
              <input type="text" name="pcls1" value={this.state.pcls1} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Fund details</label>
              <textarea name="fund1" value={this.state.fund1} onChange={this.handleChange}></textarea>
            </div>
          </div>
        </div>

        <div className="collapse">
          <h4>2. Policy details</h4>
          <div className="collapse-inner">
            <div className="group">
              <label>Owner</label>
              <input type="text" name="owner2" value={this.state.owner2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Type</label>
              <input type="text" name="type2" value={this.state.type2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Company</label>
              <input type="text" name="company2" value={this.state.company2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Policy Number</label>
              <input type="text" name="policyno2" value={this.state.policyno2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Contribution frequency</label>
              <input type="text" name="frequency2" value={this.state.frequency2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Your contribution</label>
              <input type="text" name="yourcontribution2" value={this.state.yourcontribution2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Employer contribution</label>
              <input type="text" name="employercontribution2" value={this.state.employercontribution2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Indexed</label>
              <input type="text" name="indexed2" value={this.state.indexed2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Start date</label>
              <input type="text" name="start2" value={this.state.start2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>End date</label>
              <input type="text" name="end2" value={this.state.end2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Expected years service</label>
              <input type="text" name="expectedyears2" value={this.state.expectedyears2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Waiver included</label>
              <input type="text" name="waiver2" value={this.state.waiver2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Status</label>
              <input type="text" name="status2" value={this.state.status2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Pensionable salary</label>
              <input type="text" name="salary2" value={this.state.salary2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Service start date</label>
              <input type="text" name="servicestart2" value={this.state.servicestart2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>60th / 80th</label>
              <input type="text" name="range2" value={this.state.range2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Benefit escalation</label>
              <input type="text" name="benefit2" value={this.state.benefit2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Early retirement penalty</label>
              <input type="text" name="penalty2" value={this.state.penalty2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Widow(er)'s pension</label>
              <input type="text" name="widow2" value={this.state.widow2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Death in services</label>
              <input type="text" name="death2" value={this.state.death2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Does enhanced PCLS apply?</label>
              <input type="text" name="pcls2" value={this.state.pcls2} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Fund details</label>
              <textarea name="fund2" value={this.state.fund2} onChange={this.handleChange}></textarea>
            </div>
          </div>
        </div>

        <div className="collapse">
          <h4>3. Policy details</h4>
          <div className="collapse-inner">
            <div className="group">
              <label>Owner</label>
              <input type="text" name="owner3" value={this.state.owner3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Type</label>
              <input type="text" name="type3" value={this.state.type3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Company</label>
              <input type="text" name="company3" value={this.state.company3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Policy Number</label>
              <input type="text" name="policyno3" value={this.state.policyno3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Contribution frequency</label>
              <input type="text" name="frequency3" value={this.state.frequency3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Your contribution</label>
              <input type="text" name="yourcontribution3" value={this.state.yourcontribution3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Employer contribution</label>
              <input type="text" name="employercontribution3" value={this.state.employercontribution3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Indexed</label>
              <input type="text" name="indexed3" value={this.state.indexed3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Start date</label>
              <input type="text" name="start3" value={this.state.start3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>End date</label>
              <input type="text" name="end3" value={this.state.end3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Expected years service</label>
              <input type="text" name="expectedyears3" value={this.state.expectedyears3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Waiver included</label>
              <input type="text" name="waiver3" value={this.state.waiver3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Status</label>
              <input type="text" name="status3" value={this.state.status3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Pensionable salary</label>
              <input type="text" name="salary3" value={this.state.salary3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Service start date</label>
              <input type="text" name="servicestart3" value={this.state.servicestart3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>60th / 80th</label>
              <input type="text" name="range3" value={this.state.range3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Benefit escalation</label>
              <input type="text" name="benefit3" value={this.state.benefit3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Early retirement penalty</label>
              <input type="text" name="penalty3" value={this.state.penalty3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Widow(er)'s pension</label>
              <input type="text" name="widow3" value={this.state.widow3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Death in services</label>
              <input type="text" name="death3" value={this.state.death3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Does enhanced PCLS apply?</label>
              <input type="text" name="pcls3" value={this.state.pcls3} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Fund details</label>
              <textarea name="fund3" value={this.state.fund3} onChange={this.handleChange}></textarea>
            </div>
          </div>
        </div>

        <div className="collapse">
          <h4>4. Policy details</h4>
          <div className="collapse-inner">
            <div className="group">
              <label>Owner</label>
              <input type="text" name="owner4" value={this.state.owner4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Type</label>
              <input type="text" name="type4" value={this.state.type4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Company</label>
              <input type="text" name="company4" value={this.state.company4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Policy Number</label>
              <input type="text" name="policyno4" value={this.state.policyno4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Contribution frequency</label>
              <input type="text" name="frequency4" value={this.state.frequency4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Your contribution</label>
              <input type="text" name="yourcontribution4" value={this.state.yourcontribution4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Employer contribution</label>
              <input type="text" name="employercontribution4" value={this.state.employercontribution4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Indexed</label>
              <input type="text" name="indexed4" value={this.state.indexed4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Start date</label>
              <input type="text" name="start4" value={this.state.start4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>End date</label>
              <input type="text" name="end4" value={this.state.end4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Expected years service</label>
              <input type="text" name="expectedyears4" value={this.state.expectedyears4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Waiver included</label>
              <input type="text" name="waiver4" value={this.state.waiver4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Status</label>
              <input type="text" name="status4" value={this.state.status4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Pensionable salary</label>
              <input type="text" name="salary4" value={this.state.salary4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Service start date</label>
              <input type="text" name="servicestart4" value={this.state.servicestart4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>60th / 80th</label>
              <input type="text" name="range4" value={this.state.range4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Benefit escalation</label>
              <input type="text" name="benefit4" value={this.state.benefit4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Early retirement penalty</label>
              <input type="text" name="penalty4" value={this.state.penalty4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Widow(er)'s pension</label>
              <input type="text" name="widow4" value={this.state.widow4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Death in services</label>
              <input type="text" name="death4" value={this.state.death4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Does enhanced PCLS apply?</label>
              <input type="text" name="pcls4" value={this.state.pcls4} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <label>Fund details</label>
              <textarea name="fund4" value={this.state.fund4} onChange={this.handleChange}></textarea>
            </div>
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
            <Link to="./softfacts" onClick={() => this.saveDetails()}>Save &amp; Continue</Link>
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
            <Link to="./softfacts">
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

export default Policies;
