import NavigationBar from "../components/NavigationBar";
import { TrendingUpDown, Group, Waypoints } from "lucide-react";
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
            Logistic Foresight is an innovative solution designed to optimize
            real-time order fulfillment and delivery processes. Our software
            leverages historical data to predict order volumes, enabling
            businesses to make proactive decisions that improve operational
            efficiency. With features like real-time forecasting and route
            optimization through clustering, Logistic Foresight helps ensure
            timely deliveries and high customer satisfaction. The prototype is
            currently under development, aiming to enhance delivery precision
            and streamline order fulfillment operations.
          </p>
        </div>
        <p className="text-2xl font-semibold text-[#ff8c8c]">Key Features: </p>
        <div className="p-3 rounded-sm text-lg text-justify ">
          <div className="flex flex-row justify-around">
            <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center">
              <p className="mb-2">Realtime order forecasts</p>
              <TrendingUpDown className="h-12 w-12" />
            </div>
            <div className="bg-gray-50  p-3 hover:shadow-xl border-2  text-center flex flex-col items-center">
              <p className="mb-2">Clustered delivery locations </p>
              <Group className="h-12 w-12" />
            </div>
            <div className="bg-gray-50 p-3 hover:shadow-xl border-2 text-center flex flex-col items-center">
              <p className="mb-2">Optimized route planning</p>
              <Waypoints className="h-12 w-12" />
            </div>
          </div>
        </div>
        {/* Credits */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
