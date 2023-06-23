import React, { Component } from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json();
        })
        .then(users => {
          const updatedUsers = users.map(user => {
            return { ...user, fullName: user.name };
          });
          this.setState({ robots: updatedUsers });
        });
    }    
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

      render() {
        const filteredRobots = this.state.robots.filter(robot => {
          return robot.fullName.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
      
        return (
          <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        );
      }
    }

export default App;