import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { replace } from "../store/placesSlice";

export function saveLocalStorage(places) {
  localStorage.setItem("places", JSON.stringify(places));
}

export function loadLocalStorage() {
  let local = JSON.parse(localStorage.getItem("places"));
  return local !== null ? local : [];
}

export default function useLocalStorage() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.values);

  useEffect(() => {
    let localData = loadLocalStorage();
    dispatch(replace({ localData }));
  }, []);

  useEffect(() => {
    saveLocalStorage(places);
  }, [places]);

  return places;
}
