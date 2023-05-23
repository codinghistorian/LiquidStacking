import stylesButton from "./stackUnstackBtn.module.css";

function StackUnstackBtn({activeTab, setActiveTab}) {  
      return (
        <div className = {`${stylesButton.btn}`}>
            <div className = {`${stylesButton.stack}`} onClick={() => setActiveTab("1")} background={activeTab === "1" ? 'red' : ""}>
                    Stack
            </div>
            <div className = {`${stylesButton.unstack}`} onClick={() => setActiveTab("2")}  background={activeTab ==="2" ? 'red' : ""}>
                    Unstack  
            </div>
          </div>
                    
      );
  }

export default StackUnstackBtn;
