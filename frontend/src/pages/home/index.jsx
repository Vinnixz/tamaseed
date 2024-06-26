import React, { useEffect, useState } from "react";
import * as Css from "./style";
import logo from "../../img/logo.svg";
import { FaSearch, FaSeedling } from "react-icons/fa";
import { SeedContext } from "../../context/seedContext";
import { useContext } from "react";
import Info from "../info";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import { LiaSeedlingSolid } from "react-icons/lia";

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
    const selectedSeed = filteredSeeds.find((item) => item.nome_comum === seed);
    setInfoSeed(selectedSeed);
  };

  useEffect(() => {
    setFilteredSeeds(seeds);
  }, [seeds]);

  return (
    <>
      {infoSeed && Object.keys(infoSeed).length !== 0 ? (
       <Info seedName={infoSeed.nome_comum} seedDescription={infoSeed.descricao} seedCare={infoSeed.modo_fazer} seedMaterial={infoSeed.materiais}/>

      ) : (
        <Css.Container>
          <Css.Body>
            <Css.Top>
              {/* Envolve o logo em um Link */}
              <Css.Logo>
                <Link to="/search" style={{ textDecoration: 'none', color: 'transparent' }}>
                  <img src={logo} alt="LogoTamagoseed" />
                </Link>
              </Css.Logo>
            </Css.Top>
            <Css.Formulario>
              <Css.TitleSearch>
                <h1> Qual planta você está cuidando?<FaSeedling /></h1>
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
                    {/* <img src={seed.image} alt={seed.name} /> */}
                    <img src={seed.image_url} alt={seed.name} />
                    <Css.SeedInfo>
                      <h1><LiaSeedlingSolid />{seed.nome_comum}</h1>
                      <button onClick={() => handleShowSeed(seed.nome_comum, seed.descricao, seed.modo_plantio, seed.materiais)}>
                        Ver detalhes
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
