import './header.scss';
import Logo from '../../Elements/Logo/Logo';
import React from 'react';

interface HeaderProps {
  color: string;
  onClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onClick, color }) => {
  return (
    <header className='header' style={{ backgroundColor: color }}>
      <Logo onClick={onClick} colorScheme='light'></Logo>
    </header>
  );
};

export default React.memo(Header);
