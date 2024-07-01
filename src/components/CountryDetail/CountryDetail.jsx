import CountryData from "../CountryData/CountryData";

/* eslint-disable no-unused-vars */
const CountryDetail = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    return (
        <div>
            <h4>Country Details : </h4>
            <hr />
            <CountryData country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}></CountryData>

        </div>
    );
};

export default CountryDetail;