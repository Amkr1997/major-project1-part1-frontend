import { useLocation } from "react-router-dom";
import BookListing from "../components/BookListing";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Books = () => {
  const [priceVal, setPriceVal] = useState(1499);
  const [sortByCategory, setSortByCategory] = useState(["All"]);
  const [sortByRating, setSortByRating] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

  const location = useLocation(); // this I learned online for this project.
  const { state } = location;
  const { openBooksCategory = "" } = state || {}; // For this I also took reference online.

  const handlePriceAction = (e) => {
    setPriceVal(e.target.value);
  };

  const handleBookCategory = (e) => {
    const { checked, value } = e.target;

    checked
      ? value === "All"
        ? setSortByCategory(["All"])
        : setSortByCategory((prev) => [
            ...prev.filter((book) => book !== "All"),
            value,
          ])
      : setSortByCategory((prev) =>
          prev.filter((category) => category !== value)
        );
  };

  const handleRating = (e) => {
    setSortByRating(e.target.value);
  };

  const handlePriceSort = (e) => {
    setSortByPrice(e.target.value);
  };

  const handleClearFilter = () => {
    setPriceVal(1499);
    setSortByCategory(["All"]);
    setSortByRating(null);
    setSortByPrice(null);
  };

  return (
    <>
      <Navbar />
      <section className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-lg-3">
            <Filters
              priceVal={priceVal}
              handlePriceAction={handlePriceAction}
              sortByCategory={sortByCategory}
              handleBookCategory={handleBookCategory}
              sortByRating={sortByRating}
              handleRating={handleRating}
              sortByPrice={sortByPrice}
              handlePriceSort={handlePriceSort}
              handleClearFilter={handleClearFilter}
            />
          </div>

          <div className="col-sm-8 col-lg-9">
            <BookListing
              priceVal={priceVal}
              sortByCategory={sortByCategory}
              openBooksCategory={openBooksCategory}
              sortByRating={sortByRating}
              sortByPrice={sortByPrice}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
