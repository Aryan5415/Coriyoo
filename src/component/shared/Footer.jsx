import React from 'react'
import IndexImages from '../../assets/images/images';


function Footer() {
  
  return (
    <>
    <section className='footer'>
      <div className='sub'>
        <img src={IndexImages.Search} alt='search' />
        <p>Search</p>
      </div>
      <div className='sub'>
        <img src={IndexImages.Upcoming} alt='upcoming' />
        <p>Upcoming</p>
      </div>
      <div className='sub'>
        <img src={IndexImages.Heart} alt='heart' />
        <p>Like</p>
      </div>
    </section>
    </>
  )
}

export default Footer