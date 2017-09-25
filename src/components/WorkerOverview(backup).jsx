import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import SubHeader from 'material-ui/Subheader';
import CircleBorder from 'material-ui/svg-icons/av/fiber-manual-record';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import OverviewChart from "./OverviewChart";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 700,
    overflowY: 'auto',
    padding: 40,
  },
};
const styles2 = {
  gridList: {
    width: '100%',
    height: 700,
  },
};

const tilesData = [
  {
    title: '10.100.5.41:4040',
    author: 'Last updated 5 mins ago',
    clusterId: 'clusterA',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
  {
    title: '10.100.5.42:4045',
    author: 'Last updated 5 mins ago',
    clusterId: 'clusterB',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
  {
    title: '10.100.5.43:8080',
    author: 'Last updated 5 mins ago',
    clusterId: 'clusterC',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
  {
    title: '10.100.5.44:9000',
    author: 'fancycrave1',
    clusterId: 'clusterE',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
  {
    title: '10.100.5.45:5005',
    author: 'Last updated 5 mins ago',
    clusterId: 'clusterF',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14],
  },
  {
    title: '10.100.5.46:9005',
    author: 'Last updated 5 mins ago',
    clusterId: 'clusterG',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
  {
    title: '10.100.5.47:8005',
    author: 'Last updated 5 mins ago',
    clusterId: 'clusterH',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
  {
    workerID: '10.100.5.48:8055',
    lastUpdate: 'Last updated 5 mins ago',
    clusterId: 'clusterI',
    names: ["CPU Usage", "Memory Usage","Load Avg", "Siddhi Apps"],
    value: [15,12,13,14,7],
  },
];


const GridListExampleSimple = () => (
<div style={styles.root}>
    <GridList
      cols={3}
      padding={50}
      cellHeight={300}
      style={styles.gridList} >
      
      {tilesData.map((tile) => (
          <GridTile
            title={tile.title}
            subtitle={<span>{tile.author} <div style={{textAlign: 'right'}}><b> {tile.clusterId}  </b></div></span>}
            actionIcon= {<IconButton><CircleBorder color="white" /></IconButton>}
            actionPosition="left"
            style={{background:'black'}}
            titleBackground='#424242'
          >
              <CardActions style={{marginLeft:320}} >
                  <IconButton tooltip="Edit Worker" touch={true} tooltipPosition="bottom-center" ><Edit  color="white" /></IconButton>
                  <IconButton tooltip="Delete Worker" touch={true} tooltipPosition="bottom-center" ><Delete color="white" /></IconButton>
              </CardActions>

            <div style={styles2.root}>
              <GridList cols={4} cellHeight={200} style={styles2.gridList}>

              {tile.names.map((data) => (
                <GridTile title={data} titlePosition="center">

                    <div><OverviewChart name={20} color="tomato"/></div>

                </GridTile>
              ))}
              </GridList>
            </div>

          </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
