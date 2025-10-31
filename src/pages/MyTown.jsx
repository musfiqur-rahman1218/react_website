import { useEffect, useState } from "react";
import sunny from "../assets/sunny.png";
import mild from "../assets/mild.png";
import cold from "../assets/cold.png";

function MyTown() {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState("");

  const DHAKA_LAT = 23.8103;
  const DHAKA_LON = 90.4125;

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${DHAKA_LAT}&longitude=${DHAKA_LON}&current_weather=true`
      );
      const data = await res.json();
      setWeather(data.current_weather);
    } catch {
      setError("Failed to load Dhaka weather.");
    }
  }

  function toggleUnit() {
    setUnit(unit === "C" ? "F" : "C");
  }

  function convertTemp(tempC) {
    return unit === "C" ? tempC : (tempC * 9) / 5 + 32;
  }

  function getIcon(tempC) {
    if (tempC > 25) return sunny;
    if (tempC >= 10 && tempC <= 25) return mild;
    return cold;
  }

  return (
    <section className="py-5 bg-light text-dark text-center">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold mb-3">My Town: Dhaka</h2>
        <p className="text-secondary">
          Dhaka is the heart of Bangladesh. A vibrant city full of culture,
          street food, and creativity. Below is its live weather information.
        </p>

        {error && <p className="text-danger">{error}</p>}
        {!error && !weather && <p>Loading...</p>}

        {weather && (
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <img
                src={getIcon(weather.temperature)}
                alt="weather icon"
                width="60"
                height="60"
                className="mb-3"
              />
              <h4>
                {convertTemp(weather.temperature).toFixed(1)}° {unit}
              </h4>
              <p className="text-secondary mb-2">
                Wind Speed: {weather.windspeed} km/h
              </p>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={toggleUnit}
              >
                Show in °{unit === "C" ? "F" : "C"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyTown;
