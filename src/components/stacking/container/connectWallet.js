import stylesConnectWallet from "./connectWallet.module.css";


function ConnectWallet() {  
      return (
        <div className = {`${stylesConnectWallet.container}`}>
          <div className = {`${stylesConnectWallet.button}`}>
            Connect Wallet
          </div>
        </div>

                    
      );
  }

export default ConnectWallet;
