import React from 'react';
import { Route, Routes } from "react-router-dom";
import CategoryPage from './category-page.component';
import CollectionListingPage from './collection-listing-page.component';

function ShopPage() {
  return (
    <div>
      <h1 className='text-4xl font-semibold my-10'>Collections</h1>
      <Routes>
        <Route path="/" element={<CollectionListingPage />} />
        <Route path="/:categoryid" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default ShopPage