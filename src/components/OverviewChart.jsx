import React, { Component } from 'react';
import {VictoryPie} from 'victory';


class OverviewChart extends Component{
    constructor(props){
        super(props);
        let num = this.props.name;
        this.state =  {
            data : [
                { x: "", y: num },
                { x: "", y: 100-num },
            ],
            color: this.props.color,
        }
    }
    render(){
        return(
            <VictoryPie padAngle={3} innerRadius={100}  data={this.state.data} colorScale={[ this.state.color,"#616161" ]}/>
        );
    }
}

export default OverviewChart;
