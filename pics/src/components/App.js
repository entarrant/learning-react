import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  // Async await is an alternate syntax to promise syntax
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 3953590c77407292ed39d701251a32f6ace0776362bf4b56b5580525a864685b"
      }
    });

    this.setState({ images: response.data.results });
  };

  /*
Original promise handling syntax:

// Call to axios returns a promise, which gives us a notification when the request
// is complete
axios
  .get("https://api.unsplash.com/search/photos", {
    params: { query: term },
    headers: {
      Authorization:
        "Client-ID 3953590c77407292ed39d701251a32f6ace0776362bf4b56b5580525a864685b"
    }
  })
  .then(response => {
    // callback that will be envoked with the data we get back from unsplash
    console.log(response.data.results);
  });
*/

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
