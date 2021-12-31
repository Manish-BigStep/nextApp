import classes from './SearchBar.module.css';


const SearchBar = ({placeholder, onSearchHandler, term}) => {

  const ProductSearchHandler = (event) => {
     const {value} = event.target;
     onSearchHandler(value);
  }

  return <div className={classes.search}>
  <label htmlFor="prodsearch">Search</label>
  <input type = "search" id="prodsearch" placeholder={placeholder} value = {term} onChange = {ProductSearchHandler}/>
  </div>;
}

export default SearchBar;
