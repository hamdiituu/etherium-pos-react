import usePosContract from "../hooks/usePosContract";

function ContractTestHookPage(props) {
  const { web3, accounts, contract } = usePosContract();

  const getConnectionMessage = async () => {
    const response = await contract.methods.getConnectionMessage().call();
    console.log(response);
  };

  const setConnectionMessage = async () => {
    try {
      await contract.methods
        .setConnectionMessage("Merhaba Dünya!")
        .send({ from: accounts[0] });
      console.log("işlem başarılı!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="alert-success mt-3">
        <h4>Contract Hooks Test Page</h4>
      </div>
      <button className="btn btn-success" onClick={getConnectionMessage}>
        getConnectionMessage
      </button>

      <button className="btn btn-success" onClick={setConnectionMessage}>
        setConnectionMessage
      </button>
    </div>
  );
}

export default ContractTestHookPage;
