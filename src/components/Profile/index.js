import { useCallback, useEffect, useState } from "react";
import { connectWallet, disconnectWallet } from "../service/walletConnect"
import { userSession } from '../service/userSession';
import stylesProfile from "./profile.module.css";
import menuIcon from "../../images/menu.png";

const Profile = () => {  
  const [isUserConnected, setIsUserConnected] = useState(false)
  
  useEffect(() => {
    if (userSession) {
      const sessionStarted = userSession.isUserSignedIn()
      setIsUserConnected(sessionStarted)
    }
  }, [])

  const Menu = useCallback(() => {
    if (isUserConnected) {
      return <li onClick={disconnectWallet}>Disconnect</li>
    }
    return <li onClick={connectWallet}>Connect Wallet</li>
  }, [isUserConnected])

  return (
    <div className = {`${stylesProfile.ProfileContainer}`}>
      <div className = {`${stylesProfile.Navbar}`}>
        <img className = {`${stylesProfile.ProfileIcon}`} src={menuIcon} alt="Menu Icon"/>
        <ul className = {`${stylesProfile.Dropdown}`}>
          <Menu />
        </ul>
      </div>
    </div>         
  )
}

export default Profile;
