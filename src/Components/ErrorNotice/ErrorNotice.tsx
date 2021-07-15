import './errorNotice.scss';

interface errorNoticeProps {
  onClick: () => void;
}
const ErrorNotice: React.FC<errorNoticeProps> = ({ onClick }) => {
  return (
    <div className='errorWrapper'>
      <h1 className='errorCode'>404</h1>
      <div className='errorDetails'>
        <h2 className='detailsHeading'>Oops!</h2>
        <p className='errorDetails'>
          We can't find the city you are looking for.
        </p>
        <div className='buttonWrapper'>
          <button onClick={onClick}>Try Again</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotice;
