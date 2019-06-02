// libraries
import React, { useContext, useEffect }from 'react';
import {Auth} from 'aws-amplify';

// contexts
import SideNavBarContext from '../../../context/SideNavBarContext';

// components
import NavList from './NavList';

// images
import defaultProfilePicture from '../../../images/default_image.png';

const SideNav = () => {

  const [sideNavBarStatus, setSideNavBarStatus] = useContext(SideNavBarContext);

  const singOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div className={sideNavBarStatus ? "sideNavContainerMobile" : "sideNavContainer"}>
      <div 
        className="backButton" style={sideNavBarStatus ? {display: "block"} : {}}
        onClick={() => {
          console.log('back button Clicked');
          setSideNavBarStatus(false);
        }}
      >
        <span>Back</span>
      </div>
      <div className="profileContainer">
        <div className="profilePictureContainer">
          <img 
            src={defaultProfilePicture} alt="profileImage" 
            className="profilePicture"  
          />
          <span>Edit</span>
          <span>@sangwoo89118</span>
        </div>
      </div>
      <div className="listContainer">
        <div className="navList"> 
          <NavList />
        </div>
      </div>
      <div 
        className="logoutContainer"
        onClick={() => singOut()}
      >
        <span>Log Out</span>
      </div>
    </div>
  )
}

export default SideNav;
