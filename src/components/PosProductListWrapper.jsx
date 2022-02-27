import { PosProductItem } from ".";

function PosProductListWrapper(params) {
  const divStyle = {
    height: 400,
  };
  return (
    <>
      <hr />
      <div className="overflow-auto" style={divStyle}>
        <PosProductItem />
        <PosProductItem />
        <PosProductItem />
      </div>
    </>
  );
}

export default PosProductListWrapper;
