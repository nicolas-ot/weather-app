import './weatherDetails.scss';

import Date from './Date/Date';
import Description from './Description/Description';
import Temperature from './Temperature/Temperature';

interface weatherDetailsProps {
  weatherDetails: { temp: number; desc: string };
}

const WeatherDetails: React.FC<weatherDetailsProps> = ({ weatherDetails }) => {
  return (
    <div className='weatherDetailsWrapper'>
      <div className='weatherIconWrapper'>
        <img
          src={
            require(`../../assets/images/${weatherDetails.desc}.svg`).default
          }
          // src={import test from '../'}
          alt='weather icon'
        ></img>
      </div>
      <div className='weatherDataWrapper'>
        <Temperature temp={weatherDetails.temp}></Temperature>
        <Description desc={weatherDetails.desc}></Description>
        <Date></Date>
      </div>
    </div>
  );
};

export default WeatherDetails;
