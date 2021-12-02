import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'


function CountryDetails() {
    const {alpha3Code} = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        (async() => {
            const data = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`)
            const result = await data.json()
            setCountry(result)
            console.log(result)
        })()
    }, [alpha3Code])

    if(!country) {
        return null
    }

    return (
        <div>
            <h1>Country Details</h1>
            <img src={country[0].flags.svg} alt="" height="100"/>
            <h3>Name: {country[0].name.common}</h3>
            <p>Capital: {country[0].capital}</p>
        </div>
    )
}

export default CountryDetails
