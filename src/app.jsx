import React from "react"
import SideBar from "./Components/SideBar"
import Main from "./Components/Main"

export function App() {


  return (
    <>
      <div className="flex animate-fadeIn duration-1000">
        <SideBar />
        <Main />
      </div>

    </>
  )
}
