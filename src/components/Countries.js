import { useState, useEffect } from "react";
import Article from "./Article";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState('');


    const regions = [
        { name: 'Europe' },
        { name: 'Asia' },
        { name: 'Africa' },
        { name: 'Oceania' },
        { name: 'Americas' },
        { name: 'Antarctic' }
    ]
    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCountries();
    }, []);
    useEffect(() => {
        document.title = `All countries`;
    }, []);
    async function searchCountry() {
        try {
            const rest = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
            const data = await rest.json();
            setCountries(data);
        } catch (error) {
            console.log(error);

        }
    }

    async function filterByRegion(region) {
        try {
            const rest = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            const data = await rest.json();
            setCountries(data);
        } catch (error) {

        }
    }

    function handleSearchCountry(e) {
        e.preventDefault();
        searchCountry();
    }

    function handleFilterByRegion(e) {
        e.preventDefault();
        filterByRegion();
    }


    return (
        <>
            {!countries ? (
                <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center
        justify-center text-center h-screen text-4xl dark:text-white">Loading...</h1>
            ) : (

                <section className="container mx-auto p-8">
                    {/* form */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                        <form onSubmit={handleSearchCountry} autoComplete="off" className=" max-w-md md:flex-1 ">
                            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} name="search" id="search" placeholder="Search for a country" required className="py-3 px-4 text-gray-600 placeholder-gray-600  rounded shadow
                            w-full outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"
                            ></input>
                        </form>
                        <form onSubmit={handleFilterByRegion} >
                            <select name="filter-by-region" id="filter-by-region" className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 
                             dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200  dark:placeholder-gray-400 " value={regions.name} onChange={e => filterByRegion(e.target.value)}>
                                {regions.map((region, index) => (
                                    <option key={index} value={region.name}>{region.name}</option>
                                ))}
                            </select>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {countries.map((country) => (
                            <Article key={country.name.common} {...country} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}