import React, { createContext, useState, useEffect } from 'react';
import { getSeeds } from '../api';
const SeedContext = createContext();

const SeedProvider = ({ children }) => {
    const [seeds, setSeeds] = useState([]);

    useEffect(() => {
        const fetchSeeds = async () => {
            try {
                const response = await getSeeds();
                setSeeds(response.plantas);
            } catch (error) {
                console.error('Erro ao obter as sementes:', error);
            }
        };

        fetchSeeds();
    }, []);

    return (
        <SeedContext.Provider value={seeds}>
            {children}
        </SeedContext.Provider>
    );
};

export { SeedContext, SeedProvider };