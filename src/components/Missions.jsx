import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const missoes = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ missoes } />
      </div>
    );
  }
}

export default Missions;
