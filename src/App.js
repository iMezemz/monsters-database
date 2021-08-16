import React from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList';
import { SearchBox } from './components/searchBox/searchBox';
import LoadingIcons from 'react-loading-icons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      firstVisit: true,
      hiVisible: false,
      loadingVisible: true,
      fadeOutHi: false
    }
  }
  componentDidMount() {
    setTimeout(this.fetching, 1000)
  }
  fetching = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }
  resetBool = () => {
    this.setState({
      firstVisit: false,
      fadeOutHi: true
    });
  }
  resetHiVisible = () => {
    this.setState({ hiVisible: true });
  }
  resetLoadingVisible = () => {
    this.setState({ loadingVisible: false });
  }
  resetFadeOutHi = () => {
    this.setState({ fadeOutHi: false });
  }

  render() {
    const { monsters, searchField, firstVisit, hiVisible, loadingVisible, fadeOutHi } = this.state;
    if (monsters.length == 0) {
      if (loadingVisible) {
        setTimeout(this.resetLoadingVisible, 500);
        return (
          <div className="App">
            <h1>Loading</h1>
            <LoadingIcons.Puff />
          </div>
        )
      }
      else {
        return (
          <div className="fadeOut">
            <h1>Loading</h1>
            <LoadingIcons.Puff />
          </div>
        )
      }
    }
    if (firstVisit) {
      if (!hiVisible) {
        setTimeout(this.resetHiVisible, 900);
        return (

          <div className="ZeroOp">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Hi  !</h1>
          </div>
        )
      }
      else {
        setTimeout(this.resetBool, 900);
        return (
          <div className="fadeIn">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Hi  !</h1>
          </div>
        )
      }
    }
    else if (fadeOutHi) {
      setTimeout(this.resetFadeOutHi, 1000)
      return (
        <div className="fadeOut">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Hi  !</h1>
        </div>
      )
    }
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="fadeIn">
        <h1>Monsters Database</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
