import { SideBar } from ".";
function PanelLayout(props) {
  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">{props.children}</div>
    </div>
  );
}

export default PanelLayout;
