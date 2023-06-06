import React, { useState, useEffect } from "react";
import axios from "axios"; // kết nối với thư viện axios đã cài ở bài trước
import "./home.css";
import { Item } from "../../components/Item/Item";

export const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);

  const [search, setSearch] = useState("");
  const [searchSubmit, setSearchSubmit] = useState("");

  async function getURL() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50"); // lấy dữ liệu url của pokemon
    await getPokemon(res.data.results); // await bat dong bo
  }

  //gọi pokemon từ url get ra tu get URL
  async function getPokemon(poke) {
    var data = [];
    await poke.forEach(async (element) => {
      const res = await axios.get(element.url);
      data.push(res.data);
    });
    const timer = setTimeout(() => {
      setPokeData(data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }, 2000);
    return () => clearTimeout(timer);
  }

  // dùng onchange đễ lấy dữ liệu ra từ input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //nhấn để tìm kiếm
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchSubmit(search);
  };

  // học useEffect
  useEffect(() => {
    if (search === "") {
      setSearchSubmit("");
    }
    if (searchSubmit === "") {
      setDataSearch(pokeData);
    } else {
      setDataSearch(
        pokeData.filter((item) =>
          item.name.toLowerCase().includes(searchSubmit.toLowerCase())
        )
      );
    }
  }, [pokeData, searchSubmit, search]);

  useEffect(() => {
    getURL();
  }, []);

  return (
    <div>
      <form className="home-Search my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
        <input
          className="submit"
          type="submit"
          name=""
          value="Search"
          onClick={handleSubmit}
        />
      </form>
      <ul className="cards">
        {dataSearch &&
          dataSearch?.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                img={
                  item.sprites.other.dream_world.front_default ||
                  item.sprites.other.home.front_default
                }
                name={item.name}
                types={item.types}
              />
            );
          })}
      </ul>
    </div>
  );
};
