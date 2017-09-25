import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import WorkerThumbnail from "./WorkerThumbnail";
import StatusDashboardAPIS from "../utils/sp-status-dashboard-apis";
import Header from "./Header";
import HomeButton from 'material-ui/svg-icons/action/home';
import {FloatingActionButton, IconButton} from "material-ui";
import ContentAdd from 'material-ui/svg-icons/content/add-circle';

class WorkerOverview extends React.Component{

    constructor(){
        super();
        this.state = {
            workersList: "",
            open: true
        };
        this.retrieveWorkers = this.retrieveWorkers.bind(this);
    }
    styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            width: '90%',
            height: '100%',
            overflowY: 'auto',
            padding: 40,
        },
        largeIcon: {
            width: 60,
            height: 60,
        },
        large: {
            width: 120,
            height: 120,
            padding: 30,
        },
        tooltip: {
            padding: 10,
        },
    };

    componentDidMount() {
        this.retrieveWorkers();
    }

    render() {
        return (
          //  <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <Header pageName="Overview" styles={{height:30,backgroundColor:'#616161'}}
                    titleStyle={{fontSize: 18,lineHeight:1.5,color:'#FF3D00'}}
                    icon={<HomeButton color="#FF3D00" />}
                    iconStyle={{padding:0}}
            />
            <div className="floating-button">
                <IconButton tooltip="Add Worker" touch={true} tooltipPosition="top-left"
                            iconStyle={this.styles.largeIcon}
                            style={this.styles.large}
                            tooltipStyles={this.styles.tooltip}
                ><ContentAdd  color="#FF3D00"  /></IconButton>
            </div>


            <div style={this.styles.root}>
                <GridList cols={3} padding={50} cellHeight={300} style={this.styles.gridList} >
                    {tilesData.map((worker) => (
                        <WorkerThumbnail worker={worker} />
                    ))}
                </GridList>
            </div>
        </div>
           // / </MuiThemeProvider>
        );
    }

    retrieveWorkers() {
        // let dashboardAPIs = new StatusDashboardAPIS();
        // let promised_workers_list = dashboardAPIs.getWorkersList();
        // promised_workers_list.then((response) => {
        //     this.workersList = response.data;
        // }).catch(function (error) {
        //         //TODO Need to use proper notification library to show the error
        //     }
        // );

        this.state.workersList=tilesData;
    }


}

const tilesData = [
    {
        workerID: '10.100.5.41:4040',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterA',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"Active",

    },
    {
        workerID: '10.100.5.42:4045',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterB',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"InActive",
    },
    {
        workerID: '10.100.5.43:8080',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterC',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"Active",
    },
    {
        workerID: '10.100.5.44:9000',
        lastUpdate: 'fancycrave1',
        clusterId: 'clusterE',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"InActive",
    },
    {
        workerID: '10.100.5.45:5005',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterF',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"Active",
    },
    {
        workerID: '10.100.5.46:9005',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterG',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"Active",
    },
    {
        workerID: '10.100.5.47:8005',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterH',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"Active",
    },
    {
        workerID: '10.100.5.48:8055',
        lastUpdate: 'Last updated 5 mins ago',
        clusterId: 'clusterI',
        names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
        metrics:{
            cpu:40,
            memory: 12,
            loadAvg: 1.5,
        },
        siddhiApps: {
            active: 5,
            inactive: 6,
        },
        status:"InActive",
    },
];

export default WorkerOverview;
