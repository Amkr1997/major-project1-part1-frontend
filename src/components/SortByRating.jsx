const SortByRating = ({ sortByRating, handleRating }) => {
  return (
    <div className="py-4">
      <h4 className="py-2">Rating</h4>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name="rating"
          value="4"
          checked={sortByRating === "4"}
          onChange={handleRating}
        />
        <label className="form-check-label">4 Stars and above</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name="rating"
          value="3"
          checked={sortByRating === "3"}
          onChange={handleRating}
        />
        <label className="form-check-label">3 Stars and above</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name="rating"
          value="2"
          checked={sortByRating === "2"}
          onChange={handleRating}
        />
        <label className="form-check-label">2 Stars and above</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name="rating"
          value="1"
          checked={sortByRating === "1"}
          onChange={handleRating}
        />
        <label className="form-check-label">1 Stars and above</label>
      </div>
    </div>
  );
};

export default SortByRating;
