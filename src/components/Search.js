import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocalStorage, saveLocalStorage } from "../store/localStore";
import { add, replace } from "../store/placesSlice";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const places = useSelector((state) => state.places.values);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let localData = loadLocalStorage();
  //   dispatch(replace({ localData }));
  // }, []);

  function submitHandler(event) {
    event.preventDefault();
    if (searchValue === "") return;
    if (places.filter((place) => place.name.toLowerCase() === searchValue.toLowerCase()).length) return;
    const apikey = "053cd3cd99504b6f732b4399a0d3b256";
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${apikey}`)
      .then((item) => item.json())
      .then((item) => {
        let place = {
          name: searchValue,
          country: item[0].country,
          state: item[0].state,
          lat: item[0].lat,
          lon: item[0].lon,
        };
        dispatch(add({ place }));
        // saveLocalStorage(places);
      })
      .catch((error) => console.warn(`ERROR(${error.code}): ${error.message}`));

    // dispatch(add({ searchValue }));
  }

  return (
    <div className="p-4 mb-3 w-full bg-teal-500">
      <form action="submit" onSubmit={submitHandler}>
        <input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          type="text"
          placeholder="введите город..."
          className="rounded w-1/3 p-1.5 outline-none"
        />
        <button className="mx-10 py-2 px-4 border rounded hover:bg-white">Добавить город</button>
      </form>
    </div>
  );
}
