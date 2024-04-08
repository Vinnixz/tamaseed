import React, { useEffect, useState } from "react";
import * as Css from "./style";
import logo from "../../img/logo.svg";
import { FaSearch } from "react-icons/fa";
import { getSeeds } from "../../api";
import alface from "../../img/alface.png";

export default function Search() {
  const [seeds, setSeeds] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSeeds, setFilteredSeeds] = useState([]);

  useEffect(() => {
    const getDataSeeds = async () => {
      const response = await getSeeds();
      setSeeds(response.plantas);
      setFilteredSeeds(response.plantas);
    };
    getDataSeeds();
  }, []);

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
  }

  return (
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
          {
            filteredSeeds.map((seed) => (
              <Css.SeedCard key={seed.id}>
                <Css.SeedImage>
                  <img src={seed.image} alt={seed.name} />
                  <img src={alface} alt={seed.name} />
                  <Css.SeedInfo>
                    <h1>{seed.nome_comum}</h1>
                    <button>DETALHES</button>
                  </Css.SeedInfo>
                </Css.SeedImage>
              </Css.SeedCard>
            ))}
        </Css.SeedContent>
      </Css.Body>
    </Css.Container>
  );
}
