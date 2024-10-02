const SortByHighLow = ({ sortByPrice, handlePriceSort }) => {
  return (
    <div className="py-4">
      <h4 className="py-2">Sort By</h4>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name="highToLow"
          value={"lowToHigh"}
          checked={sortByPrice === "lowToHigh"}
          onChange={handlePriceSort}
        />
        <label className="form-check-label">Price Low to High</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name="highToLow"
          value={"highToLow"}
          checked={sortByPrice === "highToLow"}
          onChange={handlePriceSort}
        />
        <label className="form-check-label">Price High to Low</label>
      </div>
    </div>
  );
};

export default SortByHighLow;
