/* eslint-disable no-unused-vars */

import { useState } from 'react';
import '../Country/Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const { name, capital, population, region, flags, continents, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // setVisited(true);
        visited ? setVisited(false) : setVisited(true);
    }
    // const passWithParams=()=>{
    //     handleVisitedCountry(country);
    // }
    console.log(country);
    // console.log(handleVisitedCountry);
    return (
        // conditional class if visited then  'visited' class added 
        <div className={`box ${visited && 'visited'}`}>
            {/* below code is also conditional style , if visited header text color will be purple else white */}
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name : {name.common}</h3>
            <img src={flags.png} alt={`${name.common} Flag`} />
            <h3>Official name : {name.official} </h3>
            <h3>continents : {continents} </h3>
            <h3>Capital : {capital} </h3>
            <h3>Region : {region} </h3>
            <h3>Population : {population} </h3>
            <h3>Code : <small>{cca3}</small></h3>
            {/* inside onclick we can send parameter inside function as well for that we have to use an empty arrow function inside that our function with parameter we can send */}
            <button onClick={() => {
                handleVisitedCountry(country);
            }}>Mark Visited</button><br />
            <button onClick={() => {
                handleVisitedFlag(country);
            }}>Mark flag as visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>




        </div>
    );
};

export default Country;
