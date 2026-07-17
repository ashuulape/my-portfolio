import React from 'react'
import InfiniteMenu from './components/InfiniteMenu'

const Infinity = () => {

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: '/',
    title: 'Home',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: '/about',
    title: 'About Me',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Contact',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Projects',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'mailto:ashuulape@gmail.com',
    title: 'Email',
    description: 'Want to Hire me?'
  }
];

  return (
    <div style={{ height: '100%', position: 'relative' }}>
  <InfiniteMenu items={items}
    scale={2}
/>
</div>

  )
}

export default Infinity