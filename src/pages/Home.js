import React from 'react'
import Cards from '../components/Cards'
import bg from '../img/bg.jpg'
import {datas, testimony} from '../data.js'

const Home = () => {
  console.log(datas)

  return (
    <>
        <header className='heroHeader'>
          <img src={bg} alt='Presentation wall papper' />
          <div className='overlay'><h1>Welcome To <br />Little <span>Lemon</span> Restuarant</h1></div>
        </header>
        <main>
          <section>
            <h2>Featured Dishes</h2>
            <div className='cardwrapper'>
              {
                datas.map((data) => {
                  return (
                    <Cards key={data.id} img={data.imgUrl} title={data.title} desc={data.desc} />
                    )
                })
              }
            </div>
          </section>

          <section>
            <h2>Testimonials</h2>
            <div className='cardwrapper testimony'>
              {
                testimony.map((testi) => {
                  return <Cards key={testi.id} img={testi.imgUrl} name={testi.name} testimony={testi.testimony} />
                })
              }
            </div>
          </section>
        </main>
    </>
  )
}

export default Home