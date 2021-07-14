import './footer.scss';
import Logo from '../../Elements/Logo/Logo';

const Footer = (props: any) => {
  return (
    <footer className='footer'>
      <Logo colorScheme='dark'></Logo>
      <div className='footerSeparator'></div>
    </footer>
  );
};

export default Footer;
