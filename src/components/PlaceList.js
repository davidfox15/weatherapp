import React from "react";
import PlaceWeather from "./PlaceWeather";
import { useSelector } from "react-redux";
import { useGeolocation } from "../hooks/useGeolocation";

export default function PlaceList() {
  const places = useSelector((state) => state.places.values);
  const geolocation = useGeolocation();

  return (
    <div className="px-10 w-full flex flex-col justify-center font-mono">
      <h1 className="m-5 text-center">Погода</h1>
      <PlaceWeather place={geolocation} showBtn={false} />
      <ul className="my-8 w-full flex flex-col justify-center gap-10">
        {places.map((place) => (
          <PlaceWeather key={place.name} place={place} />
        ))}
      </ul>
    </div>
  );
}
