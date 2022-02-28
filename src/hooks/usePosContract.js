import { useState, useEffect } from "react";
import getWeb3 from "../utils/getWeb3";
import getContractInstance from "../utils/getContractInstance";
import posContract from "../contracts/Pos.json";

function usePosContract() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    handleContract();
  }, []);

  const handleContract = async () => {
    try {
      const _web3 = await getWeb3();
      const _accounts = await _web3.eth.getAccounts();
      const _contract = await getContractInstance(_web3, posContract);
      setWeb3(_web3);
      setAccounts(_accounts);
      setContract(_contract);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  return {
    web3,
    accounts,
    contract,
  };
}

export default usePosContract;
