import stylesButton from "./stackUnstackBtn.module.css";

function StackUnstackBtn({ activeTab, setActiveTab }) {
  return (
    <div className={`${stylesButton.btn}`}>
      <div
        className={`${stylesButton.stack}`}
        onClick={() => setActiveTab("1")}
        style={{ backgroundColor: activeTab === "1" ? '' : 'transparent' }}
      >
        Stack
      </div>
      <div
        className={`${stylesButton.unstack}`}
        onClick={() => setActiveTab("2")}
        style={{ backgroundColor: activeTab === "2" ? '' : 'transparent' }}
      >
        Unstack
      </div>
    </div>
  );
}

export default StackUnstackBtn;
