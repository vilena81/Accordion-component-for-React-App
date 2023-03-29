import React from 'react'
import { useState, useEffect } from 'react'


export default function AccordionFunc() {

    const [countries, setCountries] = useState([]);
    const [activeIndex, setActiveIndex] = useState("");

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/capital")
            .then(res => res.json())
            .then(data => setCountries(data.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div>
                {countries.map((country, index) => (
                    <div key={index}>
                        <button className='btn2' onClick={() => setActiveIndex((prevState => prevState === index ? null : index))}>
                            {country.name}
                        </button>
                        {index === activeIndex && (
                            <div>
                                <p>Capital:{country.capital}</p>
                                <p>iso2:{country.iso2}</p>
                                <p>iso3:{country.iso3}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
