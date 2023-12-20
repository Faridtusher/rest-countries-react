import React from 'react';
import './Country.css'

const Country = (props) => {
   const {name, capital, population, flags} = props.country;
   console.log(props.country)
   return (
      <div className='flag-style'>
         <img src={flags.png} alt="" />
         <h2>Name : {name.common}</h2>
         <h4>Capital : {capital}</h4>
         <p>population : {population}</p> 
      </div>
   );
};

export default Country;