import Inputbox from "./inputBox";
import ConnectWallet from "./connectWallet";
import Info from "./info";
import stylesContainer from "./container.module.css";

function Container({activeTab}) {  
      return (
          <div className = {`${stylesContainer.container}`}>
              {activeTab === "1" && (
                  <>
                    <div className = {`${stylesContainer.empty}`}></div>
                    <Inputbox />
                    <ConnectWallet />
                    <Info />
                </>
              )}

            {activeTab === "2" && (
                  <>
                    test
                </>
              )}
         
          </div>
                    
      );
  }

export default Container;
