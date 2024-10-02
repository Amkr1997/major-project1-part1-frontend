import SortByCategories from "./SortByCategories";
import SortByHighLow from "./SortByHighLow";
import SortByPrice from "./SortByPrice";
import SortByRating from "./SortByRating";

const Filters = ({
  priceVal,
  handlePriceAction,
  sortByCategory,
  handleBookCategory,
  sortByRating,
  handleRating,
  sortByPrice,
  handlePriceSort,
  handleClearFilter,
}) => {
  return (
    <section className="container py-4">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between py-4">
          <h4>Filters</h4>
          <h4
            className="fw-normal"
            onClick={handleClearFilter}
            style={{ cursor: "pointer" }}
          >
            <u>Clear</u>
          </h4>
        </div>

        <SortByPrice
          priceVal={priceVal}
          handlePriceAction={handlePriceAction}
        />
        <SortByCategories
          sortByCategory={sortByCategory}
          handleBookCategory={handleBookCategory}
        />
        <SortByRating sortByRating={sortByRating} handleRating={handleRating} />
        <SortByHighLow
          sortByPrice={sortByPrice}
          handlePriceSort={handlePriceSort}
        />
      </div>
    </section>
  );
};

export default Filters;
