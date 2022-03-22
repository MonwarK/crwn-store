import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './button.component'
import CollectionItem from './collection-item.component'

function CollectionPreview({ id, title, products }) {
  const navigate = useNavigate();
  
  return (
    <div className='mb-10'>
      <h1 className='text-3xl uppercase my-4'>{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {products.slice(0, 4).map((product) => (
          <CollectionItem 
            key={product.id}
            title={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      <div className='my-5'>
        <Button onClick={() => navigate(`${id}`)}>
          Show More
        </Button>
      </div>
    </div>
  )
}

export default CollectionPreview