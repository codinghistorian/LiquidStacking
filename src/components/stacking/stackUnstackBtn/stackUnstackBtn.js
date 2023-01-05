import stylesButton from "./stackUnstackBtn.module.css";

function StackUnstackBtn() {  
      return (
        <div className = {`${stylesButton.btn}`}>
            <div className = {`${stylesButton.stack}`}>
                    Stack
            </div>
            <div>
                    Unstack  
            </div>
          </div>
                    
      );
  }

export default StackUnstackBtn;
