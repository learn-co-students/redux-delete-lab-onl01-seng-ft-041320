import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
          <button onClick={this.handleOnClick}>
            Delete
            </button>
        </ul>
      </div>
    )
  }
};

export default Band;
