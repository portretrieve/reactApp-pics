import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    this.setState({ term: event.target.value });
    // console.log(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="field">
            <label htmlFor="name">Image Search</label>
            <input
              type="text"
              id="name"
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
