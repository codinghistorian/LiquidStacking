//2024 Jan 24th Tue

// I need to make stackSTX button to send a tx to the StackedSTX contract on testnet
//with post conditions.
//Not still sure how to use the value in input box to be included in the
//function arg. Need to look at some other codes


//2023 Jan 26th Thur
// somehow line below is causing erroor
// import { BigNum } from 'bn.js';


import {
  FungibleConditionCode,
  makeStandardSTXPostCondition,
  makeContractSTXPostCondition,
} from '@stacks/transactions';

import {openContractCall} from '@stacks/connect';

import { StacksMainnet, StacksTestnet, StacksMocknet } from '@stacks/network';


// With a standard principal
// my Hiro account address, later should change to address of connected wallet
const postConditionAddress = 'ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4';
const postConditionCode = FungibleConditionCode.Less;
const postConditionAmount = 500000000;

const standardSTXPostCondition = makeStandardSTXPostCondition(
  postConditionAddress,
  postConditionCode,
  postConditionAmount
);

const functionArgs = [
  // new BigNum(1000)
  // '1000'
]
const network = new StacksTestnet();

const assetAddress = 'ST32XWNSBQ77DHYAD0CN57FQ1THTYPSEFV08HWGE4';

const options = {
  contractAddress: assetAddress,
  contractName: 'StackedSTX',
  functionName: 'stack',
  functionArgs,
  network,
  standardSTXPostCondition,
  appDetails: {
    name: 'Liquid Stacking',
    icon: '',
  },
  onFinish: (data) => {
    console.log(data)
  },
}


export const stackSTX = async () => {
  console.log("Button Clicked");  
  await openContractCall(options);
  console.log("TX sent");
}
