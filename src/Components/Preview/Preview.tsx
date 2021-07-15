import './preview.scss';

const Preview = () => {
  return (
    <img
      className='preview'
      src={require('../../assets/images/Preview.svg').default}
      alt='preview img'
    ></img>
  );
};

export default Preview;
