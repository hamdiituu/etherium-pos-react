import { Link } from "react-router-dom";

function NotFoundPage(params) {
  return (
    <div
      class="container"
      style={{ position: "absolute", left: "35%", top: "35%" }}
    >
      <div class="row">
        <div class="error-template">
          <h1>404!</h1>
          <h2>Böyle bir sayfa bulunmadı</h2>
          <div class="error-details">
            Üzgünüz, bir hata oluştu, İstenen sayfa bulunamadı!
            <br />
          </div>
          <div class="error-actions mt-4">
            <Link to={"/pos"} class="btn btn-outline-primary">
              <i class="icon-home icon-white"></i> Pos Ekranına Geri Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
