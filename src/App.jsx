//import { useState } from 'react'
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
// import './App.css'

function App() {
  //   const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full flex">
        {/* Navigation bar */}
        <NavigationBar />
        {/* Main component */}
        <main className="grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
