import './Logo.scss';

interface LogoProps {
  colorScheme: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ colorScheme }) => {
  return <h1 className={colorScheme + ' logo'}>WEATHER APP</h1>;
};

export default Logo;
