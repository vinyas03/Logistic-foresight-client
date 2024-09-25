import Chart from "./Chart";
function Dashboard() {
    return ( <div className="flex flex-col space-y-6 py-12 px-14 ml-10 ">
        <h2 className="text-3xl font-bold text-center text-[#ff8c8c]">Dashboard</h2>
        <div className="flex justify-evenly ">
        <div className="w-2/5 h-[150px] border rounded flex flex-col p-3 text-gray-600 hover:border-[#ff8c8c] transition-colors">
                <h3 className="text-xl font-semibold">Active counters</h3>
                {/* Dynamically rendered */}
                <div className="counters-container flex flex-wrap space-x-3 border p-1">
                    <div className="p-2 mt-1 mb-1  bg-blue-600 text-white">C1</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C2</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C3</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C1</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C2</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C3</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C1</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C2</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C3</div>
                    <div className="p-2 mt-1 mb-1 bg-blue-600 text-white">C1</div>
                </div>
            </div>
            <div className="w-2/5 h-[150px] border rounded flex flex-col p-4 text-gray-600 hover:border-[#ff8c8c] transition-colors">
                <h3 className="text-xl font-semibold">Current running counters</h3>
                {/* Dynamically rendered */}
                <div className="counters-container flex flex-wrap space-x-3 border p-1">
                    <div className="p-2 mt-1 mb-1  bg-green-400 text-white">C1</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C2</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C3</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C1</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C2</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C3</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C1</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C2</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C3</div>
                    <div className="p-2 mt-1 mb-1 bg-green-400 text-white">C1</div>
                    
                </div>
            </div>
            <div className="w-2/5 h-[150px] border rounded flex flex-col p-4 text-gray-600 hover:border-[#ff8c8c] transition-colors">
                <h3 className="text-xl font-semibold">Extra counters</h3>
                {/* Dynamically rendered */}
                <div className="counters-container flex flex-wrap space-x-3 border p-1">
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C1</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C2</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C3</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C1</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C2</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C3</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C1</div>
                    <div className="p-2  mt-1 mb-1 bg-gray-500 text-white">C2</div>
                    
                </div>
            </div>           
        </div>
        
        <div className="mt-2 flex flex-col space-x-8 w-4/5">
            <h2 className="font-bold text-xl text-[#ff8c8c]">Analytics</h2>
            <Chart/>
        </div>


        <h2 className="font-bold text-xl text-[#ff8c8c]">Activity history</h2>
        <div className="flex space-x-8">
            <div className="w-full h-[150px] border rounded flex flex-col p-4 text-gray-600">
                <span>Order no: 7328 - fulfilled - 11:23:47</span>
                <span>Order no: 7329 - fulfilled - 11:23:51</span>
                <span>Order no: 7330 - fulfilled - 11:23:52</span>
            </div>
            {/* <div className="w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
                <span>Future Orders</span>
                <span>9128</span>
            </div>            */}
        </div>
    </div> );
}

export default Dashboard;