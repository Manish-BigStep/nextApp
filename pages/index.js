import ProductsTable from "../components/products/ProductsTable";
import Card from '../components/ui/Card';
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header/Header";
import { clearCart } from "../redux/actions";


export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();


  const SearchedProduct = (searchTerm) => {
    setQuery(searchTerm)

    if(searchTerm !== '') {
      const filteredProducts = products.filter(value => {
        return value.product.toLowerCase().includes(query.toLowerCase())
      })
      setSearchResults(filteredProducts);
    }

    else {
      setSearchResults(products);
    }
    
  }

  const HandleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <Card>
        <div className="header">
          <SearchBar data = {products} placeholder = "Product name" term = {query} onSearchHandler = {SearchedProduct}/>
          <button onClick={HandleClearCart}>Clear items</button>
          <Header />
        </div>
        <ProductsTable data = {searchResults.length < 1 ? products : searchResults}/>
      </Card>
    </>
  )
}
