import './description.scss';

interface DescriptionProps {
  desc: string;
}
const Description: React.FC<DescriptionProps> = ({ desc }) => {
  return <div className='descriptionWrapper'>{desc}</div>;
};

export default Description;
