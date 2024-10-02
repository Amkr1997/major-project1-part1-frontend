const SortByPrice = ({ priceVal, handlePriceAction }) => {
  return (
    <div className="py-4">
      <h4 className="py-2">Price</h4>
      <div className="d-flex align-items-center justify-content-between">
        <span>299</span> <span>599</span> <span>899</span> <span>1199</span>
        <span>1499</span>
      </div>
      <input
        type="range"
        className="form-range"
        min="299"
        max="1499"
        step="300"
        id="customRange3"
        value={priceVal}
        onChange={handlePriceAction}
      />
    </div>
  );
};

export default SortByPrice;
