export function saveLocalStorage(places) {
  localStorage.setItem("places", JSON.stringify(places));
}

export function loadLocalStorage() {
  let local = JSON.parse(localStorage.getItem("places"));
  return local !== null ? local : {};
}