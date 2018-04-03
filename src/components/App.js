import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

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

  onChangeType = (event) => {
    this.setState({
      filters:{
        type: event.target.value,
      }
    })
  }

  onFindPetsClick = () =>{
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    } else if (this.state.filters.type === 'cat'){
      fetch('/api/pets?type=cat')
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    } else if (this.state.filters.type === 'dog'){
      fetch('/api/pets?type=dog')
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    }else if (this.state.filters.type === 'micropig'){
      fetch('/api/pets?type=micropig')
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    }
  }

  onAdoptPet = (id) => {
    if(!this.state.adoptedPets.includes(id)){
      let pet = this.state.pets.find(element=>{
        return element.id === id
      })
      let index = this.state.pets.indexOf(pet)
      let newPets = this.state.pets.slice(0)
      newPets[index].isAdopted = !newPets[index].isAdopted
      let newAdoptedPets = this.state.adoptedPets.slice(0)
      newAdoptedPets.push(id)

      this.setState({
        adoptedPets: newAdoptedPets,
        pets: newPets
      }, ()=>console.log(this.state.adoptedPets))
    }

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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
