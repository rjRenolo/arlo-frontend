import React from 'react';
import setState from 'react';
import state from 'react';
import { Component } from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Store, set, get, keys, clear} from 'idb-keyval';
import { Offline, Online } from "react-detect-offline";

const consultantStore = new Store('consultant-store');
const personalStore = new Store('personal-store');
const familyStore = new Store('family-store');
const employmentStore = new Store('employment-store');
const incomeStore = new Store('income-store');
const policiesStore = new Store('policies-store');
const softfactsStore = new Store('softfacts-store');
const prioritiesStore = new Store('priorities-store');
const thirdpartyadviceStore = new Store('thirdpartyadvice-store');
const whatyouownStore = new Store('whatyouown-store');
const whatyouoweStore = new Store('whatyouowe-store');
const estateStore = new Store('estate-store');
const changesStore = new Store('changes-store');
const verificationStore = new Store('verification-store');
const promptStore = new Store('prompt-store');
const objectivesStore = new Store('objectives-store');
const otherStore = new Store('other-store');
const investingStore = new Store('investing-store');
const attitudeStore = new Store('attitude-store');
const riskprofilingStore = new Store('riskprofiling-store');
const capacityStore = new Store('capacity-store');

export class Complete extends React.Component {


  constructor(props){
      super(props);

      this.state = {
        consultant : '',
        personal : '',
        family : '',
        employment : '',
        income : '',
        policies : '',
        softfacts : '',
        priorities : '',
        thirdpartyadvice : '',
        whatyouown : '',
        whatyouowe : '',
        estate : '',
        changes : '',
        verification : '',
        prompt : '',
        objectives : '',
        other : '',
        investing : '',
        attitude : '',
        riskprofiling: '',
        capacity : '',
        isComplete : 0,
        isProcessing : false,
        iserror: false
      }

      this.buildParams = this.buildParams.bind(this);
      this.completeForm = this.completeForm.bind(this);
      this.clearStorage = this.clearStorage.bind(this);

  }

  componentDidMount = () => {
    this.buildParams();
  }

  buildParams = () => {

    //Build the consultant params query
    keys(consultantStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, consultantStore).then(val => this.setState({consultant : this.state.consultant  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the personal params query
    keys(personalStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, personalStore).then(val => this.setState({personal : this.state.personal  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the family params query
    keys(familyStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, familyStore).then(val => this.setState({family : this.state.family  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the employment params query
    keys(employmentStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, employmentStore).then(val => this.setState({employment : this.state.employment  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the income params query
    keys(incomeStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, incomeStore).then(val => this.setState({income : this.state.income  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the policies params query
    keys(policiesStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, policiesStore).then(val => this.setState({policies : this.state.policies  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the softfacts params query
    keys(softfactsStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, softfactsStore).then(val => this.setState({softfacts : this.state.softfacts  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the priorities params query
    keys(prioritiesStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, prioritiesStore).then(val => this.setState({priorities : this.state.priorities  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the thirdpartyadvice params query
    keys(thirdpartyadviceStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, thirdpartyadviceStore).then(val => this.setState({thirdpartyadvice : this.state.thirdpartyadvice  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the whatyouown params query
    keys(whatyouownStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, whatyouownStore).then(val => this.setState({whatyouown : this.state.whatyouown  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the whatyouowe params query
    keys(whatyouoweStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, whatyouoweStore).then(val => this.setState({whatyouowe : this.state.whatyouowe  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the estate params query
    keys(estateStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, estateStore).then(val => this.setState({estate : this.state.estate  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the changes params query
    keys(changesStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, changesStore).then(val => this.setState({changes : this.state.changes  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the verification params query
    keys(verificationStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, verificationStore).then(val => this.setState({verification : this.state.verification  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the prompt params query
    keys(promptStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, promptStore).then(val => this.setState({prompt : this.state.prompt  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the objectives params query
    keys(objectivesStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, objectivesStore).then(val => this.setState({objectives : this.state.objectives  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the other params query
    keys(otherStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, otherStore).then(val => this.setState({other : this.state.other  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the investing params query
    keys(investingStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, investingStore).then(val => this.setState({investing : this.state.investing  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the attitude params query
    keys(attitudeStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, attitudeStore).then(val => this.setState({attitude : this.state.attitude  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    keys(riskprofilingStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, riskprofilingStore).then(val => this.setState({riskprofiling : this.state.riskprofiling  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

    //Build the capacity params query
    keys(capacityStore).then(keys => 
      keys.forEach(function(key){

        var cons = get(key, capacityStore).then(val => this.setState({capacity : this.state.capacity  + key + '=' + val + '&'}));
  
      }.bind(this))
    );

  }

  componentDidUpdate = () => {
    
  }

  completeForm = () => {

    this.setState({
      isProcessing: true
    });

    var path = this.props.path;
    var pass = this.props.pass;

    console.log(this.state.consultant)

    var tmpConsultant = this.state.consultant
    var consultantData = tmpConsultant.substring(0, tmpConsultant.length - 1)
    console.log(consultantData)

    fetch(path + "/consultant", {
            method:'POST', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('root:' + pass),
              // "Access-Control-Allow-Headers" : "Content-Type",
              // "Access-Control-Allow-Origin": "*",
              // "Access-Control-Allow-Methods": "POST"
            },
            body: consultantData
          }
        )
        .then(res => res.text())
        .then(
          (result) => {

            var res = JSON.parse(result);

            this.setState({
              isComplete: this.state.isComplete + 1,
              insertId : res.result
            });

            console.log('consultant complete ' + this.state.insertId);

            fetch(path + "/personal", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.personal + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/family", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.family + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/employment", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.employment + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/income", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.income + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/policies", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.policies + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/softfacts", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.softfacts + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/priorities", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.priorities + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/thirdpartyadvice", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.thirdpartyadvice + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/whatyouown", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.whatyouown + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/whatyouowe", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.whatyouowe + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/estate", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.estate + 'job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/changes", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.changes + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/verification", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.verification + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/prompt", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.prompt + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/objectives", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.objectives + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/other", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.other + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/investing", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.investing + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/attitude", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.attitude + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            fetch(path + "/risk-profiling", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.riskprofiling + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });

            console.log(this.state.estate)
            fetch(path + "/capacity", {
                    method:'POST', 
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('root:' + pass),
                      // "Access-Control-Allow-Headers" : "Content-Type",
                      // "Access-Control-Allow-Origin": "*",
                      // "Access-Control-Allow-Methods": "POST"
                    },
                    body: this.state.capacity + '&change1=asas&job_id=' + this.state.insertId
                  }
                )
                .then(res => res.text())
                .then(
                  (result) => {

                    console.log(result);
                    this.setState({
                      isComplete: this.state.isComplete + 1
                    });
                    if(this.state.isComplete == 21) { this.clearStorage(); }
                  
                },
                (error) => {
                  this.setState({
                    isComplete: false,
                    error
                  });
            });
          
        },
        (error) => {
          this.setState({
            isComplete: false,
            error
          });
        this.setState({
          isProcessing: true,
          iserror: true
        });
    });
    
  }

  clearStorage = () => {

      clear(consultantStore);
      clear(personalStore);
      clear(familyStore);
      clear(employmentStore);
      clear(incomeStore);
      clear(policiesStore);
      clear(softfactsStore);
      clear(prioritiesStore);
      clear(thirdpartyadviceStore);
      clear(whatyouownStore);
      clear(whatyouoweStore);
      clear(estateStore);
      clear(changesStore);
      clear(verificationStore);
      clear(promptStore);
      clear(objectivesStore);
      clear(otherStore);
      clear(investingStore);
      clear(attitudeStore);
      clear(riskprofilingStore);
      clear(capacityStore);
      
    }

  

  render() {

    return (
      <div className="wrapper">

        <div className="titleBlock">
          <h1>Complete</h1>
          <h2>Finalise the form</h2>
        </div>

        <Online>
          <p>Press the "Finish" button to upload the form data. Clicking 'finish' will clear the form.</p>

          <div className={`row ${this.state.isComplete == 21 ? "hidden" : ""}`}>
            <div className="group submit">
              {this.state.iserror && <p>Please try again...</p>}
              <button onClick={this.completeForm} className={`finishButton ${this.state.isProcessing == true ? "buttonProcess" : ""}`} >Finish</button>
            </div>

            <div className="group navigation">
              <Link to="./consultant">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevrons-left</title>
                <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                </svg>
              </Link>
              <Link to="./capacity">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevron-left</title>
                <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                </svg>
              </Link>
              <Link to="./complete" className="disabled">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevron-right</title>
                <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
                </svg>
              </Link>
              <Link to="./complete" className="disabled">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevrons-right</title>
                <path d="M13.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM6.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className={`successMessage ${this.state.isComplete == 21 ? "" : "hidden"}`}>
            The data was successfully uploaded. <Link to="./consultant">Start a new application &raquo;</Link>
          </div>

          
        </Online>
        
        <Offline>
        
          <p>You are offline. Once you have an internet connection you will be able to upload the form details.</p>

          <div className="row">
            <div className="group submit">
              <button className="finishButton disabled">Finish</button>
            </div>

            <div className="group navigation">
              <Link to="./consultant">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevrons-left</title>
                <path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                </svg>
              </Link>
              <Link to="./capacity">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevron-left</title>
                <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                </svg>
              </Link>
              <Link to="./complete" className="disabled">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevron-right</title>
                <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
                </svg>
              </Link>
              <Link to="./complete" className="disabled">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>chevrons-right</title>
                <path d="M13.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM6.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
                </svg>
              </Link>
            </div>
          </div>

        </Offline>



        

      </div>
    );

  }
  
}

export default Complete;
