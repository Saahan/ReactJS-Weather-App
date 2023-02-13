import React from "react";
import "./body.css"

export default class WeatherData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index1: false}
   
    
  }

  handleClick1 = () => {this.setState({index1: !this.state.index1});}
  handleClick2 = () => {this.setState({index2: !this.state.index2});}
  handleClick3 = () => {this.setState({index3: !this.state.index3});}
  handleClick4 = () => {this.setState({index4: !this.state.index4});}
  handleClick5 = () => {this.setState({index5: !this.state.index5});}


    render() {
      
      let temp, feelslike, temp2, feelslike2, temp3, feelslike3, temp4, feelslike4, temp5, feelslike5, unit
      
      let dt=new Date((this.props.weatherObj.list[0].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt2=new Date((this.props.weatherObj.list[1].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt3=new Date((this.props.weatherObj.list[2].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt4=new Date((this.props.weatherObj.list[3].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});
      let dt5=new Date((this.props.weatherObj.list[4].dt)*1000).toLocaleTimeString([], {hour: '2-digit'});


      if (this.props.tempFlag == true)

      {
        temp = parseInt(this.props.weatherObj.list[0].main.temp)
        temp2 = parseInt(this.props.weatherObj.list[1].main.temp)
        temp3 = parseInt(this.props.weatherObj.list[2].main.temp)
        temp4 = parseInt(this.props.weatherObj.list[3].main.temp)
        temp5 = parseInt(this.props.weatherObj.list[4].main.temp)
        feelslike = parseInt(this.props.weatherObj.list[0].main.feels_like)
        feelslike2 = parseInt(this.props.weatherObj.list[1].main.feels_like)
        feelslike3 = parseInt(this.props.weatherObj.list[2].main.feels_like)
        feelslike4 = parseInt(this.props.weatherObj.list[3].main.feels_like)
        feelslike5 = parseInt(this.props.weatherObj.list[4].main.feels_like)
        unit = "C";
      }
      
      else 
      {
        temp = parseInt((this.props.weatherObj.list[0].main.temp)*(9/5)) + 32;
        temp2 = parseInt((this.props.weatherObj.list[1].main.temp)*(9/5)) + 32;
        temp3 = parseInt((this.props.weatherObj.list[2].main.temp)*(9/5)) + 32;
        temp4 = parseInt((this.props.weatherObj.list[3].main.temp)*(9/5)) + 32;
        temp5 = parseInt((this.props.weatherObj.list[4].main.temp)*(9/5)) + 32;
        feelslike = parseInt((this.props.weatherObj.list[0].main.feels_like)*(9/5)) +32;
        feelslike2 = parseInt((this.props.weatherObj.list[1].main.feels_like)*(9/5)) +32;
        feelslike3 = parseInt((this.props.weatherObj.list[2].main.feels_like)*(9/5)) +32;
        feelslike4 = parseInt((this.props.weatherObj.list[3].main.feels_like)*(9/5)) +32;
        feelslike5 = parseInt((this.props.weatherObj.list[4].main.feels_like)*(9/5)) +32;
        unit = "F";
      }

      var icon;

      if ((this.props.weatherObj.list[0].weather[0].id / 100) == 2) {
        icon = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-lightning-fill" viewBox="0 0 16 16">
<path d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
</svg>;
      } else if ((this.props.weatherObj.list[0].weather[0].id / 100) == 3) {
       icon = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
<path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"/>
</svg>;
      } else if ((this.props.weatherObj.list[0].weather[0].id / 100) == 5) {
        icon = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
<path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"/>
</svg>
      } else if ((this.props.weatherObj.list[0].weather[0].id / 100) == 6) {
        icon = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-snow" viewBox="0 0 16 16">
<path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/>
</svg>;
      } else if ((this.props.weatherObj.list[0].weather[0].id / 100) == 7) {
        icon = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-fog2-fill" viewBox="0 0 16 16">
<path d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"/>
</svg>;
      } else if ((this.props.weatherObj.list[0].weather[0].id) == 800) {
        icon = <svg color="orange" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>;
      } else
      {
       icon = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
</svg>}
  ;


      return (
        
        <div>
          <h1>{this.props.weatherObj.city.name}</h1>
          <div className="icon">
          <span>{icon}</span></div>
          <ul className="weatherlist">
            <li onClick={this.handleClick1} data-testid='11'>{dt}:  {temp + unit}, {this.props.weatherObj.list[0].weather[0].description} 
            {this.state.index1 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[0].main.humidity}% <br/>Feels-like : {feelslike + unit}
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[0].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick2}>{dt2}:  {temp2 + unit}, {this.props.weatherObj.list[1].weather[0].description}
            {this.state.index2 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[1].main.humidity}% <br/>Feels-like : {feelslike2 + unit}
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[1].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick3}>{dt3}:  {temp3 + unit}, {this.props.weatherObj.list[2].weather[0].description}
            {this.state.index3 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[2].main.humidity}% <br/>Feels-like : {feelslike3 + unit} 
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[2].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick4}>{dt4}:  {temp4 + unit}, {this.props.weatherObj.list[3].weather[0].description}
            {this.state.index4 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[3].main.humidity}% <br/>Feels-like : {feelslike4 + unit} 
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[3].wind.speed)} Km/Hr </span>}</li>


            <li onClick={this.handleClick5}>{dt5}:  {temp5 + unit}, {this.props.weatherObj.list[4].weather[0].description}
            {this.state.index5 == true &&  <span><br/>Humidity : {this.props.weatherObj.list[4].main.humidity}% <br/>Feels-like : {feelslike5 + unit}  
            <br/>Wind-speed : {parseInt(this.props.weatherObj.list[4].wind.speed)} Km/Hr </span>}</li>


          </ul>
        </div>
      )
    }
  }