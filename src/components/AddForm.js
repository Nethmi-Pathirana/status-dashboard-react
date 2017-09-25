/*
 *  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import React from 'react';
import Header from './Header';
import '../dashboard.css';
import {RaisedButton, TextField} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StatusDashboardAPIS from "../utils/sp-status-dashboard-apis";
import HomeButton from 'material-ui/svg-icons/action/home';



class AddWorker extends React.Component {

    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    buttonStyle = {
        margin: 25,
        width: 170,
    };

    textField = {
      width : 450,
    };

    handleSubmit(event) {
        event.preventDefault();
        let apis = new StatusDashboardAPIS("http://localhost:8080"); //TODO: get url from worker itself
        let worker = JSON.stringify({
            host: this.refs.host.input.value,
            port: this.refs.port.input.value,
            username: this.refs.username.input.value,
            password: this.refs.password.input.value,
        });
        let created_worker = apis.createWorker(worker);
        created_worker.then((response) => {
            console.log(response);
        });
    }

// TODO:test connection
//     testConnection = (event) => {
//         event.preventDefault();
//         fetch('http://localhost:9090/workers', {
//             method: 'POST',
//             body: JSON.stringify({
//                 url: this.refs.url.input.value,
//                 name: this.refs.name.input.value,
//                 username: this.refs.username.input.value,
//                 password: this.refs.password.input.value,
//             })
//         })
//             .then(function(response) {
//                 console.log(response);
//                 return response.json()
//             }).then(function(body) {
//             console.log(body);
//         });
//     };


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header pageName="Add New Worker" styles={{height:30,backgroundColor:'#616161'}}
                            titleStyle={{fontSize: 18,lineHeight:1.5,color:'#FF3D00'}}
                            iconStyle={{padding:0}}
                            icon={<HomeButton color="#FF3D00" text="Overview"/>}
                    />
                    <div className="form">
                        <div className="form-panel">
                            <form onSubmit={this.handleSubmit} >
                                <TextField style={this.textField} className="form-group" ref="host" hintText="localhost" floatingLabelText="Host" type="text" /><br />
                                <TextField style={this.textField} className="form-group" ref="port" defaultValue="9090" floatingLabelText="Port" type="text" /><br />
                                <TextField style={this.textField} className="form-group" ref="username" hintText="Username" floatingLabelText="Username" type="text" /><br />
                                <TextField style={this.textField} className="form-group" ref="password" hintText="Password" floatingLabelText="Password" type="password" /><br />
                                <RaisedButton style={this.buttonStyle} label="Add Worker" primary={true} type="submit"/>
                                <RaisedButton style={this.buttonStyle} label="Test Connection" primary={true} type="submit" onClick={this.testConnection} />
                            </form>
                        </div>
                    </div></div>
            </MuiThemeProvider>

        );
    }


}

export default AddWorker;