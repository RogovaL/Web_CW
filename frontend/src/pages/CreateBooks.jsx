import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
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
      <h1 className="text-3xl font-bold my-8 text-gray-800">Create Book</h1>
      {loading && <Spinner />}
      <div className="card space-y-6">
        <div>
          <label className="text-gray-600 font-medium block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium block mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input-field"
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium block mb-2">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="input-field"
            placeholder="Enter publish year"
          />
        </div>

        <button className="btn-primary w-full" onClick={handleSaveBook}>
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
