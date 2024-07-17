import React from 'react'
import SideComponent from './SideComponent';
import Header from './Header';
import { Outlet } from 'react-router-dom';
const MainComponent = () => {
  return (
    <div className="main_component">
      <div className="inside_screen">
        <SideComponent />
        <div className="middlebar-div">
          <main className="middlebar">
            <Header />
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
