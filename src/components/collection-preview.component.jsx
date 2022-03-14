import React from 'react'
import CollectionItem from './collection-item.component'

function CollectionPreview({ title, products }) {
  return (
    <div>
      <h1 className='text-3xl uppercase my-4'>{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {products.splice(0,4).map((product) => (
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

export default CollectionPreview