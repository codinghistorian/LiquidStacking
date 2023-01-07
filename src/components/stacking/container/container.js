import Inputbox from "./inputBox";
import ConnectWallet from "./connectWallet";
import Info from "./info";
import stylesContainer from "./container.module.css";

function Container() {  
      return (
          <div className = {`${stylesContainer.container}`}>
                <div className = {`${stylesContainer.empty}`}></div>
                <Inputbox />
                <ConnectWallet />
                <Info />
          </div>
                    
      );
  }

export default Container;
