import picture from '../../assets/images/Night-rainy.svg';

const WeatherDetails = (props: any) => {
  return (
    <div className='weatherDetailsWrapper'>
      <img
        src={require('../../assets/images/Night-rainy.svg').default}
        // src={import test from '../'}
        alt='weather illustration'
      ></img>
    </div>
  );
};

export default WeatherDetails;
