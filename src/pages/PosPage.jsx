import {
  BarcodeSearchBar,
  PosButtonGroup,
  PosProductListWrapper,
  PosCart,
} from "../components";

function PosPage() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-9 ">
          <BarcodeSearchBar />
          <PosProductListWrapper />
          <PosCart />
        </div>
        <div className="col-3">
          <PosButtonGroup />
        </div>
      </div>
    </div>
  );
}

export default PosPage;
