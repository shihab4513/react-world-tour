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

    const handleVisitedCountry = country => {
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

                    countries.map(country => <Country key={country.name.coomon} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;