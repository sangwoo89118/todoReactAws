import React, {useContext, useEffect}from 'react';
import NavList from './NavList';
import SideNavBarContext from '../../../context/SideNavBarContext';

const SideNav = () => {

  const [sideNavBarStatus, setSideNavBarStatus] = useContext(SideNavBarContext);

  useEffect(() => {
    console.log(sideNavBarStatus);
})

  return (
    <div className={sideNavBarStatus ? "sideNavContainerMobile" : "sideNavContainer"}>
      <div 
        className="backButton" style={sideNavBarStatus ? {display: "block"} : {}}
        onClick={() => {
          console.log('back button Clicked');
          setSideNavBarStatus(false);
        }}
      >
        Back
      </div>
      <div className="profileContainer">Picture</div>
      <div className="listContainer">
        <div className="navList"> 
          <NavList />
        </div>
      </div>
      <div className="logoutContainer">Log Out</div>
    </div>
  )
}

export default SideNav;
