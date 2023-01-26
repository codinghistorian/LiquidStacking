import { useEffect, useState } from "react";
import { connectWallet } from "../../service/walletConnect"
import { stackSTX } from "../../service/stackSTX";
import { userSession } from '../../service/userSession';
import stylesConnectWallet from "./connectWallet.module.css";

function ConnectWallet() {
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
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  )
}

export default ConnectWallet;
