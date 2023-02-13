import React from "react";
import Search from "./search";
import Body from "./body";
import "./body.css"

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSearchtoMain: "", weatherObj: "", displayNavBar: true };

    this.dataSearchtoMain = this.dataSearchtoMain.bind(this);
  }

  dataSearchtoMain = (userInput) => {
    this.setState({ dataSearchtoMain: userInput });
    console.log(userInput);

    const Weather_API_key = "667a02c0339d273699a620c39b57e886";
    const url = "https://api.openweathermap.org/data/2.5/forecast";

    fetch(`${url}?q=${userInput}&appid=${Weather_API_key}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ weatherObj: data });
        console.log("API data came mounted");
      });

    this.setState({ displayNavBar: !this.state.displayNavBar });
  };

  displayNavBar = () => {
    this.setState({ displayNavBar: !this.state.displayNavBar });
  };

  render() {
    return (
      <div>
        <div>
        {this.state.displayNavBar == true ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fillRule="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={this.displayNavBar}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            <br/>
            <div className="menuBar"> 
            <Search dataSearchtoMain={this.dataSearchtoMain} /></div>{" "}
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fillRule="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
            onClick={this.displayNavBar}
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        )}
        </div>

        <div>
        {this.state.weatherObj.city ? (
          <Body
            weatherObj={this.state.weatherObj}
            showTempGraph={true}
            showWindGraph={true}
            showFeelsGraph={true}
          />
        ) : (
          <p>{this.state.weatherObj.message}</p>
        )}
      </div>
      </div>
    );
  }
}
