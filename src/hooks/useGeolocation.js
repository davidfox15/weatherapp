import { useEffect, useState } from "react";

export function useGeolocation() {
  const [geolocation, setGeolocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        console.log(response);
        setGeolocation({
          lat: response.coords.latitude,
          lon: response.coords.longitude,
        })
      },
      (error) => {
        console.warn(`ERROR(${error.code}): ${error.message}`);
      }
    );
  },[]);

  return geolocation;
}
