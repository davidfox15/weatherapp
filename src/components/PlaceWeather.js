import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { del } from "../store/placesSlice";

export default function PlaceWeather({ place, showBtn = true }) {
  let { name, temperature, lat, lon } = place;
  const dispatch = useDispatch();

  function buttonHandler(event) {
    event.preventDefault();
    dispatch(del({ name }));
  }

  return (
    <li className="bg-teal-500 p-5 rounded-lg flex flex-col gap-8 w-full">
      <h1 className="text-xl font-bold">{name}</h1>
      <h2>Температура: {temperature}</h2>
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
