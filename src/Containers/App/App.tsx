import './app.scss';
import assetMapping from '../../assets/assetMapping.json';

import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';
import WeatherDetails from '../../Components/WeatherDetails/WeatherDetails';
import Card from '../../Elements/Card/Card';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import Preview from '../../Components/Preview/Preview';
import ErrorNotice from '../../Components/ErrorNotice/ErrorNotice';

function App() {
  interface weatherDetailsInterface {
    temp: number | undefined;
    desc:
      | 'Rain'
      | 'Clear'
      | 'Thunderstorm'
      | 'Snow'
      | 'Drizzle'
      | 'Clouds'
      | 'Haze'
      | null;
  }

  const [weatherDetails, setWeatherDetails] =
    useState<weatherDetailsInterface>();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = (input: string) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherDetails({
            temp: data.main.temp,
            desc: data.weather[0].main,
          });
        } else {
          setError('error');
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

  if (error && input) {
    cardContent = (
      <ErrorNotice
        onClick={() => {
          setWeatherDetails({ temp: undefined, desc: null });
          setError('');
          setInput('');
        }}
      ></ErrorNotice>
    );
    // cardContent will be WeatherDetails if the variables below have a true-ish value
  } else if (
    input &&
    weatherDetails &&
    weatherDetails.desc &&
    weatherDetails.temp
  ) {
    const details = weatherDetails as {
      temp: number;
      desc:
        | 'Rain'
        | 'Clear'
        | 'Thunderstorm'
        | 'Snow'
        | 'Drizzle'
        | 'Clouds'
        | 'Haze';
    };

    cardContent = <WeatherDetails weatherDetails={details}></WeatherDetails>;
  }

  let color: keyof typeof assetMapping.colors;
  if (error && input) color = 'error';
  else if (weatherDetails && weatherDetails.desc) color = weatherDetails.desc;
  else color = 'default';

  return (
    <div className='appWrapper'>
      <Header color={assetMapping.colors[color]}></Header>
      <main className='appMain'>
        <SearchBar value={input} onChange={inputChangeHanlder}></SearchBar>
        <Card>{cardContent}</Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
