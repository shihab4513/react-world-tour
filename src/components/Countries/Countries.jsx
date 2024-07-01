/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../Countries/Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    // Where there will be state there will be handle as well

    const handleVisitedCountry = country => {
        console.log('Add this to your visited countries');
        console.log(country);
        // visitedCountries.push(country);
        // we cant use push for our convenience in useState. we have to do some karpa.
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlag = country => {
        const newVisitedFlag = [...visitedFlags, country];
        setVisitedFlags(newVisitedFlag);
    }
    // remove an item from an array in a state
    // use filter to select all the element except the one you want to remove

    return (


        <div >
            <h1 className="text-center">Countries : {countries.length}</h1>
            <div>
                <h3>Visited Countries : {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common} </li>)

                    }
                </ul>
            </div>

            <div className="flag-container">
                <h3>Visited Flags: {visitedFlags.length} </h3>
                <div className="flag-flex">
                    {
                        visitedFlags.map(country =>

                            <img key={country.cca3} src={country.flags.png} />

                        )
                    }
                </div>


            </div>

            <div className="country-container">
                {

                    countries.map(country => <Country key={country.name.coomon}
                        // we can send function as props as well. we can send anything as props
                        handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;