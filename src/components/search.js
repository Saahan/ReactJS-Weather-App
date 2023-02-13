import React from "react";
import Select from "./select";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInput: "",
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitCity = this.submitCity.bind(this);
    this.dataSearchtoMain = this.dataSearchtoMain.bind(this);
    this.dataTransfer = this.dataTransfer.bind(this);
  }

  handleUserInput(event) {
    this.setState((state, props) => {
      return { SearchCity: event.target.value };
    });
  }

  

  dataTransfer = (userInput) => {
    this.setState ({datatransfer: userInput})       //data coming from select comp
    this.dataSearchtoMain(userInput);                                                            //call the function sending data to main.js
    
      }

  dataSearchtoMain = (userInput) => {this.props.dataSearchtoMain(userInput)};                      //data going to main.js
  
  submitCity() {
    const Weather_API_key = "667a02c0339d273699a620c39b57e886";

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.SearchCity}&limit=5&appid=${Weather_API_key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ citylist: data });
        
      });
  }



  render() {
    return (
      <div className="flexbar">
        <form className="searchbar">
          <div>
            <input type="text" onChange={this.handleUserInput} />
          
            <button type="button" onClick={this.submitCity} className="btn btn-secondary">
              Lookup Cities
            </button>
          </div>
        </form>
        {this.state.citylist &&
        <Select data={this.state.citylist} dataTransfer = {this.dataTransfer}/>}
      </div>
    );
  }
}
