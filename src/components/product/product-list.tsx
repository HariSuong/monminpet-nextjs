import React from 'react'

import { Product } from '../../types/products'
import ProductItem from './product-item'

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'>
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.desc || ''} // Add default value for description
          price={`${product.price}đ`}
          imageUrl={product.thumb}
          isHot={product.hot === 1}
        />
      ))}
    </div>
  )
}

export default ProductList
