import React from "react";
import { useSelector } from "react-redux";
import PlaceWeather from "./PlaceWeather";
import { useGeolocation } from "../hooks/useGeolocation";

export default function PlaceList() {
  const places = useSelector((state) => state.places.values);
  const geolocation = useGeolocation();

  return (
    <div className="px-10 w-full flex flex-col justify-center items-center font-mono">
      <h1 className="m-5">Погода</h1>
      <PlaceWeather place={geolocation} showBtn={false} />
      <ul className="my-8 w-full flex flex-col gap-10">
        {places.map((place) => (
          <PlaceWeather key={place.name} place={ place } />
        ))}
      </ul>
    </div>
  );
}
