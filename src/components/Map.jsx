import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";
import { Tab } from "@headlessui/react";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import useStore from "../store";
import useGet from "../hooks/useGet";
import { toast } from "react-toastify";

const Map = () => {
  //API Host
  const apiHost = import.meta.env.VITE_API_HOST;

  const { mapData, setMapData } = useStore();
  const { data, loading, error } = useGet(
    `http://${apiHost}:9020/api/orders/clusters`
  );
  const [activeTab, setActiveTab] = useState(0); // Use an index for the active tab

  // Set initial state from fetched data
  useEffect(() => {
    if (data) {
      setMapData(data);
      console.log("-----------MAP DATA TEST BEGIN------------");
      console.log("Map data updated:", data);
      console.log("-----------MAP DATA TEST END------------");
    } else {
      setMapData([]);
    }
  }, [data, setMapData]);

  // Define a bright color mapping for clusters (20 different colors)
  const clusterColorMapping = {
    0: "#FF0000", // Bright Red
    1: "#00FF00", // Lime Green
    2: "#0000FF", // Bright Blue
    3: "#FFFF00", // Bright Yellow
    4: "#FF00FF", // Magenta
    5: "#00FFFF", // Cyan
    6: "#FFA500", // Orange
    7: "#800080", // Purple
    8: "#FFC0CB", // Pink
    9: "#808000", // Olive
    10: "#00FF7F", // Spring Green
    11: "#FF4500", // Orange Red
    12: "#1E90FF", // Dodger Blue
    13: "#FFD700", // Gold
    14: "#ADFF2F", // Green Yellow
    15: "#DC143C", // Crimson
    16: "#FF1493", // Deep Pink
    17: "#7FFF00", // Chartreuse
    18: "#8A2BE2", // Blue Violet
    19: "#FF69B4" // Hot Pink
  };

  const renderMarkersAndPolylines = (cluster) => {
    const positions = cluster.Route.map((point) => [
      point.Latitude,
      point.Longitude
    ]);

    return (
      <div key={cluster.Cluster}>
        {positions.map((pos, idx) => (
          <Marker position={pos} key={idx}>
            <Popup>
              Lat: {pos[0]}, Long: {pos[1]}
            </Popup>
          </Marker>
        ))}
        <Polyline
          positions={positions}
          color={clusterColorMapping[cluster.Cluster] || "black"} // Fallback color if cluster not in mapping
        />
      </div>
    );
  };

  const handleDelivery = async (clusterForDelivery) => {
    console.log(`Delivered to cluster ${clusterForDelivery}`);

    try {
      // Send POST request to mark orders as delivered
      const response = await fetch(
        `http://${apiHost}:9020/api/orders/deliver/${clusterForDelivery}`,
        {
          method: "POST"
        }
      );

      const result = await response.text(); // Assuming the API returns text like "Orders in Cluster delivered successfully!"
      console.log("Delivery response:", result);

      if (result === "Orders in Cluster delivered successfully!") {
        // If the delivery was successful, fetch the updated cluster data
        const newDataResponse = await fetch(
          `http://${apiHost}:9020/api/orders/clusters`
        );
        const newData = await newDataResponse.json(); // Assuming the API returns JSON data
        setMapData(newData);
        console.log("Updated map data:", newData);

        // Set active tab to "ALL" (index 0) if no clusters remain
        if (newData.length === 0) {
          setActiveTab(0); // Select the "All" tab
        }

        toast.success("Delivery successful!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      } else {
        //show the error toast in react-toastify
        toast.error("Delivery not successful. No changes made.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        console.log("Delivery not successful. No changes made.");
      }
    } catch (error) {
      console.error("Error delivering orders or fetching clusters:", error);
      toast.error("Delivery not successful. No changes made.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <div className="w-full">
      <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
        <Tab.List className="flex space-x-1 p-2 bg-[#ff8c8c] rounded-sm">
          <Tab
            className={({ selected }) =>
              selected
                ? "bg-slate-50 px-2 text-gray-950 p-1 shadow rounded-md"
                : "px-2 text-blue-100 p-1 hover:bg-white/[0.12] hover:text-white rounded-md"
            }>
            All
          </Tab>
          {/* Render tabs based on the original cluster count */}
          {mapData.length === 0 ? (
            <span className="text-center text-slate-50 py-1 w-full">
              No clusters found
            </span>
          ) : (
            mapData.map((cluster) => (
              <Tab
                key={cluster.Cluster} // Use cluster.Cluster as the key
                className={({ selected }) =>
                  selected
                    ? "bg-slate-50 p-1 shadow rounded-md"
                    : "text-blue-100 p-1 hover:bg-white/[0.12] hover:text-white rounded-md"
                }>
                Cluster {cluster.Cluster}
              </Tab>
            ))
          )}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {mapData.length === 0 ? ( // Check if there are no clusters to display
              <div className="text-center p-4 h-[500px] w-full flex justify-center items-center">
                <p className="text-red-500 text-3xl font-semibold">
                  No clusters left to deliver.
                </p>
              </div>
            ) : (
              <MapContainer
                center={[12.979997278675235, 77.57123784325745]}
                zoom={11}
                style={{ height: "500px", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {mapData.map((cluster) => renderMarkersAndPolylines(cluster))}
              </MapContainer>
            )}
          </Tab.Panel>
          {mapData.map((cluster) => (
            <Tab.Panel key={cluster.Cluster}>
              {mapData.length === 0 ? ( // Check if there are no clusters to display
                <div className="text-center p-4">
                  <p className="bg-red-500">No clusters to deliver.</p>
                </div>
              ) : (
                <>
                  <MapContainer
                    center={[12.979997278675235, 77.57123784325745]}
                    zoom={12}
                    style={{ height: "500px", width: "100%" }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {renderMarkersAndPolylines(cluster)}
                  </MapContainer>
                  <button
                    onClick={() => handleDelivery(cluster.Cluster)}
                    className="mt-2 flex items-center px-4 py-2 bg-[#ff8c8c] hover:bg-[#e96868] text-white rounded">
                    Deliver Orders
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="ml-2">
                      <g
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        color="#ffffff">
                        <circle cx="17" cy="19" r="2" />
                        <circle cx="7" cy="19" r="2" />
                        <path d="M2 9v4.947c0 2.382 0 3.573.732 4.313c.487.492 1.171.657 2.268.712M12.427 5c.913.3 1.63 1.024 1.926 1.947c.147.456.147 1.02.147 2.15c0 .752 0 1.128.098 1.432a2.01 2.01 0 0 0 1.284 1.298c.301.099.673.099 1.418.099H22v2.021c0 2.382 0 3.573-.732 4.313c-.487.492-1.171.657-2.268.712M9 19h6" />
                        <path d="M14.5 7h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 12M7.327 8l1.486-1.174C9.604 6.2 10 5.888 10 5.5M7.327 3l1.486 1.174C9.604 4.8 10 5.112 10 5.5m0 0H2" />
                      </g>
                    </svg>
                  </button>
                </>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Map;
