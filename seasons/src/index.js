import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // // One way to initialize state is to use Constructor!
  // Native to JS, not specific to React
  // Convention says not to do data loading in constructor
  // Technically can, but it's recommended to use componentDidMount for clearer code
  // constructor(props) {
  //   // Call base React.Component constructor before our specific constructor logic
  //   super(props);

  //   // Initialization of state is the ONLY time that we do direct assignment to state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // Other way to initialize state is to define it explicitly
  // Babel ends up generating constructor that matches any that we would explicitly define
  // so this is good shorthand
  state = { lat: null, errorMessage: "" };

  // Good for initial data loading and for things that should only be done once
  // Convention is to do data loading in here instead of in constructor
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // We called setState here, NOT = !!!!!
      // This callback method doesn't get run until after the position has been
      // acquired; doesn't get run while the constructor is being run
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Conditionals in render are hard to maintain/read so make helper functions!
  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="error">Error Message: {this.state.errorMessage}</div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  };

  // render gets called first and then componentDidUpdate
  // Good for data loading that should be done each time a component is rendered
  // When text is entered into an input, when we get props from a parent component, etc
  // componentDidUpdate() {
  //   console.log('My component was just updated - it rerendered!');
  // }

  // Good for clean up especially with non React stuff
  // Not used as heavily as in earlier versions of React
  // componentWillUnmount()

  // React says we have to define render!
  // Render should only return JSX. No network requests, getting user location, etc
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
