import './temperature.scss';

interface TemperatureProps {
  temp: number;
}
const Temperature: React.FC<TemperatureProps> = ({ temp }) => {
  return (
    <div className='temperatureWrapper'>
      {Math.round(temp)}
      <span className='temperatureSymbol'>°</span>
    </div>
  );
};

export default Temperature;
