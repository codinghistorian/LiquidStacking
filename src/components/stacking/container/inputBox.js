import stylesInputBox from "./inputBox.module.css";
import STXImage from "../../../images/STX.png";
function InputBox() {  
      return (
          <div className = {`${stylesInputBox.flexInput}`}>
            <div>
                        <div className = {`${stylesInputBox.STXLogo}`}><img src={STXImage} alt="STX Logo"/></div>
                        <div><input type="number" placeholder ="amount"/></div>
            </div>
            <div className = {`${stylesInputBox.Max}`}>Max</div>
          </div>
                    
      );
  }

export default InputBox;
