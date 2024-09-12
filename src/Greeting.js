import React from 'react';
import propTypes from 'prop-types';

function Greeting(props) {
    return <h2>{props.greeting}, {props.name}!</h2>
}

Greeting.propTypes = {
    name: propTypes.number.isRequired,
    greeting: propTypes.string.isRequired,
};

export default Greeting;