import React from 'react';

const CountryCard = ({ name, flag }) => (
  <div className="countryCard">
    <img src={flag} alt={`${name}'s flag`} />
    <p>{name}</p>
  </div>
);

export default CountryCard;