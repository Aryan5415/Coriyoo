import React, { useState } from 'react';
import IndexImages from '../images/images';
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
            <div className="dropdown-item" onClick={() => handleOptionClick("Today")}>
            <label>
          <input
            type="checkbox"
            name="today"
          />
          Today
        </label>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick("This week")}>
            <label>
          <input
            type="checkbox"
            name="This week"
          />
          This week
        </label>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick("This weekend")}>
            <label>
          <input
            type="checkbox"
            name="This weekend"
          />
          This weekend
        </label>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick("Next 30 days")}>
            <label>
          <input
            type="checkbox"
            name="Next 30 days"
          />
          Next 30 days
        </label>
            </div>
          </div>
          
        )}
      </div>
      <div className='music-type'>
        <div className='type'>
          <label><input type='checkbox'></input>Hip Hop</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Electronic</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Rock</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Regueaton</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Trap</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Latin Trap</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Salsa</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Bachata</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Merengue</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Jazz</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Piano</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Solo Music</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Stand Up Comedy</label>
        </div>
        <div className='type'>
        <label><input type='checkbox'></input>Pop</label>
        </div>
      </div>
      <div className='buttons'>
            <button>Clear Filter</button>
            <Link to="/eventlist">
            <button>Submit</button>
            </Link>
        </div>
        <div className='events'>
        <div className='cstm-event'>
          
        </div>
        </div>
      </div>}
      </div>
    </div>
    
  )
}

export default MainScreen