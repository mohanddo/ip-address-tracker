import Map from "../Map/Map";
import SearchBar from "../SearchBar/SearchBar";
import DataContainer from "../DataContainer/DataContainer";
function Main({ OnClick, ipAddress }) {
  return (
    <main>
      <SearchBar OnClick={OnClick} />
      <DataContainer ipAddress={ipAddress} />
      <Map location={ipAddress.location} />
    </main>
  );
}

export default Main;
