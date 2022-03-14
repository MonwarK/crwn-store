import React from 'react'
import CollectionPreview from '../components/collection-preview.component';
import { SHOP_DATA } from "../data";

function ShopPage() {
  

  return (
    <div>
      <h1 className='text-4xl font-semibold my-10'>Collections</h1>
      {SHOP_DATA.map((category) => (
        <CollectionPreview 
          key={category.id}
          title={category.title}
          products={category.items}
        />
      ))}
    </div>
  )
}

export default ShopPage