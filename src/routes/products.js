import React, { useState, useEffect } from 'react';
import ProductFilter from '../components/productFilter';
import NoResultsFound from '../components/noResultsFound';
import ShowProducts from '../components/showProducts';
import { getProducts } from '../services/fakeProductService';
import {
  filterProductsBySearch,
  filterProductsByGenre
} from '../helpers/productsHelper';

const Products = ({ match, genre, areFiltersShowing, handleFiltersClick }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [productsFilteredBySearch, setProductsFilterBySearch] = useState([]);
  const [productsFilteredByGenre, setProductsFilterByGenre] = useState([]);

  useEffect(() => {
    function fetchData() {
      setProducts(getProducts());
    }

    fetchData();
  }, []);

  useEffect(() => {
    function filterData() {
      if (products.length > 0) {
        const search = match.params.query;

        if (search) {
          const filtered = filterProductsBySearch(products, search);
          setProductsFilterBySearch(filtered ? filtered : []);
          setCount(filtered ? filtered.length : 0);
          setProductsFilterByGenre([]);
        }

        if (genre) {
          const filtered = filterProductsByGenre(products, genre);
          setProductsFilterByGenre(filtered ? filtered : []);
          setCount(filtered ? filtered.length : 0);
          setProductsFilterBySearch([]);
        }
      }
    }

    filterData();
  }, [products, match.params.query, genre]);

  return (
    <>
      {genre && (
        <section className='relative bg-white flex flex-wrap items-center justify-center w-full h-12 md:h-16 px-4 lg:px-6 lg:px-12 border-b border-gray-300 z-20'>
          <h1 className='text-center tracking-wide text-gray-800 font-bold uppercase md:text-xl lg:font-extrabold xl:text-2xl'>
            {genre}
          </h1>
        </section>
      )}
      {match.params.query && (
        <div className='relative bg-white flex flex-wrap items-center justify-start w-full h-12 md:h-16 px-4 lg:px-6 lg:px-12 border-b border-gray-300 z-20'>
          <h2 className='text-left capitalize font-bold md:text-lg tracking-wide'>
            {count} Search Results "{match.params.query}"
          </h2>
        </div>
      )}
      {count > 0 && (
        <ProductFilter
          genre={genre}
          count={count}
          areFiltersShowing={areFiltersShowing}
          handleFiltersClick={handleFiltersClick}
        ></ProductFilter>
      )}

      <section className='bg-white flex flex-wrap w-full'>
        {count <= 0 && <NoResultsFound></NoResultsFound>}
        {Array.isArray(productsFilteredBySearch) &&
          productsFilteredBySearch.length > 0 && (
            <ShowProducts products={productsFilteredBySearch}></ShowProducts>
          )}
        {Array.isArray(productsFilteredByGenre) &&
          productsFilteredByGenre.length > 0 && (
            <ShowProducts products={productsFilteredByGenre}></ShowProducts>
          )}
      </section>
    </>
  );
};

export default Products;
