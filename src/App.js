import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
          <Navbar/>

          <div  className="container">

            <div  className="row">

            <CountriesList/>

            {/* Routes & the Route rendering the CountryDetails should go here */}
            <Routes>
              <Route path="/countries/:alpha3Code" element={<CountryDetails/>}/>
            </Routes>

            </div>

          </div>
    </div>
  );
}

export default App;
