const SortByCategories = ({ sortByCategory, handleBookCategory }) => {
  return (
    <div className="py-4">
      <h4 className="py-2">Category</h4>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={"All"}
          checked={sortByCategory.includes("All")}
          onChange={handleBookCategory}
        />
        <label className="form-check-label">All</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={"Fiction"}
          checked={sortByCategory.includes("Fiction")}
          onChange={handleBookCategory}
        />
        <label className="form-check-label">Fiction</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={"Self Help"}
          checked={sortByCategory.includes("Self Help")}
          onChange={handleBookCategory}
        />
        <label className="form-check-label">Self Help</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={"Historical"}
          checked={sortByCategory.includes("Historical")}
          onChange={handleBookCategory}
        />
        <label className="form-check-label">Historical</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={"Biography"}
          checked={sortByCategory.includes("Biography")}
          onChange={handleBookCategory}
        />
        <label className="form-check-label">Biography</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={"Entrepreneurship"}
          checked={sortByCategory.includes("Entrepreneurship")}
          onChange={handleBookCategory}
        />
        <label className="form-check-label">Entrepreneurship</label>
      </div>
    </div>
  );
};

export default SortByCategories;
