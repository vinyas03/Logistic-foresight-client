import Map from "./Map";

function Delivery() {
  return (
    <div className="mt-2 flex flex-col space-x-8">
      <h2 className="font-bold text-3xl text-[#ff8c8c] mb-2">Delivery</h2>
      {/* <h1>Delivery</h1> */}

      <div className="border p-2 w-full space-y-2">
        <div className="flex justify-center space-x-5">
          <div>
            <span className="text-xl mr-4 mb-3">Vehicle Capacity: </span>{" "}
            <input
              className="border-2 border-[#ff8c8c] rounded-sm outline-none p-1"
              type="number"
              name="capacity"
              id="weeks"
            />
          </div>
          <div>
            <span className="text-xl mr-4 mb-3">Warehouse Lat/Long: </span>{" "}
            <input
              className="border-2 border-[#ff8c8c] rounded-sm outline-none p-1"
              type="text"
              name="latlong"
              id="hours"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center px-3 py-2 bg-[#ff8c8c] hover:bg-[#e96868] rounded-md text-white">
            Cluster Now 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16" className="ml-2">
              <path
                fill="#ffffff"
                d="M14 12a2 2 0 0 0-1.008.305L10.78 10.15a3.44 3.44 0 0 0 .74-1.993L13.09 8a1.49 1.49 0 1 0-.089-.768l-1.591.128a3.51 3.51 0 0 0-1.978-2.521L9.74 4H10a2 2 0 1 0-1.01-.265l-.27.855a3.3 3.3 0 0 0-.754-.084c-.83 0-1.59.296-2.181.789L2.791 2.291a1.5 1.5 0 1 0-1.291.71c.281-.001.544-.079.767-.214L5.26 5.791a3.45 3.45 0 0 0-.76 2.168v.203l-.66.11a2 2 0 1 0 .161.786L4 8.999l.63-.097a3.52 3.52 0 0 0 1.466 1.992l-.556 1.188a2 2 0 0 0-.539-.08h-.017a2 2 0 1 0 1.231.423l.566-1.153c.364.146.787.231 1.229.231c.847 0 1.621-.311 2.216-.824l2.176 2.124a2 2 0 1 0 1.6-.8zm-9 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3-4.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full mt-3 flex justify-center z-0">
        <Map />
      </div>
    </div>
  );
}

export default Delivery;
