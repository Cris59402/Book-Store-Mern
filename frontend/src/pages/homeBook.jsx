import React from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle, BsInfoCirlce} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'; 
import BookTable from '../components/home/BookTable';
import BookCards from '../components/home/BookCards';

function homeBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([false]);
  //call la backend cu axios
  useEffect(() => {
     setLoading(true);
     axios
        .get('http://localhost:5173./books')
        .then((response) => {
          setBooks(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-content items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
        onClick={() => setShowType('table')}>
          Table

        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
        onClick={() => setShowType('card')}>
          Card

        </button>
      </div>
      <div className='flex justify-between item-center'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/books/create'>
           <MdOutlineAddBox className='text-sky-800-4xl' />
        </Link>
        {loading ? 
          <Spinner />  :  ShowType === 'table' ? (
            <BookTable books={books} /> ) : (<BookCards books={books} />)         
        }
      </div>
    </div>
  )
}

export default homeBook