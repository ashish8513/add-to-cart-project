import React from 'react'
import ItemCard from './ItemCard'
import data from '../components/Data'
function Home() {
  // console.log(data.productData)
  return (
    <div className='f'>
      <h1 className='text-center mt-3 text-2xl text-black '>All Items </h1>
      <section className='py-4 container'>
        <div className=' flex space-x-5 justify-center text-center'>
          {
            data.productData.map((item, index) => {
              return (
                <ItemCard title={item.title} desc={item.desc} img={item.img} price={item.price} item={item} key={index} />
              )
            })
          }
        </div>

      </section>
    </div>
  )
}

export default Home
