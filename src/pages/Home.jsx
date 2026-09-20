import { useState } from "react";
import LocationModal from "../components/locationModal";

const Home = () => {
    const [click, setClick] = useState(false);
    // console.log(click);
    return (
        <div className="space-y-2">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-400">NextLevel <span className="text-blue-400">Weather</span></h1>
                <p className="text-md text-gray-400">Check your weather today in next level.</p>
            </div>

            <div className="flex justify-center">
                <button type="button" onClick={() => setClick(true)}
                    className="text-lg px-5 py-2 font-medium bg-blue-500 text-gray-100 hover:scale-105 transition-all delay-500 rounded-4xl">Check Weather</button>
            </div>
            {
                click && <LocationModal onClose={()=>setClick(false)}/>
            }
        </div>
    );
};

export default Home;