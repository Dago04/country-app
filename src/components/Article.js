import React from 'react'
import { Link } from 'react-router-dom';
export default function Article({ flags, name, population, region, capital }) {
    return <>
        <Link to={`/${name.common}`}>
            <article className='bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden'>
                <img src={flags.svg} className='md:h-72 w-full object-cover ' alt={name.common} />
                <div className='p-4'>
                    <h2 className='font-bold text-lg  text-gray-900 mb-2 dark:text-white'>{name.common}</h2>
                    <ul className='flex flex-col items-start justify-start gap-2 dark:text-gray-400'>
                        <li> <span className=" font-semibold dark:text-white dark:text-opacity-90">Population: </span>{population.toLocaleString()}</li>
                        <li> <span className=" font-semibold dark:text-white dark:text-opacity-90">Region: </span>{region}</li>
                        <li> <span className="font-semibold dark:text-white dark:text-opacity-90">Capital: </span>{capital}</li>
                    </ul>
                </div>
            </article>
        </Link>

    </>;
}
