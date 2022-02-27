import { SideBar } from ".";
function PanelLayout({ childern }) {
  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">{childern}</div>
    </div>
  );
}

export default PanelLayout;
