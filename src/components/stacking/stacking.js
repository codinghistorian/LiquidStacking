import StackUnstackBtn from "./stackUnstackBtn/stackUnstackBtn";
import Container from "./container/container";
import stylesStacking from "./stacking.module.css";
function Stacking() {  
      return (
        <div className = {`${stylesStacking.container}`}> 
                <div><StackUnstackBtn /></div>
                <div><Container /></div>
                {/* <div className={`${stylesDotMenu.dropdown} ${stylesDotMenu.dropbtn}` }   */}
        </div>
      );
  }

export default Stacking;
