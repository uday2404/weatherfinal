import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Enter city name"/>
        <input type="text" name="country" placeholder="Enter country name"/>
        <button>Get Weather</button>
    </form>
);

export default Form;