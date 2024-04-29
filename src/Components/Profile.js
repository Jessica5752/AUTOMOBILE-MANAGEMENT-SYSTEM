import React from "react";
import ReactDOM from "react-dom";


class AppUser extends React.Component {
  state = {
    data: null,
    filter: ""
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=500")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }
  render() {
    return (
      <div className="App">
        <input
          value={this.state.filter}
          onChange={e => {
            this.setState({
              filter: e.target.value
            });
          }}
        />

        {this.state.data &&
          this.state.data
            .filter(user => user.email.includes(this.state.filter))
            .map(user => (
              <div
                key={user.email}
                style={{
                  display: "inline-block"
                }}
              >
                <img src={user.picture.medium} />
                <div>{user.email}</div>
              </div>
            ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Random API Profiles</h1>
      <AppUser />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App
