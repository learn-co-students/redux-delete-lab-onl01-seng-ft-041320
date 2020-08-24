import React from 'react';
import Band from './Band';

const Bands = (props) => {
    return (
        <div>
            <h1>Bands</h1>
            <ul>
             {props.bands.map(band => <Band name={band.name} id={band.id} key={band.id} deleteBand={props.deleteBand} />)}
            </ul>
        </div>
    )
}

export default Bands