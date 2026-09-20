import { X } from 'lucide-react';
import { useState } from 'react';
import { getGeolocation } from '../services/get-geolocation';
import { useNavigate } from 'react-router';

const LocationModal = ({ onClose }) => {
    const navigate = useNavigate();
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const goToPage = (location) =>{
        navigate("/weather", {state : {location}});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const value = city.trim();
        if(!value){
            setError("Please enter a city name")
            return
        }
        try {
            const location = await getGeolocation(value);
            // console.log(result);
            if(!location){
                setError("Geocoding request failed!");
            };
            goToPage(location);
        } catch (error) {
            setError(error);
        }
    };

    const handleGeoLocations = () =>{
        if(!navigator.geolocation){
            setError("Your location not found");
        }
        navigator.geolocation.getCurrentPosition
        // eslint-disable-next-line no-unexpected-multiline
        ((positions)=>{
            const {latitude, longitude} = positions.coords;
            // console.log({latitude, longitude});
            goToPage({name : "Your locations", lat: latitude, lon: longitude})
        },(error)=>{
            setError(error.message);
        },{
            timeout: 10000
        })
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-950/60'>
            <div className="h-[0 auto] p-5 w-[400px] bg-gray-100 shadow-2xl rounded-4xl">
                <div className='flex justify-between'>
                    <h2 className="text-xl font-medium ">Where are you today?</h2>
                    <button onClick={onClose} className='w-10 h-10 bg-gray-400 rounded-full p-2 transition-all hover:rotate-90 delay-500 cursor-pointer'><X /></button>
                </div>
                <div className='pt-8'>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='Enter City Name'
                            className='w-full border p-1 rounded-2xl' />
                        <div className="">
                            <button type="submit"
                                className="text-lg px-5 py-1 w-full font-medium bg-blue-500 text-gray-100 hover:scale-105 transition-all delay-500 rounded-4xl">Get Weather</button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center py-2'>Or</div>
                <div className="">
                    <button onClick={handleGeoLocations} type="submit"
                        className="text-lg px-5 py-1 w-full font-medium bg-blue-500 text-gray-100 hover:scale-105 transition-all delay-500 rounded-4xl">Use My Location</button>
                </div>
                <div className='text-center'>
                    {error && <p className='text-red-600 text-md font-medium'>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default LocationModal;