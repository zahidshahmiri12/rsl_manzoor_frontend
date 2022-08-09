import Cards from './Components/Cards/Cards';
import NavBar from './Components/Header/Header';
import LocationNews from './Components/Location/LocationNews';

function App() {
  return (
    <div className='app-container'>
      <NavBar/>
      <Cards />
      <LocationNews/>
    </div>
  );
}

export default App;
