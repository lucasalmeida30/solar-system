import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetas = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ planetas } />
        <PlanetCard planetName={ planets[0].name } />
      </div>
    );
  }
}

export default SolarSystem;
