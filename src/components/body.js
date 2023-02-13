import React from "react";
import WeatherData from "./weatherdata";
import Graph from "./graph";
import Settings from "./settings";
import "./body.css"

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTempGraph: this.props.showTempGraph,
      showWindGraph: this.props.showWindGraph,
      showFeelsGraph: this.props.showFeelsGraph,
      tempFlag: true
    };
  }

  showTempGraph = (show) => {
    this.setState({ showTempGraph: !show });
    //console.log(this.state.showTempGraph);
  };

  showWindGraph = (show2) => {
    this.setState({ showWindGraph: !show2 });
    //console.log(this.state.showWindGraph);
  };

  showFeelsGraph = (show3) => {
    this.setState({ showFeelsGraph: !show3 });
    //console.log(this.state.showFeelsGraph);
  };

  sendTempFlag = (tempFlag) => {this.setState({tempFlag: tempFlag}); 
  console.log(this.state.tempFlag)
}


  render() {
    
    let temp, feelslike, temp2, feelslike2, temp3, feelslike3, temp4, feelslike4, temp5, feelslike5

    let dt = new Date( //This is Graph Data
      this.props.weatherObj.list[0].dt * 1000
    ).toLocaleTimeString([], { hour: "2-digit" });
    let windspeed = this.props.weatherObj.list[0].wind.speed;

    if (this.state.tempFlag == true)
{
    temp = this.props.weatherObj.list[0].main.temp;
    feelslike = this.props.weatherObj.list[0].main.feels_like;
}
    else {

    temp = (this.props.weatherObj.list[0].main.temp)*(9/5) + 32;
    feelslike = (this.props.weatherObj.list[0].main.feels_like)*(9/5) + 32;

    }

    let dt2 = new Date(
      this.props.weatherObj.list[1].dt * 1000
    ).toLocaleTimeString([], { hour: "2-digit" });
    let windspeed2 = this.props.weatherObj.list[1].wind.speed;

    if (this.state.tempFlag == true)
{
    temp2 = this.props.weatherObj.list[1].main.temp;
    feelslike2 = this.props.weatherObj.list[1].main.feels_like;
}
    else {

    temp2 = (this.props.weatherObj.list[1].main.temp)*(9/5) + 32;
    feelslike2 = (this.props.weatherObj.list[1].main.feels_like)*(9/5) + 32;

    }

    let dt3 = new Date(
      this.props.weatherObj.list[2].dt * 1000
    ).toLocaleTimeString([], { hour: "2-digit" });
    let windspeed3 = this.props.weatherObj.list[2].wind.speed;

    if (this.state.tempFlag == true)
{
    temp3 = this.props.weatherObj.list[2].main.temp;
    feelslike3 = this.props.weatherObj.list[2].main.feels_like;
}
    else {

    temp3 = (this.props.weatherObj.list[2].main.temp)*(9/5) + 32;
    feelslike3 = (this.props.weatherObj.list[2].main.feels_like)*(9/5) + 32;

    }

    let dt4 = new Date(
      this.props.weatherObj.list[3].dt * 1000
    ).toLocaleTimeString([], { hour: "2-digit" });
    let windspeed4 = this.props.weatherObj.list[3].wind.speed;

    if (this.state.tempFlag == true)
{
    temp4 = this.props.weatherObj.list[3].main.temp;
    feelslike4 = this.props.weatherObj.list[3].main.feels_like;
}
    else {

    temp4 = (this.props.weatherObj.list[3].main.temp)*(9/5) + 32;
    feelslike4 = (this.props.weatherObj.list[3].main.feels_like)*(9/5) + 32;

    }

    let dt5 = new Date(
      this.props.weatherObj.list[4].dt * 1000
    ).toLocaleTimeString([], { hour: "2-digit" });
    let windspeed5 = this.props.weatherObj.list[4].wind.speed;

    if (this.state.tempFlag == true)
{
    temp5 = this.props.weatherObj.list[4].main.temp;
    feelslike5 = this.props.weatherObj.list[4].main.feels_like;
}
    else {

    temp5 = (this.props.weatherObj.list[4].main.temp)*(9/5) + 32;
    feelslike5 = (this.props.weatherObj.list[4].main.feels_like)*(9/5) + 32;

    }

    
    return (
      <div className="maingrid">
        <div className='grid-item1'>
          <WeatherData weatherObj={this.props.weatherObj} tempFlag={this.state.tempFlag} />
        </div>
        <div className='grid-item2'>
          <Graph
            
            showTempGraph={this.state.showTempGraph}
            showWindGraph={this.state.showWindGraph}
            showFeelsGraph={this.state.showFeelsGraph}
            data={[
              {
                name: dt,
                Temperature: parseInt(temp),
                windSpeed: windspeed,
                feelslike: parseInt(feelslike),
                
              },
              {
                name: dt2,
                Temperature: parseInt(temp2),
                windSpeed: windspeed2,
                feelslike: parseInt(feelslike2),
                
              },
              {
                name: dt3,
                Temperature: parseInt(temp3),
                windSpeed: windspeed3,
                feelslike: parseInt(feelslike3),
                
              },
              {
                name: dt4,
                Temperature: parseInt(temp4),
                windSpeed: windspeed4,
                feelslike: parseInt(feelslike4),
                
              },
              {
                name: dt5,
                Temperature: parseInt(temp5),
                windSpeed: windspeed5,
                feelslike: parseInt(feelslike5),
               
              },
            ]}
          />
        </div>
        <div className='grid-item3'>
        <Settings
          showTempGraph={this.showTempGraph}
          showTempLine={this.state.showTempGraph}
          showWindGraph={this.showWindGraph}
          showWindLine={this.state.showWindGraph}
          showFeelsGraph={this.showFeelsGraph}
          showFeelsLine={this.state.showFeelsGraph}
          sendTempFlag = {this.sendTempFlag}
          default = {this.state.tempFlag}
          
        />
        </div>
      </div>
    );
  }
}
