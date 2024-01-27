import { useState, useEffect } from "react";
import Article from "./Article";

export default function Countries() {
    const [countries, setCountries] = useState([]);

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
    }, [])


    return (
        <>
            {!countries ? (
                <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center
        justify-center text-center h-screen text-4xl dark:text-white">Loading...</h1>
            ) : (

                <section>
                    {/* form */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {countries.map((country) => (
                            <Article key={country.name.common} {...country} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}