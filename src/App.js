import './App.css';
import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";

function App() {
  const [alert,setAlert] =useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const [mode, setMode] = useState('light');
   const toggleMode =()=>{
      if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode is enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white ';
        showAlert("light mode is enabled","success");

      }
    }
  return (
   <>
   <Router>
<Navbar title="Textutils" about="About us"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="try TextUtils - Word Counter,Charcter Counter,Remove Extra Spaces " mode={mode}/>
            
          </Route>
        </Switch>
      </div>
      </Router>


 </>

  );
}    

export default App;
  