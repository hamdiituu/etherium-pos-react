import { SideBar } from "../components";

function ProductPanelPage(params) {
  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <h1>Product Panel Page</h1>
      </div>
    </div>
  );
}

export default ProductPanelPage;
