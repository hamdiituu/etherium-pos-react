function PosButtonGroup(params) {
  return (
    <div className="d-grid gap-2">
      <button className="btn btn-outline-secondary" type="button">
        Fiyat Sorgula
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Stok Bilgisi Sorgula
      </button>
      <hr />
      <button className="btn btn-danger" type="button">
        Sepeti İptal Et
      </button>
      <button className="btn btn-success" type="button">
        Sepeti Onayla
      </button>
    </div>
  );
}

export default PosButtonGroup;
