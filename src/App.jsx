import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Category from "./components/Category";
import HeroSec from "./components/HeroSec";
import { useState } from "react";
import useFetch from "./useFetch";
import Loading from "./components/Loading";
const apiURL = `https://major-project-1-backend-gray.vercel.app/newBooks`;

const App = () => {
  const [openBooksCategory, setOpenBooksCategory] = useState("");
  const { data, loading } = useFetch(apiURL);
  const apiBooks = data;

  return apiBooks ? (
    <>
      <Navbar />
      <Category
        books={apiBooks}
        openBooksCategory={openBooksCategory}
        setOpenBooksCategory={setOpenBooksCategory}
      />
      <HeroSec />
    </>
  ) : (
    loading && <Loading />
  );
};

export default App;
