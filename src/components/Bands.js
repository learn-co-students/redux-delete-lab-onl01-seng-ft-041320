import React from 'react'
import Band from './Band'
import { connect } from 'react-redux'

const Bands = props => {
    const bands = props.bands.map(band => < Band key = { band.id } { ...band } deleteBand = { props.deleteBand } />)

    return (
        <div>
            {bands}
        </div>
    )
}

// export default Bands

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
    deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Bands)