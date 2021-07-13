import './weatherDetails.scss';

import picture from '../../assets/images/Night-rainy.svg';

const WeatherDetails = (props: any) => {
  return (
    <div className='weatherDetailsWrapper'>
      <div className='weatherIconWrapper'>
        <img
          src={require('../../assets/images/Night-rainy.svg').default}
          // src={import test from '../'}
          alt='weather icon'
        ></img>
      </div>
      <div className='weatherDataWrapper'>
        <p>25</p>
        <p>clear</p>
        <p>sunday</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
