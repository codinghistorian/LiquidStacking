import stylesInputBox from "./inputBox.module.css";

function InputBox() {  
      return (
          <div className = {`${stylesInputBox.flexInput}`}>
            <div>StacksImage</div>
            <div>Amount</div>
            <div>Max</div>
          </div>
                    
      );
  }

export default InputBox;
