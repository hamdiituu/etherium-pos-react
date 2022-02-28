import { useState, useEffect } from "react";

import getWeb3 from "../utils/getWeb3";
import getContractInstance from "../utils/getContractInstance";
import posContract from "../contracts/Pos.json";

function ContractTestPage(params) {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

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

  useEffect(() => {
    handleContract();
  }, []);

  return (
    <div className="container">
      <div className="alert-success mt-3">
        <h4>Contract Test Area</h4>
      </div>
    </div>
  );
}

export default ContractTestPage;
