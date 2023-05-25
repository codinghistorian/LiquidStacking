import { useEffect, useState } from "react";
import { connectWallet } from "../../service/walletConnect"
import { stackSTX } from "../../service/stackSTX";
import { userSession } from '../../service/userSession';
import stylesConnectWallet from "./connectWallet.module.css";

function ConnectWallet( {activeTab} ) {
  const [isUserConnected, setIsUserConnected] = useState(false)

  useEffect(() => {
    if (userSession) {
      const sessionStarted = userSession.isUserSignedIn()
      setIsUserConnected(sessionStarted)
    }
  }, [])

  if (isUserConnected) return (
    <div className = {`${stylesConnectWallet.container}`}>
      <button 
        type="button"
        className = {`${stylesConnectWallet.buttonStack}`}
        onClick={stackSTX}
      >
        StackSTX
      </button>
    </div>
  )
  // <></>

  return (
    <div className = {`${stylesConnectWallet.container}`}>
      <button 
        type="button"
        className = {`${stylesConnectWallet.buttonConnectWallet}`}
        style={{ backgroundColor: activeTab === "1" ? '' : 'purple' }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  )
}

export default ConnectWallet;