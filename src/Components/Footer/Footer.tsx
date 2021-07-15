import './footer.scss';
import Logo from '../../Elements/Logo/Logo';

interface FooterProps {
  onClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onClick }) => {
  return (
    <footer className='footer'>
      <Logo onClick={onClick} colorScheme='dark'></Logo>
      <div className='footerSeparator'></div>
    </footer>
  );
};

export default Footer;
