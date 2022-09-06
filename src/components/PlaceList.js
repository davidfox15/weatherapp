import React from "react";
import PlaceWeather from "./PlaceWeather";

export default function PlaceList() {
  const testArray = [1, 2, 3, 4, 5];

  return (
    <div className="px-10 w-full flex flex-col justify-center items-center font-mono">
    <h1 className="m-5">Погода</h1>
      <ul className="w-full flex flex-col gap-10">
        {testArray.map((place, index) => (
          <PlaceWeather key={index} place={place} />
        ))}
      </ul>
    </div>
  );
}
