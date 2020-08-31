import React, { Component } from 'react';

/*
class Band extends Component {

  render() {
    return(
      <div>
        <ul>
          <li>{this.props.band.name}</li>
        </ul>
        <button onClick={() => this.props.deleteBand(this.props.band.id)} >Delete Band</button>
      </div>
    );
  }
};
*/

const Band = (props) => {
  return (
    <div>
      <ul>
        <li>{props.band.name}</li>
      </ul>
      <button onClick={ () => props.deleteBand(props.band.id) }>Delete Band</button>
    </div>
  )
}


export default Band;