import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map( pet => <Pet key={pet.id} pet={pet} isAdopted={ this.props.adoptedPets.includes(pet.id) ? true : false } onAdoptPet={this.props.onAdoptPet} /> )
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
