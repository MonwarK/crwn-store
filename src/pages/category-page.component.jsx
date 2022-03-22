import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionItem from '../components/collection-item.component';
import SHOP_DATA from "../data";

function CategoryPage() {
  const params = useParams();
  const category = SHOP_DATA.find(x => x.id === parseInt(params.categoryid));
  return (
    <div>
      <h2 className='text-3xl font-medium mb-5 uppercase'>{category?.title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {category?.items.map((product) => (
          <CollectionItem 
            key={product.id}
            title={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage