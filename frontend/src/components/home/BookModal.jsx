import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black/50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    > 
      <div
        onClick={(event) => event.stopPropagation()}
        className='card w-[600px] max-w-full max-h-[90vh] overflow-auto'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-gray-400 hover:text-gray-600 cursor-pointer transition-colors'
          onClick={onClose}
        />
        <h2 className='inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-lg font-medium'>
          {book.publishYear}
        </h2>
        <h4 className='mt-4 text-gray-400 text-sm'>{book._id}</h4>
        <div className='flex items-center gap-x-2 mt-4'>
          <PiBookOpenTextLight className='text-orange-500 text-2xl' />
          <h2 className='text-xl font-semibold'>{book.title}</h2>
        </div>
        <div className='flex items-center gap-x-2 mt-2'>
          <BiUserCircle className='text-orange-500 text-2xl' />
          <h2 className='text-lg'>{book.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
