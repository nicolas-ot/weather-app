import './searchBar.scss';

interface searchBarProps {
  value: string;
  onChange: (input: string) => void;
}

const SearchBar: React.FC<searchBarProps> = ({ value, onChange }) => {
  return (
    <div className='searchBarWrapper'>
      <div className='inputFieldWrapper'>
        <label htmlFor='city'>Location</label>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type='text'
          id='city'
          placeholder='Enter a city'
          required
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
