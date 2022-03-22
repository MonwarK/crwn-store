import React from 'react'
import CollectionPreview from '../components/collection-preview.component'
import SHOP_DATA from "../data";

function CollectionListingPage() {
  console.log(SHOP_DATA);
  return (
    SHOP_DATA.map((category) => (
      <CollectionPreview 
        key={category.id}
        id={category.id}
        title={category.title}
        products={category.items}
      />
    ))
  )
}

export default CollectionListingPage