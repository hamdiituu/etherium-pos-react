import { Link } from "react-router-dom";

function NotFoundPage(params) {
  return (
    <div
      className="container"
      style={{ position: "absolute", left: "35%", top: "35%" }}
    >
      <div className="row">
        <div className="error-template">
          <h1>404!</h1>
          <h2>Böyle bir sayfa bulunmadı</h2>
          <div className="error-details">
            Üzgünüz, bir hata oluştu, İstenen sayfa bulunamadı!
            <br />
          </div>
          <div className="error-actions mt-4">
            <Link to={"/pos"} className="btn btn-outline-primary">
              <i className="icon-home icon-white"></i> Pos Ekranına Geri Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
