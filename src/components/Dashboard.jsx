import Chart from "./Chart";
function Dashboard() {
    return ( <div className="flex flex-col space-y-6 py-12 px-14 ml-10 ">
        <h2>Dashboard</h2>
        <div className="flex space-x-8">
            <div className="w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
                <span>Orders</span>
                <span>732</span>
            </div>
            <div className="w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
                <span>Future Orders</span>
                <span>9128</span>
            </div>           
        </div>
        
        <div className="flex flex-col space-x-8 w-4/5">
            <h2>Expenses Chart</h2>
            <Chart/>
        </div>


        <h2>Activity history</h2>
        <div className="flex space-x-8">
            <div className="w-full h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
                <span>Order no: ord2732-3473 dispatched</span>
            </div>
            {/* <div className="w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
                <span>Future Orders</span>
                <span>9128</span>
            </div>            */}
        </div>
    </div> );
}

export default Dashboard;