function PosProductItem(params) {
  return (
    <div className="mb-2">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        style={{ borderRadius: 5 }}
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">Mavi Kot Pantalon</div>
          10 ₺
        </div>
        <div class="row col-1">
          <span class="badge bg-success rounded-pill fw-light">2 Adet</span>
          <button
            type="button"
            class="btn badge bg-danger  rounded-pill mt-2 fw-light"
          >
            Çıkar
          </button>
        </div>
      </li>
    </div>
  );
}

export default PosProductItem;
