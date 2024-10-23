import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Tab } from '@headlessui/react';
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [routes, setRoutes] = useState([]);
  const [activeTab, setActiveTab] = useState("ALL");

  useEffect(() => {
    const sampleData = [
      {
        "Cluster": 0,
        "Orders": [
          100150068,
          100150070,
          100150071,
          100150073,
          100150076,
          100150078,
          100150082,
          100150083,
          100150084,
          100150085,
          100150087,
          100150088,
          100150093
        ],
        "Route": [
          {
            "Latitude": 12.979997278675235,
            "Longitude": 77.57123784325745
          },
          {
            "Latitude": 13.1048,
            "Longitude": 77.5763
          },
          {
            "Latitude": 12.9957,
            "Longitude": 77.5419
          },
          {
            "Latitude": 13.0821,
            "Longitude": 77.5762
          },
          {
            "Latitude": 13.0458,
            "Longitude": 77.5111
          },
          {
            "Latitude": 13.02889,
            "Longitude": 77.44233
          },
          {
            "Latitude": 13.0124,
            "Longitude": 77.5361
          },
          {
            "Latitude": 13.0821,
            "Longitude": 77.5762
          },
          {
            "Latitude": 13.0223,
            "Longitude": 77.5949
          },
          {
            "Latitude": 13.1048,
            "Longitude": 77.5763
          },
          {
            "Latitude": 13.1585,
            "Longitude": 77.4888
          },
          {
            "Latitude": 13.0124,
            "Longitude": 77.5361
          },
          {
            "Latitude": 13.0821,
            "Longitude": 77.5762
          },
          {
            "Latitude": 13.0821,
            "Longitude": 77.5762
          },
          {
            "Latitude": 12.979997278675235,
            "Longitude": 77.57123784325745
          }
        ]
      },
      {
        "Cluster": 1,
        "Orders": [
          100150063,
          100150067,
          100150072,
          100150074,
          100150075,
          100150077,
          100150079,
          100150081,
          100150086,
          100150090,
          100150094
        ],
        "Route": [
          {
            "Latitude": 12.979997278675235,
            "Longitude": 77.57123784325745
          },
          {
            "Latitude": 12.9716,
            "Longitude": 77.5946
          },
          {
            "Latitude": 12.9382,
            "Longitude": 77.6228
          },
          {
            "Latitude": 12.972442,
            "Longitude": 77.580643
          },
          {
            "Latitude": 12.9864,
            "Longitude": 77.582
          },
          {
            "Latitude": 12.9708,
            "Longitude": 77.5806
          },
          {
            "Latitude": 12.961,
            "Longitude": 77.6387
          },
          {
            "Latitude": 13.0007,
            "Longitude": 77.6165
          },
          {
            "Latitude": 13.0006,
            "Longitude": 77.6746
          },
          {
            "Latitude": 12.9317,
            "Longitude": 77.6227
          },
          {
            "Latitude": 12.9642,
            "Longitude": 77.6207
          },
          {
            "Latitude": 12.972442,
            "Longitude": 77.580643
          },
          {
            "Latitude": 12.979997278675235,
            "Longitude": 77.57123784325745
          }
        ]
      },
      {
        "Cluster": 2,
        "Orders": [
          100150065,
          100150064,
          100150069,
          100150080,
          100150091,
          100150092,
          100150095 
        ],
        "Route": [
          {
            "Latitude": 12.979997278675235,
            "Longitude": 77.57123784325745
          },
          {
            "Latitude": 12.9709,
            "Longitude": 77.5658
          },
          {
            "Latitude": 12.9271,
            "Longitude": 77.5548
          },
          {
            "Latitude": 12.9699,
            "Longitude": 77.5333
          },
          {
            "Latitude": 12.9709,
            "Longitude": 77.5658
          },
          {
            "Latitude": 12.9271,
            "Longitude": 77.5548
          },
          {
            "Latitude": 12.9271,
            "Longitude": 77.5548
          },
          {
            "Latitude": 12.9717,
            "Longitude": 77.5132
          },
          {
            "Latitude": 12.979997278675235,
            "Longitude": 77.57123784325745
          }
        ]
      }
    ];

    setRoutes(sampleData);
  }, []);

  const renderMarkersAndPolylines = (cluster) => {
    const positions = cluster.Route.map(point => [point.Latitude, point.Longitude]);

    return (
      <div key={cluster.Cluster}>
        {positions.map((pos, idx) => (
          <Marker position={pos} key={idx}>
            <Popup>Lat: {pos[0]}, Long: {pos[1]}</Popup>
          </Marker>
        ))}
        <Polyline positions={positions} color={cluster.Cluster === 0 ? 'blue' : cluster.Cluster === 1 ? 'red' : 'green'} />
      </div>
    );
  };

  const handleDelivery = (clusterIndex) => {
    setRoutes((prevRoutes) => prevRoutes.filter((_, index) => index !== clusterIndex));
  };

  return (
    <div className='w-full'>
      <Tab.Group onChange={(index) => setActiveTab(index === 0 ? "All" : `CLUSTER${index - 1}`)}>
        <Tab.List className="flex space-x-1 p-2 bg-[#ff8c8c] rounded-sm">
          <Tab className={({ selected }) => selected ? 'bg-slate-50 px-2 text-gray-950 p-1 shadow rounded-md' :  ' px-2 text-blue-100 p-1 hover:bg-white/[0.12] hover:text-white rounded-md'}>
            All
          </Tab>
          {routes.map((_, index) => (
            <Tab key={index} className={({ selected }) => selected ? 'bg-slate-50 p-1 shadow rounded-md' : 'text-blue-100 p-1 hover:bg-white/[0.12] hover:text-white rounded-md'}>
              Cluster {index}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <MapContainer center={[12.979997278675235, 77.57123784325745]} zoom={11} style={{ height: '500px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {routes.map(cluster => renderMarkersAndPolylines(cluster))}
            </MapContainer>
          </Tab.Panel>
          {routes.map((cluster, index) => (
            <Tab.Panel key={index}>
              <MapContainer center={[12.979997278675235, 77.57123784325745]} zoom={12} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {renderMarkersAndPolylines(cluster)}
              </MapContainer>
              <button onClick={() => handleDelivery(index)} className="mt-2 flex items-center px-4 py-2 bg-[#ff8c8c] hover:bg-[#e96868] text-white rounded">
                Deliver Orders 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="ml-2"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#ffffff"><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/><path d="M2 9v4.947c0 2.382 0 3.573.732 4.313c.487.492 1.171.657 2.268.712M12.427 5c.913.3 1.63 1.024 1.926 1.947c.147.456.147 1.02.147 2.15c0 .752 0 1.128.098 1.432a2.01 2.01 0 0 0 1.284 1.298c.301.099.673.099 1.418.099H22v2.021c0 2.382 0 3.573-.732 4.313c-.487.492-1.171.657-2.268.712M9 19h6"/><path d="M14.5 7h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 12M7.327 8l1.486-1.174C9.604 6.2 10 5.888 10 5.5M7.327 3l1.486 1.174C9.604 4.8 10 5.112 10 5.5m0 0H2"/></g></svg>
              </button>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default Map;

