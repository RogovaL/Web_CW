import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to={destination} className="btn-secondary flex items-center gap-2">
        <BsArrowLeft className="text-xl" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
