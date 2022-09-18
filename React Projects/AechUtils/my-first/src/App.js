import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Form from "./Components/Form";
import { useState } from "react";

import Alert from "./Components/Alert";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";



function App() {

const [mode, setmode] = useState('light');
const [alert, setalert] = useState(null);

const showAlert=(message, type)=>{
  setalert({
    msg: message,
    type:  type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
}

const toddle1=()=>{
    document.title='TextUtils- About'
      showAlert("You're in About Page","success")
    //   if (document.title==='TextUtils- Home'){
    //     showAlert("You're already in Home Page",
  }

  const toddle2=()=>{
    document.title='TextUtils- Home'
    showAlert("You're in Home Page","success")
  }
 
const toggle =()=>{
  if (mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor = "#312a4c";
    showAlert("You're in Dark Mode","success")
    document.title= 'TextUtils- Dark Mode'
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = "white ";
    showAlert("You're in Light Mode","success")
    document.title= 'TextUtils- Light Mode'
  }
}



  return (
    <Router>
    <Navbar mode={mode} toggle={toggle} toddle1={toddle1} toddle2={toddle2}/>
    <Alert alert={alert}/>
    <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/">
          <Form heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
        </Route>
    </Switch>
        </Router>
  );
}

export default App;

// FOR MODULE
// import ab, { a, b } from "./module1.mjs";
// console.log(ab, a, b);

// let a = 3;
// let b = "AB";
// let c = "CD";
// export default a;
// export { a, b };
