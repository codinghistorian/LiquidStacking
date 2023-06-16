import stylesConnectWallet from "./connectWallet.module.css";


function ConnectWallet( {activeTab} ) {  

      return (
        <div className = {`${stylesConnectWallet.container}`}>
          <div className = {`${stylesConnectWallet.button}`}  style={{ backgroundColor: activeTab === "1" ? '' : 'purple' }}>
            Connect Wallet
          </div>
        </div>

                    
      );
  }

export default ConnectWallet;
