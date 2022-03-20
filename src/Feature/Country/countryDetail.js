
import React from 'react';
import { useContext, useState } from "react"
import {  useQuery } from "react-query";
import { countryContext } from "./countryContext"

async function fetCountry(query) {
    debugger;
    if (query.queryKey[0]) {
        const response = await fetch(`https://api.github.com/repos/tannerlinsley/react-query`);
        const data = await response.json();    
        return data;
    }
    throw "exception fetCountry";

}

const CountryDetail = () => {
    const {country} = useContext(countryContext);
    const {data, isLoading, error} = useQuery([country], fetCountry);

    if (isLoading) return <span>Loading...</span>
    if (error) return <span>Oop!! Error occurred!</span>
    return (
        <div>
            <h1>{country}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        
    );
}

export const ContryContent = () => {
    const [country, setCountry] = useState(false);
    const loadDataHandler = () => {
        debugger;
        setCountry(!country);
    }
    return (
        <countryContext.Provider value = {{country, setCountry} }>
            {/* <CountryDetail/> */}
            <button onClick={() => loadDataHandler()}>Load data</button>
        </countryContext.Provider>
    )
}