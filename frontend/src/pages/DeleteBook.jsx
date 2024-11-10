import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <BackButton />
      <h1 className="text-3xl font-bold my-8 text-gray-800">Delete Book</h1>
      {loading && <Spinner />}
      <div className="card text-center">
        <div className="mb-8">
          <span className="inline-block p-3 bg-red-100 text-red-600 rounded-full mb-4">
            <MdOutlineDelete className="text-3xl" />
          </span>
          <h3 className="text-xl font-semibold text-gray-800">
            Are you sure you want to delete this book?
          </h3>
          <p className="text-gray-600 mt-2">This action cannot be undone.</p>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="btn-danger" onClick={handleDeleteBook}>
            Yes, Delete
          </button>
          <Link to="/" className="btn-secondary">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
