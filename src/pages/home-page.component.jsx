import React from 'react'
import MenuItem from '../components/menu-item.component'

function HomePage() {
  const sections = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5
    }
  ]

  return (
    <div className='text-center'>
      <div className='flex flex-wrap p-3'>
        {sections.map(item => (
          <MenuItem 
            key={item.id}
            title={item.title}
            image={item.imageUrl}
            size={item.size}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage