import { showConnect } from '@stacks/connect';
import { userSession } from './userSession';

export const connectWallet = () => {  
  const myAppName = 'My Stacks Web-App'; // shown in wallet pop-up
  const myAppIcon = window.location.origin + '/STX.png'; // shown in wallet pop-up

  showConnect({
    userSession,
    appDetails: {
      name: myAppName,
      icon: myAppIcon,
    },
    onFinish: () => {
      window.location.reload(); // WHEN user confirms pop-up
    },
    onCancel: () => {
      console.log('Connect canceled'); // WHEN user cancels/closes pop-up
    },
  });
}

export const disconnectWallet = () => {
  if (userSession) {
    userSession.signUserOut()
    window.location.reload()
  }
}