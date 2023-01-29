import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';

import {
  collection,
  getDocs
} from 'firebase/firestore'

const FetchDocs = () => {
  const [products, setProducts] = useState([]);

  const productsCollectionRef = collection(db, 'test-products');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getDocs(productsCollectionRef);
      setProducts(res.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    fetchProducts();
  }, [productsCollectionRef])

  return (
    <>
      {products.map(product => (
        <div className='products'>
          <h1>Name: {product.name}</h1>
          <h1>Age: {product.age}</h1>
          <h1>Car: {product.car}</h1>
          <h1>Pet: {product.pet}</h1>
        </div>
      ))}
    </>
  )
}

export default FetchDocs
