import React, { Component } from 'react';
import Band from './Band'

import { connect } from 'react-redux'

class Bands extends Component {

  renderAllBands = () => {
    return this.props.bands.map( (band) => {
      return <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/> 
    } )
  }

  render(){
    return (
      <div>
        {this.renderAllBands()}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: id => dispatch({ type: "DELETE_BAND", id}) 
  }
}

export default connect(null, mapDispatchToProps)(Bands)
