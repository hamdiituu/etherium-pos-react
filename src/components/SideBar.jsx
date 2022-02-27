import { useLocation, Link } from "react-router-dom";

function SideBar(params) {
  const { pathname } = useLocation();

  const routes = [
    {
      label: "Dashboard",
      pathname: "/panel",
    },
    {
      label: "Ürün Yönetimi",
      pathname: "/panel/urun",
    },
  ];

  return (
    <div className="mt-3 ms-2">
      <ul className="list-group list-group-flush">
        {routes.map((route, index) => (
          <Link
            key={index}
            className={`list-group-item ${
              pathname === route.pathname && "active"
            }`}
            to={route.pathname}
          >
            {route.label}
          </Link>
        ))}
        {/* <li className="list-group-item active">Dahboard</li>
        <li className="list-group-item">Ürün</li>
        <li className="list-group-item">Stok</li>
        <li className="list-group-item">Fiyatlandırma</li>
        <li className="list-group-item">Satış Raporları</li> */}
      </ul>
    </div>
  );
}

export default SideBar;
