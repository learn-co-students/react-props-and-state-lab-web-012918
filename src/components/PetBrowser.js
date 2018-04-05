import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  //
  // pets = this.props.pets
  // adoptedPets = this.props.adoptedPets


  render() {
    let pets = this.props.pets.map(pet => {
      return <Pet  key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>})
    return (
      <div className="ui cards">
        {pets}
        {/* <code>&lt;Pet /&gt;</code> &nbsp; components should go here */}
      </div>
    );
  }
}

export default PetBrowser;


// Should have an adoptedPets prop. Use this prop to figure out if a pet is adopted or not, and pass that result to the <Pet /> components in the form of an isAdopted prop.
