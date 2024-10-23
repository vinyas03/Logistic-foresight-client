function Counters() {
  return (
      <div className="flex justify-evenly ">
        {/* Orders */}
        <div className="w-2/5 h-[150px] border rounded flex flex-col p-3 text-gray-600 hover:border-[#ff8c8c] transition-colors">
          <h3 className="text-xl font-semibold">Current Orders: {/*total no. of orders*/}</h3>
          {/*equal no. of orders as current running counters */}
          <div className="counters-container flex flex-wrap space-x-3 border p-1">
            {/* Dynamically rendered */}
            <div className="p-2 mt-1 mb-1  bg-green-400 text-white">C1</div>
          </div>
        </div>
        {/* Current running counters */}
        <div className="w-2/5 h-[150px] border rounded flex flex-col p-4 text-gray-600 hover:border-[#ff8c8c] transition-colors">
          <h3 className="text-xl font-semibold">Current running counters</h3>
          <div className="counters-container flex flex-wrap space-x-3 border p-1">
            {/* Dynamically rendered */}
            <div className="p-2 mt-1 mb-1  bg-green-400 text-white">C1</div>
          </div>
        </div>
        {/* Future Counters  (fetches info every 1hr , shows No-Counters if noot available)*/}
        <div className="w-2/5 h-[150px] border rounded flex flex-col p-4 text-gray-600 hover:border-[#ff8c8c] transition-colors">
          <h3 className="text-xl font-semibold">Future counters</h3>
          <div className="counters-container flex flex-wrap space-x-3 border p-1">
            {/* Dynamically rendered */}
            <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C1</div>
          </div>
        </div>
      </div>
  );
};


export default Counters;