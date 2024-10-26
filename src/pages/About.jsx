import NavigationBar from "../components/NavigationBar";
import { TrendingUpDown, Group, Waypoints, Activity, Shuffle } from "lucide-react"; // Changed from ToggleLeft to Shuffle

const About = () => {
  return (
    <div>
      {/* Navigation bar */}
      <NavigationBar />

      <div className="flex flex-col space-y-6 py-12 px-14 ml-10 font-poppins">
        <h2 className="text-4xl font-bold text-center text-[#ff8c8c]">About</h2>
        {/* About the Software */}
        <div>
          <p className="p-4 bg-gray-50 rounded-sm text-lg text-justify">
            Logistic Foresight is an innovative solution that aims to optimize real-time order fulfillment and delivery processes. 
            By predicting the number of counters needed for efficient order processing, our software utilizes dynamic counter management 
            and allocation to adapt to changing demands. We leverage historical data to forecast order volumes, which, combined with 
            route optimization through clustering, helps businesses operate more efficiently. This ensures timely deliveries and enhances customer satisfaction. 
            As we continue to develop the prototype, our goal is to improve delivery precision and streamline order fulfillment operations even further.
          </p>
        </div>
        <p className="text-2xl font-semibold text-[#ff8c8c]">Key Features: </p>
        {/* Container for feature boxes with decreased width */}
        <div className="p-3 rounded-sm text-lg text-justify flex flex-row justify-around">
          <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center w-64"> {/* Adjusted width */}
            <p className="mb-2">Realtime Counter Predictions</p>
            <Activity className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center w-64"> {/* Adjusted width */}
            <p className="mb-2">Dynamic Counter Allocation</p>
            <Shuffle className="h-12 w-12" /> {/* Changed to Shuffle icon */}
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center w-64"> {/* Adjusted width */}
            <p className="mb-2">Realtime order forecasts</p>
            <TrendingUpDown className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center w-64"> {/* Adjusted width */}
            <p className="mb-2">Clustered delivery locations</p>
            <Group className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center w-64"> {/* Adjusted width */}
            <p className="mb-2">Optimized route planning</p>
            <Waypoints className="h-12 w-12" />
          </div>
        </div>
        {/* Credits */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
