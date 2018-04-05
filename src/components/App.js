import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import {getAll} from '../data/pets.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  componentDidMount() {
    this.fetchAllPets()
  }

  fetchAllPets = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    this.state.filters.type === "all" ? this.fetchAllPets() :
    (
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    )
  }

  onAdoptPet = (id) => {
    this.setState({adoptedPets: [...this.state.adoptedPets, id]})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
