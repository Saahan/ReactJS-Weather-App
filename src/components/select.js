import React from "react";

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ``                            //fix
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit(event) {
                                                        
    console.log("The form submitted with input: " + this.state.userInput);
    this.setState((state, props) => {
      return { selectedValue: state.userInput };
    });
    
    this.props.dataTransfer(this.state.userInput);                                                     //data going to search
    
    event.preventDefault();                                                                          // Prevent default form submission behavior
  }
  

  render() {
    const cities = this.props.data;
    return (
      <div className="selectbar">
        {cities[0] ? (
          <form onSubmit={this.handleSubmit}>
            <label>Select City:</label>
            <select onClick={this.handleChange}>
              
              {cities.map((city, index) => (
                <option
                  key={index}
                  value={`${city.name}, ${city.country}`}
                >
                  {city.name}, {city.state}, {city.country}
                </option>
              ))}
            </select>
            
              <input type="submit" value="Apply" className="btn btn-secondary"/>
            
          </form>
        ) : (
          <p>No Cities Found, Try Again</p>
        )}
      </div>
    );
  }
}
