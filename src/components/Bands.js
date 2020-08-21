import React from 'react';
import Band from './Band';

const Bands = props => {
    return (
        <div>
            {props.bands.map( band => {
                return <Band key={band.id} {...band} deleteBand={props.deleteBand} />
            })}
        </div>
    )
}

export default Bands;

