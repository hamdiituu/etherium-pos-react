function BarcodeSearchBar(params) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Ürün Barkodunu Giriniz"
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        id="button-addon2"
      >
        Ürünü Getir
      </button>
    </div>
  );
}

export default BarcodeSearchBar;
