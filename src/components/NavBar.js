import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const NavBar = (props) => {
  const [redCol, setRedCol] = useState(false);
  const [greenCol, setGreenCol] = useState(false);
  const [blueCol, setBlueCol] = useState(false);
  const handleRed = () =>{
   if(redCol)
   {
    document.body.style.backgroundColor = "white";
    setRedCol(false);
   }else{
     setRedCol(true);
    document.body.style.backgroundColor = "red";
   }
  }

  const handleGreen = () =>{
    if(greenCol)
    {
     document.body.style.backgroundColor = "white";
     setGreenCol(false);
    }else{
      setGreenCol(true);
     document.body.style.backgroundColor = "green";
    }
   }

   const handleBlue = () =>{
    if(blueCol)
    {
     document.body.style.backgroundColor = "white";
     setBlueCol(false);
    }else{
      setBlueCol(true);
     document.body.style.backgroundColor = "blue";
    }
   }
    return (
       
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">

      <div className={`form-check form-switch text-${props.mode === 'light' ? "dark": "light"}`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleRed} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Red mode </label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? "dark": "light"}`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleGreen}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Green mode </label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? "dark": "light"}`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleBlue}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Blue mode </label>
      </div>

      <div className={`form-check form-switch text-${props.mode === 'light' ? "dark": "light"}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={()=>{props.handleMode()}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode === 'light' ? "Light": "Drak"} mode</label>
</div>
      </form>
    </div>
  </div>
</nav>   

    )
}
