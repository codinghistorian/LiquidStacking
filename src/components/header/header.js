import stylesHeader from "./header.module.css";

function Header() {  
      return (
          <div>
            <div className = {`${stylesHeader.Header}`}>
            Liquid Stacking on STX     
            </div>
            <div className = {`${stylesHeader.BabyHead}`}>
                Stack STX and receive stSTX while stacking      
            </div>
          </div>
                    
      );
  }

export default Header;
