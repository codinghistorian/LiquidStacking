import React from "react";
import stylesInputBox from "./inputBox.module.css";

function InputBox({ activeTab, image }) {
  return (
    <div className={`${stylesInputBox.flexInput}`}>
      <div>
        <div className={`${stylesInputBox.STXLogo}`}>
          <img src={image} alt="STX Logo" />
        </div>
        {/* Connect Wallet 영역을 가려서 온클릭 이벤트 방해 */}
        {/* <div>
          <input type="number" placeholder="amount" />
        </div> */}
      </div>
      <div className={`${stylesInputBox.Max}`}>Max</div>
    </div>
  );
}

export default InputBox;
