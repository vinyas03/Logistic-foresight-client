import NavigationBar from "../components/NavigationBar";
import {
  TrendingUpDown,
  Group,
  Waypoints,
  Activity,
  Shuffle,
  Linkedin,
  Github
} from "lucide-react";

import AmeethPhoto from "../assets/people/ameeth-portrait.png";
import VinyasPhoto from "../assets/people/vinyas-portrait.jpg";
import VivekPhoto from "../assets/people/vivek-portrait.png";
import YasirPhoto from "../assets/people/yasir-portrait.jpg";
import HODPhoto from "../assets/people/HOD-CSE.jpg";

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
            Logistic Foresight is an innovative solution that aims to optimize
            real-time order fulfillment and delivery processes. By predicting
            the number of counters needed for efficient order processing, our
            software utilizes dynamic counter management and allocation to adapt
            to changing demands. We leverage historical data to forecast order
            volumes, which, combined with route optimization through clustering,
            helps businesses operate more efficiently. This ensures timely
            deliveries and enhances customer satisfaction. As we continue to
            develop the prototype, our goal is to improve delivery precision and
            streamline order fulfillment operations even further.
          </p>
        </div>
        <p className="text-2xl font-semibold text-[#ff8c8c]">Key Features: </p>
        {/* Container for feature boxes with decreased width */}
        <div className="p-3 rounded-sm text-lg text-justify flex flex-row justify-around">
          <div className="bg-gray-50 p-3 hover:shadow-xl border text-center flex flex-col items-center w-56">
            <p className="mb-2">Realtime Counter Predictions</p>
            <Activity className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border text-center flex flex-col items-center w-56">
            <p className="mb-2">Dynamic Counter Allocation</p>
            <Shuffle className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border text-center flex flex-col items-center w-56">
            <p className="mb-2">Realtime order forecasts</p>
            <TrendingUpDown className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border text-center flex flex-col items-center w-56">
            <p className="mb-2">Clustered delivery locations</p>
            <Group className="h-12 w-12" />
          </div>
          <div className="bg-gray-50 p-3 hover:shadow-xl border text-center flex flex-col items-center w-56">
            <p className="mb-2">Optimized route planning</p>
            <Waypoints className="h-12 w-12" />
          </div>
        </div>
        {/* Credits */}
        <p className="text-2xl font-semibold text-[#ff8c8c]">Team members: </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
          <div className="bg-white rounded-xl border border-slate-300/70  py-6 text-center transition duration-300 ease-in-out hover:border-slate-300/30 hover:shadow-lg">
            <img
              src={AmeethPhoto}
              className="mx-auto w-40 h-40 rounded-full object-cover xl:h-44 xl:w-44"
            />
            <div className="mt-1 leading-6">
              <h3 className="text-xl font-medium text-[#ee6666]">
                Ameeth Manoj Bhuvanapalli
              </h3>
              <p className="mt-1 text-base font-semibold">7th Sem CSE</p>
              <p className="mt-1 text-sm">ameethmanojbhuvanapalli@gmail.com</p>
              <ul className="mt-6 flex items-center justify-center space-x-4">
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://in.linkedin.com/in/manojba04#">
                    <Linkedin />
                  </a>{" "}
                </li>
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://github.com/ameethmanojbhuvanapalli">
                    <Github />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-300/70 px-2 py-6 text-center transition duration-300 ease-in-out hover:border-slate-300/30 hover:shadow-lg">
            <img
              src={VinyasPhoto}
              className="mx-auto w-40 h-40 rounded-full object-cover xl:h-44 xl:w-44"
            />
            <div className="mt-1 leading-6">
              <h3 className="text-xl font-medium text-[#ee6666]">
                Vinyas V Amin
              </h3>
              <p className="mt-1 text-base font-semibold">7th Sem CSE</p>
              <p className="mt-1 text-base">vinyasamin03@gmail.com</p>
              <ul className="mt-6 flex items-center justify-center space-x-4">
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://in.linkedin.com/in/vinyas-v-amin-32253b265">
                    <Linkedin />
                  </a>{" "}
                </li>
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://github.com/vinyas03">
                    <Github />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-300/70 px-2 py-6 text-center transition duration-300 ease-in-out hover:border-slate-300/30 hover:shadow-lg">
            <img
              src={VivekPhoto}
              className="mx-auto w-40 h-40 rounded-full object-cover xl:h-44 xl:w-44"
            />
            <div className="mt-1 leading-6">
              <h3 className="text-xl font-medium text-[#ee6666]">
                Vivek Kumar
              </h3>
              <p className="mt-1 text-base font-semibold">7th Sem CSE</p>
              <p className="mt-1 text-base">vkumar1972003@gmail.com</p>
              <ul className="mt-6 flex items-center justify-center space-x-4">
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://www.linkedin.com/in/vivek-kumar-35a3a6224">
                    <Linkedin />
                  </a>{" "}
                </li>
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://github.com/Vive007">
                    <Github />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-300/70 px-2 py-6 text-center transition duration-300 ease-in-out hover:border-slate-300/30 hover:shadow-lg">
            <img
              src={YasirPhoto}
              className="mx-auto w-40 h-40 rounded-full object-cover xl:h-44 xl:w-44"
            />
            <div className="mt-1 leading-6">
              <h3 className="text-xl font-medium text-[#ee6666]">
                Yasir Manzoor Sheikh
              </h3>
              <p className="mt-1 text-base font-semibold">7th Sem CSE</p>
              <p className="mt-1 text-base">yasirmanzoor6878@gmail.com</p>
              <ul className="mt-6 flex items-center justify-center space-x-4">
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://in.linkedin.com/in/yasir-manzoor-7a327123b">
                    <Linkedin />
                  </a>{" "}
                </li>
                <li className="hover:text-[#ff8c8c] transition-colors">
                  <a href="https://github.com/yasir6878">
                    <Github />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold text-[#ff8c8c]">Guide: </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
          <div className="bg-white rounded-xl border border-slate-300/70 px-2 py-6 text-center transition duration-300 ease-in-out hover:border-slate-300/30 hover:shadow-lg">
            <img
              src={HODPhoto}
              className="mx-auto w-40 h-40 rounded-full object-cover xl:h-44 xl:w-44"
            />
            <div className="mt-1 leading-6">
              <h3 className="text-xl font-medium text-[#ee6666]">
                Dr. Jyothi Shetty
              </h3>
              <p className="mt-1 text-base font-semibold">Professor & Head</p>
              <p className="mt-1 text-base">Department of CSE</p>
              <p className="mt-1 text-base">NMAMIT, Nitte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
