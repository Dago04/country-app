import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const getSingleCountry = async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await res.json();
                setCountry(data);
            } catch (error) {
                console.error(error);
            }
        };

        getSingleCountry();
    }, [name]);

    useEffect(() => {
        document.title = `Countries | ${name}`;
    }, [name]);

    return (
        <>
            <section className="p-8 md:py-0 max-w-7xl mx-auto">
                {country.map((item) => (
                    <div
                        key={item.population}
                        className="grid grid-cols-1 gap-10 md:grid-cols-2 md:place-items-center md:h-screen"
                    >
                        <article>
                            <img src={item.flags.svg} alt={item.name.common} />
                        </article>

                        <article>
                            <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                                {item.name.common}
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-start">
                                <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400 mr-8">
                                    <li> <span className="dark:text-white dark:text-opacity-90 font-semibold">Native Name:</span> {item.name.official}</li>
                                    <li> <span className="dark:text-white dark:text-opacity-90 font-semibold">Capital: </span>{item.capital[0]}</li>
                                    <li> <span className="dark:text-white dark:text-opacity-90 font-semibold">Population: </span>{item.population.toLocaleString()}</li>
                                    <li><span className="dark:text-white dark:text-opacity-90 font-semibold">Region: </span>{item.region}</li>
                                    <li><span className="dark:text-white dark:text-opacity-90 font-semibold">Subregion: </span>{item.subregion}</li>

                                </ul>

                                <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                                    {/* Nuevo elemento para los lenguajes */}
                                    {item.languages && (
                                        <li>
                                            <span className="dark:text-white dark:text-opacity-90 font-semibold"> Languages: </span>{Object.values(item.languages).join(', ')}
                                        </li>
                                    )}
                                    {/* Nuevo elemento para las monedas */}
                                    {item.currencies && (
                                        <li>
                                            <span className="dark:text-white dark:text-opacity-90 font-semibold">Currencies: </span>{Object.values(item.currencies).map(currency => `${currency.name}`).join(', ')}
                                        </li>
                                    )}
                                </ul>
                            </div>




                            {item.borders && (
                                <>
                                    <div className="flex flex-col items-start gap-4 lg:flex-row ">
                                        <h3 className="text-gray-900 font-bold text-lg  dark:text-white">
                                            Border Countries:
                                        </h3>
                                        <ul className="flex flex-wrap items-start justify-start gap-2">
                                            {item.borders.map((border, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700"
                                                >
                                                    {border}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </>
                            )}

                            <Link
                                to="/"
                                className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
                            >
                                &larr; Back
                            </Link>
                        </article>
                    </div>
                ))}
            </section>
        </>
    );
}