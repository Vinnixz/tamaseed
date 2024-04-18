import React, { createContext, useEffect, useState } from "react";
import * as Css from "./style";
import logo from "../../img/logo.svg";
import { FaSearch } from "react-icons/fa";
import alface from "../../img/sementes/alface.png";
import { SeedContext } from "../../context/seedContext";
import { useContext } from "react";
import Info from "../info";

export default function Search() {
  const seeds = useContext(SeedContext);
  const [search, setSearch] = useState("");
  const [filteredSeeds, setFilteredSeeds] = useState([]);
  const [infoSeed, setInfoSeed] = useState({});

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    if (searchTerm === "") {
      setFilteredSeeds(seeds);
    } else {
      const filteredSeeds = seeds.filter((seed) => {
        return seed.nome_comum.toLowerCase().includes(searchTerm);
      });
      setFilteredSeeds(filteredSeeds);
    }
  };

  const handleShowSeed = (seed) => {
    setInfoSeed(filteredSeeds.find((item) => item.nome_comum === seed));
  };

  useEffect(() => {
    setFilteredSeeds(seeds);
  }, [seeds]);

  return (
    <>
      {infoSeed && Object.keys(infoSeed).length !== 0 ? (
        <Info seedName={infoSeed.nome_comum} />
      ) : (
        <Css.Container>
          <Css.Body>
            <Css.Top>
              <Css.Logo>
                <img src={logo} alt="LogoTamagoseed" />
              </Css.Logo>
            </Css.Top>
            <Css.Formulario>
              <Css.TitleSearch>
                <h1> Qual planta você está cuidando?</h1>
              </Css.TitleSearch>
              <Css.FormComponent>
                <FaSearch />
                <Css.Input
                  value={search}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Digite o nome da semente..."
                />
              </Css.FormComponent>
              <Css.Line />
            </Css.Formulario>
            <Css.SeedContent>
              {filteredSeeds.map((seed) => (
                <Css.SeedCard key={seed.id}>
                  <Css.SeedImage>
                    <img src={seed.image} alt={seed.name} />
                    <img src={alface} alt={seed.name} />
                    <Css.SeedInfo>
                      <h1>{seed.nome_comum}</h1>
                      <button onClick={() => handleShowSeed(seed.nome_comum)}>
                        DETALHES
                      </button>
                    </Css.SeedInfo>
                  </Css.SeedImage>
                </Css.SeedCard>
              ))}
            </Css.SeedContent>
          </Css.Body>
        </Css.Container>
      )}
    </>
  );
}
