import './app.scss';

import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import WeatherDetails from '../../Components/WeatherDetails/WeatherDetails';
import Card from '../../Elements/Card/Card';

function App() {
  return (
    <div className='appWrapper'>
      <Header></Header>
      <main className='appMain'>
        <SearchBar></SearchBar>
        <Card>
          <WeatherDetails></WeatherDetails>
        </Card>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
