import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
const Tabs = props => {
  // console.log('Tabs.js:',props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((tab, index)=> {
              // console.log(index)
              // console.log('tab:', tab)
              return (
                   <>
                   
                    <Tab key={index} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>

                   </>
              )
            })}
      </div>
    </div>
  );
};

/////////my proptypes start here //////////
Tabs.propTypes = {
  tab: PropTypes.arrayOf(PropTypes.string)

}

// Make sure to use PropTypes to validate your types!
export default Tabs;
