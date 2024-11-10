import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 mb-8">
        <button
          className={`btn-secondary ${
            showType === "table" ? "bg-orange-500 text-white" : ""
          }`}
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className={`btn-secondary ${
            showType === "card" ? "bg-orange-500 text-white" : ""
          }`}
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Books List</h1>
        <Link
          to="/books/create"
          className="btn-primary flex items-center gap-2"
        >
          <MdOutlineAddBox className="text-xl" />
          Add Book
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
