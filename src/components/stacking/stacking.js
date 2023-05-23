import StackUnstackBtn from "./stackUnstackBtn/stackUnstackBtn";
import Container from "./container/container";
import stylesStacking from "./stacking.module.css";
import {useState} from "react"

function Stacking() {  
  const [activeTab, setActiveTab] = useState('1');

      return (
        <div className = {`${stylesStacking.container}`}> 
                <div><StackUnstackBtn activeTab={activeTab} setActiveTab={setActiveTab} /></div>
                <div><Container activeTab={activeTab} /></div>
                {/* <div className={`${stylesDotMenu.dropdown} ${stylesDotMenu.dropbtn}` }   */}
        </div>
      );
  }

export default Stacking;
