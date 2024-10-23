import LineChart from "./LineChart";

function Analytics() {
  
  return (
    <div className="mt-2 flex flex-col space-x-8">
        <h2 className="font-bold text-3xl text-[#ff8c8c] mb-2">Analytics</h2>
        {/* <h1>Orders Fulfilled</h1> */}
        
       
        <div className="border p-2 w-full space-y-2">
            <div className="flex justify-center space-x-5">
                <div><span className="text-xl mr-4 mb-3">Weeks: </span> <input className="border-2 border-[#ff8c8c] rounded-sm outline-none p-1" type="number" name="weeks" id="weeks" defaultValue={4}/></div>
                <div><span className="text-xl mr-4 mb-3">Hours: </span> <input className="border-2 border-[#ff8c8c] rounded-sm outline-none p-1"  type="number" name="hours" id="hours" defaultValue={5}/></div>
            </div>
           <div className="flex items-center justify-center">
            <button className ="px-3 py-1 bg-[#ff8c8c] hover:bg-[#e96868]  rounded-md text-white">Save</button>
           </div>
        </div>
        <LineChart /> 
    </div>
  );
};

export default Analytics;

