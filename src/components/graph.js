import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';


export default class Graph extends React.Component {
  constructor(props) {
      super(props);
      
      
  }

  render()

  
  { return(
    <div>
  <LineChart width={1100} height={400} data={this.props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    {this.props.showTempGraph == true &&
    <Line type="monotone" dataKey="Temperature" stroke="#1c12e0" />}
    {this.props.showWindGraph == true &&
    <Line type="monotone" dataKey="windSpeed" stroke="#d60d0d" />}
    {this.props.showFeelsGraph == true &&
    <Line type="monotone" dataKey="feelslike" stroke="#25b3a2" />}
    
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart></div>);



  }


}