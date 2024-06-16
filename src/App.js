import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.jsx";

function App() {
  const [ipAddress, SetIpAddress] = useState("");

  async function fetchIpAddress(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const ipRegex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.?)+[a-zA-Z]{2,6}$/;

    let inputtype = "";
    let alertMessage;

    if (input) {
      if (emailRegex.test(input)) {
        inputtype = "&email=";
      } else if (ipRegex.test(input)) {
        inputtype = "&ipAddress=";
      } else if (domainRegex.test(input)) {
        inputtype = "&domain=";
      } else {
        alertMessage =
          "Invalid input. Please enter a valid Gmail address, IP address, or domain.";
      }
    }

    var api_key = "at_zITTj6gtejGf7EsOhpL2HxB6TDVOH";
    var api_url = "https://geo.ipify.org/api/v2/country,city?";

    var url = api_url + "apiKey=" + api_key + inputtype + input;

    try {
      const data = await fetch(url);

      if (!data.ok) {
        throw Error(data.statusText);
      } else {
        const response = await data.json();
        SetIpAddress(response);
      }
    } catch (error) {
      if (typeof alertMessage !== "undefined") {
        alert(alertMessage);
      } else {
        alert(`${error.name} : ${error.message}`);
      }
    }
  }

  function handleClick(input) {
    fetchIpAddress(input);
  }

  useEffect(() => {
    fetchIpAddress("");
  }, []);

  return (
    <>
      <Header />
      <Main OnClick={handleClick} ipAddress={ipAddress} />
    </>
  );
}

export default App;
