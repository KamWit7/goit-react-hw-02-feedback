import "./App.css"
import Statisitcs from "./Components/Statisitcs"
import React from "react"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Statisitcs good={0} neutral={0} bad={0} total={0} positivePercentage={0}></Statisitcs>
      </header>
    </div>
  )
}

export default App
