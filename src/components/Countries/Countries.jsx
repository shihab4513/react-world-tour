
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../Countries/Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (


        <div >
            <h1 className="text-center">Countries : {countries.length}</h1>
            <div className="country-container">
                {

                    countries.map(country => <Country key={country.name.coomon} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;