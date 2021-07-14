import './app.scss';
import assetMapping from '../../assets/assetMapping.json';

import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';
import WeatherDetails from '../../Components/WeatherDetails/WeatherDetails';
import Card from '../../Elements/Card/Card';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import Preview from '../../Components/Preview/Preview';

function App() {
  interface weatherDetailsInterface {
    temp: number;
    desc:
      | 'Rain'
      | 'Clear'
      | 'Thunderstorm'
      | 'Snow'
      | 'Drizzle'
      | 'Clouds'
      | 'Haze';
  }

  const [weatherDetails, setWeatherDetails] =
    useState<weatherDetailsInterface>();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = (input: string) => {
    const API_KEY = '270c098c9fb6257986ba3644d1aa5177';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
    console.log(input);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherDetails({
            temp: data.main.temp,
            desc: data.weather[0].main,
          });
        } else {
          throw data.cod;
        }
      })
      .catch((err) => console.log(err));
  };

  const inputChangeHanlder = (inputLocation: string) => {
    setInput(inputLocation);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (input) fetchWeather(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  // console.log(process.env);

  let cardContent = <Preview></Preview>;
  if (weatherDetails)
    cardContent = (
      <WeatherDetails weatherDetails={weatherDetails}></WeatherDetails>
    );

  let color: keyof typeof assetMapping.colors;
  if (error) color = 'error';
  else if (weatherDetails) color = weatherDetails.desc;
  else color = 'default';

  return (
    <div className='appWrapper'>
      <Header color={assetMapping.colors[color]}></Header>
      <main className='appMain'>
        <SearchBar onChange={inputChangeHanlder}></SearchBar>
        <Card>{cardContent}</Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
