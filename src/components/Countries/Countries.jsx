/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../Countries/Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
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
    }

    return (


        <div >
            <h1 className="text-center">Countries : {countries.length}</h1>
            <div>
                <h5>Visited Countries</h5>
                <ul>

                </ul>
            </div>

            <div className="country-container">
                {

                    countries.map(country => <Country key={country.name.coomon}
                        // we can send function as props as well. we can send anything as props
                        handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;