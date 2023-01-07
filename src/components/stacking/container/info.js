import stylesInfo from "./info.module.css";


function Info() {  
      return (
          <div className = {`${stylesInfo.containerOut}`}>
            <div className = {`${stylesInfo.containerIn}`}>
              <div className = {`${stylesInfo.leftCol}`}>
                You will receive
              </div>
              <div className = {`${stylesInfo.rightCol}`}>
                0 stSTX
              </div>  
            </div>
            <div className = {`${stylesInfo.containerIn}`}>
              <div className = {`${stylesInfo.leftCol}`}>
                Exchange Rate
              </div>
              <div className = {`${stylesInfo.rightCol}`}>
                1 STX = 0.9505 stSTX
              </div>  
            </div>
            <div className = {`${stylesInfo.containerIn}`}>
              <div className = {`${stylesInfo.leftCol}`}>
                Annual percentage rate
              </div>
              <div className = {`${stylesInfo.rightCol}`}>
                6.3%
              </div>  
            </div>
          </div>
                    
      );
  }

export default Info;
