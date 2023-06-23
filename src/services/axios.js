import axios from "axios";
import Address from "../constants/Address";

export const getBalance = async (address) => {
  try {
    const res = await axios.get(Address.TESTNET_ACCOUNT_URL + address);
    if (res.status == 200) {
      return parseInt(res.data.balance, 16);  // hexadecimal to decimal
    }
    else {
      console.log(res.statusText);
      return;
    }
  }
  catch (err) {
    console.error(err);
  }
}

