import React from "react";

export default function PlaceWeather({ place }) {
  let [name, temperature, lat, lon] = [0, 0, 0, 0];

  return (
    <li className="bg-teal-500 p-5 rounded-lg flex flex-col gap-5 w-full">
      <h1>name: {name}</h1>
      <h2>temperature: {temperature}</h2>
      <span>
        lat: {lat}
        <br />
        lon: {lon}
      </span>
      <button className="border rounded hover:bg-white">Удалить</button>
    </li>
  );
}
