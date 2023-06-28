import React from 'react'

const Bookings = () => {
  return (
    <>
    <header className='pagesHerosection'><h1>Booking A Table</h1></header>
    <main>
        <form action="">
            <label htmlFor="name">
                Your names here
                <input type="text" id='name' placeholder='Your here' autoFocus/>
            </label>
            <label htmlFor="name">
                Number of guest
                <input type="number" id='name' placeholder='Number of guest'/>
            </label>
            <button type="submit">Book</button>
        </form>
    </main>
    </>
  )
}

export default Bookings