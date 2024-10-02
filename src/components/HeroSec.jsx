import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    <>
      <section className="container text-center py-5">
        <img
          src="https://placehold.co/1282x470?text=BOOKS"
          alt="book image"
          className="img-fluid"
        />
      </section>

      <section className="container mb-5">
        <div className="row">
          <Link
            className="col-md-6 mb-4"
            to={"/books"}
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-between">
                <img
                  src="https://placehold.co/100x100"
                  className="img-thumbnail"
                  alt=""
                />
                <div>
                  <p>New Arivals</p>
                  <h3>Book Collection</h3>
                  <p>
                    Check Our newest collection of books, Launched this month
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            className="col-md-6"
            to={"/books"}
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <div className="card-body d-flex align-items-center justify-content-between">
                <img
                  src="https://placehold.co/100x100"
                  className="img-thumbnail"
                  alt=""
                />
                <div>
                  <p>New Arivals</p>
                  <h3>Book Collection</h3>
                  <p>
                    Check Our newest collection of books, Launched this month
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSec;
