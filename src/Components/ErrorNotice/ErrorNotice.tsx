import './errorNotice.scss';

const ErrorNotice = (props: any) => {
  return (
    <div className='errorWrapper'>
      <h1 className='errorCode'>404</h1>
      <div className='errorDetails'>
        <h2 className='detailsHeading'>Oops!</h2>
        <p className='errorDetails'>
          We can't find the city you are looking for.
        </p>
        <div className='buttonWrapper'>
          <button>Try Again</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotice;
