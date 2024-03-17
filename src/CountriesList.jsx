import React from 'react';
import CountryCard from './CountryCard';

const CountriesList = ({ countries, onSearch }) => {
  return (
    <div className="countriesList">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.png}
        />
      ))}
    </div>
  );
};

export default CountriesList;