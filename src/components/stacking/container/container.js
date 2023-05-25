import InputBox from "./inputBox";
import ConnectWallet from "./connectWallet";
import Info from "./info";
import stylesContainer from "./container.module.css";
import STXImage from "../../../images/STX.png";
import stSTXImage from "../../../images/stSTX.png";

function Container({ activeTab }) {
  let imageToShow;
  let connectWalletState;

  if (activeTab === "1") {
    imageToShow = STXImage; // Set the image for activeTab 1
    connectWalletState = "connected"; // Set the state for activeTab 1

  } else if (activeTab === "2") {
    imageToShow = stSTXImage; // Set the image for activeTab 2
    connectWalletState = "disconnected"; // Set the state for activeTab 2

  }

  return (
    <div className={`${stylesContainer.container}`}>
      {activeTab === "1" && (
        <>
          <div className={`${stylesContainer.empty}`}></div>
          <InputBox image={imageToShow} />
          <ConnectWallet activeTab={activeTab}/>
          <Info />
        </>
      )}

      {activeTab === "2" && (
        <>
          <div className={`${stylesContainer.empty}`}></div>
          <InputBox image={imageToShow} />
          <ConnectWallet activeTab={activeTab}/>
          <Info />
        </>
      )}
    </div>
  );
}

export default Container;
