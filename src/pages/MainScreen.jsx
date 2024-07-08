import React, { useState } from 'react';
import IndexImages from '../assets/images/images';
import { Link } from 'react-router-dom';

function MainScreen() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Date");
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);
    };
  return (
    <div className='mainscreen-tab'>
        <div className="tabs">
        <div 
          className={`tab one ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Map
        </div>
        <div 
          className={`tab two ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
        List
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <div>
            <div className='input-container'>
            <span className='icon'><img src={IndexImages.InputSearch} /></span>
            <input type="text" placeholder='Los Angles'></input>
            <Link to='/'><img src={IndexImages.Filter} /> </Link>
            </div>
            <img src={IndexImages.MapLocation} className='main' />
            </div>}
        {activeTab === 'tab2' && <div>
            <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => handleOptionClick("Option 1")}>
            <label>
          <input
            type="checkbox"
            name="today"
          />
          Today
        </label>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick("Option 2")}>
            <label>
          <input
            type="checkbox"
            name="This week"
          />
          This week
        </label>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick("Option 3")}>
            <label>
          <input
            type="checkbox"
            name="This week"
          />
          This weekend
        </label>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick("Option 4")}>
            <label>
          <input
            type="checkbox"
            name="This week"
          />
          Next 30 days
        </label>
            </div>
          </div>
          
        )}
      </div>
      <div className='music-type'>
        <div className='type'>
        <Link to='/'>Hip Hop</Link>
        </div>
        <div className='type'>
        <Link to='/'>Electronic</Link>
        </div>
        <div className='type'>
        <Link to='/'>Rock</Link>
        </div>
        <div className='type'>
        <Link to='/'>Regueaton</Link>
        </div>
        <div className='type'>
        <Link to='/'>Trap</Link>
        </div>
        <div className='type'>
        <Link to='/'>Latin Trap</Link>
        </div>
        <div className='type'>
        <Link to='/'>Salsa</Link>
        </div>
        <div className='type'>
        <Link to='/'>Bachata</Link>
        </div>
        <div className='type'>
        <Link to='/'>Merengue</Link>
        </div>
        <div className='type'>
        <Link to='/'>Jazz</Link>
        </div>
        <div className='type'>
        <Link to='/'>Piano</Link>
        </div>
        <div className='type'>
        <Link to='/'>Solo Music</Link>
        </div>
        <div className='type'>
        <Link to='/'>Stand Up Comedy</Link>
        </div>
        <div className='type'>
        <Link to='/'>Pop</Link>
        </div>
      </div>
      <div className='buttons'>
            <Link to='/'>Clear Filter</Link>
            <Link to='/'>Submit</Link>
        </div>
      </div>}
      </div>
    </div>
    
  )
}

export default MainScreen