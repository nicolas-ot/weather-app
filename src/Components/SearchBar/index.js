import './searchBar.scss';

const SearchBar = (props) => {
  return (
    <div className='searchBarWrapper'>
      <div className='inputFieldWrapper'>
        <label for='city'>Location</label>
        <input
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
