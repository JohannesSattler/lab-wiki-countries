import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

function CountriesList() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        (async() => {
            const data = await fetch(`https://restcountries.com/v3.1/all`)
            const result = await data.json()
            setCountries(result)
            console.log(result)
        })()
    }, [])

    if(!countries.length) {
        return null;
    }

    return (
        <>
            <h1>Countries List</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    countries.map(country => {
                        return (
                        <>
                            <Link style={{padding: '3px'}} to={`/countries/${country.cca3}`}>{country.name.common}</Link><br />
                        </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CountriesList
