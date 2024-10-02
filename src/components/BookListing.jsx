import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import Loading from "../components/Loading";
const apiURL = `https://major-project-1-backend-gray.vercel.app/newBooks`;

const BookListing = ({
  openBooksCategory,
  priceVal,
  sortByCategory,
  sortByRating,
  sortByPrice,
}) => {
  const { data, loading } = useFetch(apiURL);
  const apiBooks = data;

  // Used for filtering the book page on the basis of categories or directly visiting books page.
  const filteredCategory =
    openBooksCategory !== ""
      ? apiBooks?.filter((book) => book.category === openBooksCategory)
      : apiBooks;

  // Used for adding price filters.
  const filteredByPrice = filteredCategory?.filter(
    (book) => book.price <= priceVal
  );

  // Used for filterations on the basis of categories or 'All'
  // 1.
  const genres = filteredByPrice?.filter((book) =>
    sortByCategory.includes(book.category)
  );

  // 2.
  const filterByCategory = !sortByCategory.includes("All")
    ? genres
    : filteredByPrice;

  // Used for filtering on the basis of Rating.
  const filterByRating = filterByCategory?.filter(
    (book) => book.rating >= sortByRating
  );

  // Used for filtering on the basis of Sorting (High or Low)
  const filterBySortPrices = filterByRating?.sort((a, b) => {
    if (sortByPrice === "lowToHigh") {
      return a.price - b.price;
    } else if (sortByPrice === "highToLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return data ? (
    <div className="container py-4">
      <div className="row">
        <h4 className="py-4">
          Showing All Products{" "}
          <small>
            (Showing {filterByRating.length}{" "}
            {filterByRating.length > 1 ? "Books" : "Book"})
          </small>
        </h4>
        {filterBySortPrices.map((book) => {
          return (
            <div key={book._id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card">
                <div className="card-header">
                  <img
                    src={book.imageUrl[0]}
                    className="img-thumbnail"
                    alt="book-image"
                    style={{ width: "800px", height: "250px" }}
                  />
                </div>
                <div className="card-body text-center">
                  <p className="fw-medium py-0">
                    {book.name.split(" ").slice(0, 4).join(" ")}
                  </p>
                  <h4>₹ {book.price}</h4>
                  <Link className="btn btn-primary btn-sm my-2" to={`/books`}>
                    Add To Cart
                  </Link>{" "}
                  <br />
                  <Link className="btn btn-info btn-sm my-2" to={`/books`}>
                    Add To WishList
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    loading && <Loading />
  );
};

export default BookListing;
