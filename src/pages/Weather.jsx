import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import WeatherDetails from "../components/WeatherDetails";
import Recommandation from "../components/Recommandation";
import { getRecommandations } from "../utils/getRecommandation";
import WeatherType from "../components/WeatherType";
import Loader from "../components/Loader";
import LocationModal from "../components/locationModal";

const Weather = () => {
  const value = useLocation();
  const place = value.state.location;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!place) {
      return
    };
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const result = await getWeather(place)
        // console.log(result);
        setWeather(result)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setOpen(false);
      };
    };

    fetchWeather();
  }, [place]);



  return (
    <div className="max-w-6xl mx-auto">
      <header className="py-5">
        {
          !loading && <div className="flex justify-between items-center">
            <div>
              <Link className="border-2 rounded-full px-2 py-1" to={"/"}>Back to home</Link>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-400">NextLevel <span className="text-blue-400">Weather</span></h1>
            </div>
            <div>
              <button className="text-lg px-5 py-2 font-medium bg-blue-500 text-gray-100 hover:scale-105 transition-all delay-500 rounded-4xl" type="button" onClick={()=>setOpen(true)}>Change Weather</button>
            </div>
          </div>
        }
      </header>
      {
        loading ? <Loader /> : <>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-3">
              {/* weather details */}
              <WeatherDetails weather={weather} place={place} />
              {/* recommandation */}
              <Recommandation recommendation={getRecommandations(weather)} />
            </div>
            {/* live loc */}
            <WeatherType weather={weather} place={place} />
          </div>
        </>
      }
      {
        open && <LocationModal onClose={()=>setOpen(false)}/>
      }
    </div>
  );
};

export default Weather;