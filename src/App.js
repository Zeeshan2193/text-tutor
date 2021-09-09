import React, {useState} from 'react';

import { NavBar } from './components/NavBar';
import { EnterText } from './components/EnterText';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);
const showAlert = (message, type) =>{
setAlert({message, type});
setTimeout(() => {
  setAlert(null);
}, 2000);
}

  const handleMode = () => {
    if(mode === "dark"){
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Light Mode Is Enabled", "danger")
    }
    else{
    setMode('dark');
    document.body.style.backgroundColor = "gray";
    showAlert("Dark Mode Is Enabled", "success")
    }
  }
  return (
    
    <div className="App">
      <NavBar mode={mode} handleMode={handleMode}/>
      <Alert alert={alert}/>      
      
      
      {/* <Switch> */}
          {/* <Route exact path="/about"> <About name="Zeeshan Ali"/> </Route> */}
          {/* <Route exact path="/">  */}
          <EnterText showAlert={showAlert} mode={mode} /> 
          {/* </Route> */}
          
        {/* </Switch> */}
   
      
    </div>
    
  );
}

export default App;
