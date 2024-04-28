import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css';
import { ThemeProvider } from "@emotion/react";
import fontcolorTheme from "./fontcolortheme";
import LandingPage from "./LandingPage";

function App() {

 
  return (
    <div className="App">
      
       <ThemeProvider theme={fontcolorTheme}>
         <Router> 
          <Routes>
            <Route path="/" element={<LandingPage />} /> 

          </Routes>
        </Router>
        </ThemeProvider>
        
    </div>
  );
}

export default App;