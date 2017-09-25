import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import WorkerThumbnail from "./WorkerThumbnail";
import StatusDashboardAPIS from "../utils/sp-status-dashboard-apis";
import Header from "./Header";
import HomeButton from 'material-ui/svg-icons/action/home';
import {FloatingActionButton, IconButton, Toggle} from "material-ui";
import ContentAdd from 'material-ui/svg-icons/content/add-circle';

class WorkerSpecific extends React.Component{

    constructor(){
        super();
        this.retrieveWorkers = this.retrieveWorkers.bind(this);
    }
    styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
    };

    componentDidMount() {
        // this.retrieveWorkers();
    }

    render() {
        return (
            <div>
                <Header pageName="Worker Specific Details" styles={{height:30,backgroundColor:'#616161'}}
                        titleStyle={{fontSize: 18,lineHeight:1.5,color:'#FF3D00'}}
                        icon={<HomeButton color="#FF3D00" />}
                />

                <div className="worker-h1">
                    <h1>0.100.1.166 </h1>
                </div>
                <Toggle>

                </Toggle>

            </div>
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

        // this.state.workersList=tilesData;
    }


}

export default WorkerSpecific;
