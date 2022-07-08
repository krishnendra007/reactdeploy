
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3C4752';
      showAlert('Dark Mode is Enabled', "success")
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', "success")
    }

  }
  return (
    <>
     <Router>
      <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={ <TextForm heading="Enter Text to analyze" showAlert={showAlert} mode={mode} />} />
        </Routes>
       
      </div>
      </Router>

    </>

  );
}

export default App;
