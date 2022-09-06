import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { del } from "../store/placesSlice";

export default function PlaceWeather({ place, showBtn = true }) {
  let { name, state, lat, lon } = place;
  const [temperature, setTemperature] = useState();
  const dispatch = useDispatch();

  const places = useLocalStorage();

  function buttonHandler(event) {
    event.preventDefault();
    dispatch(del({ name }));
  }

  function getWeather(lat, lon) {
    const apikey = "053cd3cd99504b6f732b4399a0d3b256";
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`)
      .then((item) => item.json())
      .then((item) => {
        setTemperature(item.main.temp);
      })
      .catch((error) => console.warn(`ERROR(${error.cod}): ${error.message}`));
  }

  useEffect(() => {
    lat && lon && getWeather(lat, lon);
  }, [place, places]);

  return (
    <li className="bg-teal-500 p-5 rounded-lg flex flex-col gap-8 max-w-5xl text-center drop-shadow-md">
      <h1 className="text-xl font-bold">{name}</h1>
      {state && <h1 className="font-bold">{state}</h1>}
      <h2>Температура: {temperature} °C</h2>
      <span>
        lat: {lat}
        <br />
        lon: {lon}
      </span>
      {showBtn && (
        <button onClick={buttonHandler} className="border rounded hover:bg-white">
          Удалить
        </button>
      )}
    </li>
  );
}
