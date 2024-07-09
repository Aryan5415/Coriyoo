import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import IndexImages from '../images/images';
import { Link } from 'react-router-dom';

function EventList() {
  return (
    <section className='eventlist'>
    <div className='upper'>
        <Link to='/'><FaChevronLeft /></Link>

        <p>Events</p>
    </div>
    <div className='searched-event'>
    <div className='input-container'>
            <input type="text" placeholder='Los Angles'></input>
            <span className='icon'><img src={IndexImages.InputSearch} /></span>
            </div>
    </div>
    <div className='events'>
    <Link to='/' className='cstm-event'>
        <img src={IndexImages.EventImg1} className='main' />
        <div className='data'>
            <div className='name-location'>
            <h4>London</h4>
            <h3>Sam Cooke</h3>
            </div>
            <div className='price'>
                <p><img src={IndexImages.PriceTag} />$40-$70</p>
                <p><img src={IndexImages.Dollar} />$40-$70</p>
            </div>
        </div>
        <div className='timing-review'>
        <div className='review'>
            <img src={IndexImages.Liked} />
            <img src={IndexImages.Comment} />
        </div>
        <div className='timing'>
            <p><img src={IndexImages.DateLine} /> 10-5-24</p>
            <p><img src={IndexImages.TimeOutline} /> 10 : 34</p>
        </div>
        </div>
    </Link>
    <Link to='/' className='cstm-event'>
        <img src={IndexImages.EventImg2} className='main' />
        <div className='data'>
            <div className='name-location'>
            <h4>London</h4>
            <h3>Sam Cooke</h3>
            </div>
            <div className='price'>
                <p><img src={IndexImages.PriceTag} />$40-$70</p>
                <p><img src={IndexImages.Dollar} />$40-$70</p>
            </div>
        </div>
        <div className='timing-review'>
        <div className='review'>
            <img src={IndexImages.Liked} />
            <img src={IndexImages.Comment} />
        </div>
        <div className='timing'>
            <p><img src={IndexImages.DateLine} /> 10-5-24</p>
            <p><img src={IndexImages.TimeOutline} /> 10 : 34</p>
        </div>
        </div>
    </Link>
    <Link to='/' className='cstm-event'>
        <img src={IndexImages.EventImg3} className='main' />
        <div className='data'>
            <div className='name-location'>
            <h4>London</h4>
            <h3>Sam Cooke</h3>
            </div>
            <div className='price'>
                <p><img src={IndexImages.PriceTag} />$40-$70</p>
                <p><img src={IndexImages.Dollar} />$40-$70</p>
            </div>
        </div>
        <div className='timing-review'>
        <div className='review'>
            <img src={IndexImages.Liked} />
            <img src={IndexImages.Comment} />
        </div>
        <div className='timing'>
            <p><img src={IndexImages.DateLine} /> 10-5-24</p>
            <p><img src={IndexImages.TimeOutline} /> 10 : 34</p>
        </div>
        </div>
    </Link>
    </div>
    </section>
  )
}

export default EventList