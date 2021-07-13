import './header.scss';
import Logo from '../../Elements/Logo/Logo';

const Header = (props: any) => {
  return (
    <header className='header'>
      <Logo colorScheme='light'></Logo>
    </header>
  );
};

export default Header;
