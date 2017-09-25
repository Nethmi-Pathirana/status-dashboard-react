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
import {CardActions, GridList, GridTile, IconButton} from "material-ui";
import OverviewChart from "./OverviewChart";
import CircleBorder from 'material-ui/svg-icons/av/fiber-manual-record';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';


const tileProperties =["CPU Usage", "Memory Usage", "Load Avg","Siddhi Apps"];

const styles = {
    gridList: {
        width: '100%',
        height: 700,
    },
};

class WorkerThumbnail extends React.Component {


    constructor(props){
        super(props);
    }

    render() {
        return (

            <GridTile
                title={this.props.worker.workerID}
                subtitle={<span>{this.props.worker.lastUpdate} <div style={{textAlign: 'right'}}><b> {this.props.worker.clusterId}  </b></div></span>}
                actionIcon= {<IconButton><CircleBorder color={this.props.worker.status==="Active"?"green":"red"} /></IconButton>}
                actionPosition="left"
                style={{background:'black'}}
                titleBackground='#424242'
                onTouchTap={this.handleTap}
            >
                <CardActions style={{marginLeft:370}} >
                    <IconButton tooltip="Edit Worker" tooltipPosition="bottom-center" ><Edit  color="grey" /></IconButton>
                    <IconButton tooltip="Delete Worker" tooltipPosition="bottom-center" ><Delete color="grey" /></IconButton>
                </CardActions>

                <div>
                    <GridList cols={4} cellHeight={200} style={styles.gridList}>
                        <GridTile title="CPU Usage" titlePosition="center">
                            <div><OverviewChart name={this.props.worker.metrics.cpu} color="navy"/></div>
                        </GridTile>

                        <GridTile title="Memory" titlePosition="center">
                            <div><OverviewChart name={this.props.worker.metrics.memory} color="#FF3D00"/></div>
                        </GridTile>

                        <GridTile title="Load Avg." titlePosition="center">
                            <div className="my-h1" style={{marginTop:50}}><h1>{this.props.worker.metrics.loadAvg} </h1><br/></div>
                        </GridTile>

                        <GridTile title="Siddhi Apps" titlePosition="center">
                            <div className="my-h1" style={{marginTop:50}}><h1 className="active-apps">{this.props.worker.siddhiApps.active}  </h1>
                                <h1 style={{display:'inline'}}>/</h1>
                                <h1 className="inactive-apps"> {this.props.worker.siddhiApps.inactive}</h1><br/><br/><br/>
                            </div>
                        </GridTile>

                    </GridList>
                </div>

            </GridTile>

        );
    }

    //TODO: navigate to pages
    handleTap(){

    }
}

export default WorkerThumbnail;