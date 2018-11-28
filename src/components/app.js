import React, { Component } from 'react'


//Commponents
import Search from '../containers/search';
import CarsList from '../containers/carsList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Search />
        <CarsList />
      </div>
    )
  }
}

export default App;