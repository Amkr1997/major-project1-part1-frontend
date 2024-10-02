import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ books, openBooksCategory, setOpenBooksCategory }) => {
  const uniqueCategories = books.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  const navigate = useNavigate(); // Using this I learned from internet for this project.

  const handleBookPage = (category) => {
    setOpenBooksCategory(category);
  };

  // Took some reference online, How to take help of useEffect for this project.
  useEffect(() => {
    if (openBooksCategory) {
      navigate(`/books`, { state: { openBooksCategory: openBooksCategory } });
    }
  }, [openBooksCategory, setOpenBooksCategory]);

  return (
    <div className="container pt-4 pb-2">
      <div className="row">
        {Object.keys(uniqueCategories).map((category, index) => {
          return (
            <div
              key={index}
              className="col-md-3 py-4"
              to={"/books"}
              style={{ textDecoration: "none", cursor: "pointer" }}
              onClick={() => handleBookPage(category)}
            >
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">{category}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
