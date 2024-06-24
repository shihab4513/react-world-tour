
import '../Country/Country.css'
const Country = ({ country }) => {
    const { name, capital, population, region, languages, flags, continents } = country;

    console.log(country);
    return (
        <div className="box">
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Official name : {name.official} </h3>
            <h3>continents : {continents} </h3>
            <h3>Capital : {capital} </h3>
            <h3>Region : {region} </h3>
            <h3>Population : {population} </h3>
            {/* <p>Languages: {Object.values(languages).join(', ')}</p> */}
            {/* <p>Capital: {capital[0]}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
     
      <img src={flag.png} alt={`${name.common} Flag`} /> */}
        </div>
    );
};

export default Country;
