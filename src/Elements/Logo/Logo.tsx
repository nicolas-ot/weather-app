import './Logo.scss';

interface LogoProps {
  colorScheme: 'light' | 'dark';
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ colorScheme, onClick }) => {
  return (
    <h1 onClick={() => onClick()} className={colorScheme + ' logo'}>
      WEATHER APP
    </h1>
  );
};

export default Logo;
