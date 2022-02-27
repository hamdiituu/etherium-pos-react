function PosProductItem(params) {
  return (
    <div className="mb-2">
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        style={{ borderRadius: 5 }}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Mavi Kot Pantalon</div>
          10 ₺
        </div>
        <div className="row col-1">
          <span className="badge bg-success rounded-pill fw-light">2 Adet</span>
          <button
            type="button"
            className="btn badge bg-danger  rounded-pill mt-2 fw-light"
          >
            Çıkar
          </button>
        </div>
      </li>
    </div>
  );
}

export default PosProductItem;
