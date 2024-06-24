import { useEffect } from "react";
import { useState } from "react";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries</h3>
        </div>
    );
};

export default Countries;