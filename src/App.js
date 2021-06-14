import React from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList';
import { SearchBox } from './components/searchBox/searchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''

    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Database</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
