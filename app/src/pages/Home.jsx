import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startGettingAllUsers } from '../actions/user.action';
import Navbar from '../components/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGettingAllUsers());
  }, [dispatch]);

  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default Home;
