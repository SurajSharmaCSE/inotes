import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        < Routes>  
          <Route exact path="/Home"></Route>
            <Home />
          <Route exact path="/About"></Route>
            <About/>
        </ Routes>
      </BrowserRouter>
    </>
  );
}
export default App;