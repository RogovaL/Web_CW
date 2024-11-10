import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card group">
      <div className="flex justify-between items-start">
        <h4 className="text-gray-400 text-sm">{book._id}</h4>
        <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-lg font-medium">
          {book.publishYear}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-x-2">
          <PiBookOpenTextLight className="text-orange-500 text-2xl" />
          <h2 className="font-semibold">{book.title}</h2>
        </div>
        <div className="flex items-center gap-x-2">
          <BiUserCircle className="text-orange-500 text-2xl" />
          <h2 className="text-gray-700">{book.author}</h2>
        </div>
      </div>

      <div className="flex justify-end items-center gap-x-3 mt-8 group-hover:opacity-100 opacity-0 transition-opacity duration-200">
        <button
          onClick={() => setShowModal(true)}
          className="p-2 hover:bg-orange-100 rounded-full transition-colors"
        >
          <BiShow className="text-2xl text-orange-600" />
        </button>

        <Link
          to={`/books/details/${book._id}`}
          className="p-2 hover:bg-green-100 rounded-full transition-colors"
        >
          <BsInfoCircle className="text-xl text-green-600" />
        </Link>

        <Link
          to={`/books/edit/${book._id}`}
          className="p-2 hover:bg-yellow-100 rounded-full transition-colors"
        >
          <AiOutlineEdit className="text-xl text-yellow-600" />
        </Link>

        <Link
          to={`/books/delete/${book._id}`}
          className="p-2 hover:bg-red-100 rounded-full transition-colors"
        >
          <MdOutlineDelete className="text-xl text-red-600" />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
