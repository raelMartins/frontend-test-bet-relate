import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/home.module.scss';

const Home = () => {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    //ON INITIAL RENDER OF THE SITE< FIRST CHECK IF A USER IS LOGGED IN
    //AND ADD THAT TO STATE
    const activeUser = JSON.parse(localStorage.getItem('userBioData'));

    //IF NO USER EXISTS TAKE THEM TO THE SIGNUP PAGE
    if (activeUser) {
      setCurrentUser(activeUser);
    } else {
      navigate('/signup');
    }
  }, []);
  return <h1>Home</h1>;
};

export default Home;
