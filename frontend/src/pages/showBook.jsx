import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

function showBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  return (
    <div></div>
  )
}

export default showBook