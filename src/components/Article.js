import React from 'react'

export default function Article({ flags, name, population, region, capital }) {
    return <>
        <article>
            <img src={flags.svg}></img>
            <h2 className='font-bold text-lg  text-gray-900 mb-2'>{name.common}</h2>
            <ul className='flex flex-col items-start justify-start gap-2'>
                <li>Population: {population.toLocaleString()}</li>
                <li>Region: {region}</li>
                <li>Capital: {capital}</li>
            </ul>
        </article>
    </>;
}
