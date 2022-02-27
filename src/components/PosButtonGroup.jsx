function PosButtonGroup(params) {
  return (
    <div class="d-grid gap-2">
      <button class="btn btn-outline-secondary" type="button">
        Fiyat Sorgula
      </button>
      <button class="btn btn-outline-secondary" type="button">
        Stok Bilgisi Sorgula
      </button>
      <hr />
      <button class="btn btn-danger" type="button">
        Sepeti İptal Et
      </button>
      <button class="btn btn-success" type="button">
        Sepeti Onayla
      </button>
    </div>
  );
}

export default PosButtonGroup;
