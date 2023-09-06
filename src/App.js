import logo from './logo.svg';
import './App.css';
import CityList from './components/CityList';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <main>
        <CityList />
      </main>
    </div>
  );
}

export default App;