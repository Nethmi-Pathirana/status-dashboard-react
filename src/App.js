import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Grid from './components/WorkerOverview(backup)';
import Profile from './components/TitleBar';
import './App.css';
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import WorkerOverview from "./components/WorkerOverview";
import WorkerSpecific from "./components/WorkerSpecific";
// import Login from "./components/Login";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <Header styles={{backgroundColor:'black'}}
                        icon={<img src='images/stream-processor-logo-01.png' />}
                        pageName="WSO2 Stream Processor Status Dashboard"
                        titleStyle={{color:'#FF3D00'}}
                />
                {/*<AddForm />*/}
                {/*<WorkerOverview />*/}
                {/*<Grid/>*/}
                <WorkerSpecific />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
