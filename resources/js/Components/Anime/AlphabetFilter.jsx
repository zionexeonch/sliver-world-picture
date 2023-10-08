import axios from "axios";
import React, { useState } from "react";

export default function AlphabetFilter({ handleChange }) {
    const [filteredAnimes, setFilteredAnimes] = useState([]);

    const handleFilterChange = async (e) => {
        handleChange(e);
        const alphabet = e.target.value;
        if (alphabet) {
            const response = await axios.get(`/anime/filter/${alphabet}`);
            setFilteredAnimes(response.data);
        } else {
            setFilteredAnimes([]);
        }
    };

    return (
        <select onChange={handleFilterChange}>
            <option value="">Semua</option>
            {[...Array(26)].map((_, i) => (
                <option key={i} value={String.fromCharCode(65 + i)}>
                    {String.fromCharCode(65 + i)}
                </option>
            ))}
        </select>
    );
}
