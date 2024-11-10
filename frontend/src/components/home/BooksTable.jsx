import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-4 text-left text-gray-600 font-medium">No</th>
            <th className="p-4 text-left text-gray-600 font-medium">Title</th>
            <th className="p-4 text-left text-gray-600 font-medium max-md:hidden">
              Author
            </th>
            <th className="p-4 text-left text-gray-600 font-medium max-md:hidden">
              Year
            </th>
            <th className="p-4 text-left text-gray-600 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4 font-medium">{book.title}</td>
              <td className="p-4 max-md:hidden">{book.author}</td>
              <td className="p-4 max-md:hidden">{book.publishYear}</td>
              <td className="p-4">
                <div className="flex gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
