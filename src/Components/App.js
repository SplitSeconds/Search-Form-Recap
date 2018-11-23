import React, { Component } from 'react';
import '../App.css';
import jsonNames from '../names.json'
import Searchbar from './Searchbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      names: {jsonNames}
    }
  }
  handleSearch=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    let upperSearch = this.state.search.toUpperCase()
    // let filteredNames = this.props.names
      // .filter(name => {
      //   if (name.toUpperCase().includes(upperSearch)) return true
      //   return false
      // })
      // .sort((a,b) => (a > b ? 1 : -1))
    return (
      <div className="Search">
      Search:
      <Searchbar 
        search={this.state.search} 
        onSearch={this.handleSearch} 
      />
        <ul>
        {jsonNames
          .filter(name => name.includes(this.state.search.toUpperCase()))
          .map(name => (
            <li className="name">{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
