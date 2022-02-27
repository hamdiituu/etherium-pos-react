function PosCart(params) {
  const divStyle = {
    position: "absolute",
    bottom: 10,
    height: 80,
    width: 300,
    borderRadius: 5,
  };

  return (
    <div style={divStyle} className="bg-warning">
      <h3 className="fw-lighter mt-1 mx-4">Ödenecek Tutar </h3>
      <h3 className="fw-light mx-4">100 ₺</h3>
    </div>
  );
}

export default PosCart;
