import stylesInfo from "./info.module.css";
import React, { useEffect, useState } from 'react';
import { StacksTestnet } from '@stacks/network';
import { StacksTransaction } from '@stacks/transactions';

const Info = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const address = 'ST2Q5692JTHAYGNVFG8EM0CEM9SXFJ963CD3BVVDW';
    const network = new StacksTestnet();

    const fetchBalance = async () => {
      try {
        const account = await network.getAccount(address);
        const balance = account.balance.toString();
        setBalance(balance);
      } catch (error) {
        console.error('Error retrieving balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className={`${stylesInfo.containerOut}`}>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>
          Current STX balance
        </div>
        <div className={`${stylesInfo.rightCol}`}>
          {balance !== null ? `${balance} STX` : 'Loading balance...'}
        </div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>
          You will receive
        </div>
        <div className={`${stylesInfo.rightCol}`}>
          0 stSTX
        </div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>
          Exchange Rate
        </div>
        <div className={`${stylesInfo.rightCol}`}>
          1 STX = 0.9505 stSTX
        </div>
      </div>
      <div className={`${stylesInfo.containerIn}`}>
        <div className={`${stylesInfo.leftCol}`}>
          Annual percentage rate
        </div>
        <div className={`${stylesInfo.rightCol}`}>
          6.3%
        </div>
      </div>
    </div>
  );
};

export default Info;
