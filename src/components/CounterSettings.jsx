function CounterSettings() {
    return (<div className="flex justify-evenly ">
        <div className="border p-3 w-full space-y-2">
            <div className="flex justify-center space-x-5">
                <div><span className="text-xl mr-4 mb-3">Timer (mins): </span> <input className="border-2 border-[#ff8c8c]  rounded-sm outline-none p-1" type="number" name="timer" id="timer" defaultValue={5}/></div>
                <button className ="px-3 py-1 bg-[#ff8c8c] hover:bg-[#e96868]  rounded-md text-white">Set Timer</button>
                <div><span className="text-xl mr-4 mb-3">Helpers: </span> <input className="border-2 border-[#ff8c8c] rounded-sm outline-none p-1"  type="number" name="helpers" id="helpers" defaultValue={2}/></div>
            
                <button className ="px-3 py-1 bg-[#ff8c8c] hover:bg-[#e96868]  rounded-md text-white">Send Helpers</button>

            </div>

           <div className="flex  flex-col items-center justify-center">
                <div className="text-xl font-semibold">Countdown Timer - <span className="text-xl font-bold text-[#ff8c8c]">03:29</span></div>
           </div> 
        </div>
    </div>);
}

export default CounterSettings;