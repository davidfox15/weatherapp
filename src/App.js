import Search from "./components/Search";
import PlaceList from "./components/PlaceList";
import { useGeolocation } from "./hooks/useGeolocation";

function App() {
  const geolocation = useGeolocation();

  return (
    <div>
      <Search />
      <PlaceList />
    </div>
  );
}

export default App;
