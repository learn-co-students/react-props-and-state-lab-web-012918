import React from 'react';

import Pet from './Pet';
import {getAll} from '../data/pets.js'

class PetBrowser extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: getAll()
    }
    console.log(this.state)
  }


  render() {
    return (
      <div className="ui cards">
        {this.state.pets.map((pet) => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>)}
      </div>
    );
  }
}

export default PetBrowser;
