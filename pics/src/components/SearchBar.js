import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    // onSubmit is the variable that represents the function
    // passed into SearchBar from App; has to be accessed with `this`
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

/* Notes

No parens at the end of onInputChange otherwise it will be run every time
the component is rendered

Uncontrolled Component Syntax:
onInputChange(event) {
  console.log(event.target.value);
}
<input type="text" onChange={this.onInputChange} />

Alternate Event Handler Syntax:
<input type="text" onChange={(e) => console.log(e.target.value)} />

Controlled Component Syntax:
state = { term: "" };
...
<input
  type="text"
  value={this.state.term}
  onChange={e => this.setState({ term: e.target.value })}
/>
Controlled components actually store their state instead of relying on
the DOM for state management (which is v bad). Let's rely on React!


this

`this` is a reference to the instance of the class you're working on
The value of `this` in a function is determined by whatever object
the function was called on

Ways to fix `this` being undefined in a function call:

1. Bind `this` to function in constructor. Produces a new version of the function
that properly sets up `this` and overwrites the "broken" existing one
****This is a legacy way of doing it****
constructor() {
  this.myMethod = this.myMethod.bind(this);
}

2. Turn the function into an arrow function. This automatically does the binding for us
Instead of:
onFormSubmit(event) {...}
Do:
onFormSubmit = (event) => {...}

3. Call function as an arrow function
Instead of:
<form className="ui form" onSubmit={this.onFormSubmit}>
Do:
<form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
*/

export default SearchBar;
