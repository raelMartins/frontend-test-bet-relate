import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/home.module.scss';

const Home = () => {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //ON INITIAL RENDER OF THE SITE, CHECK IF A USER IS LOGGED IN
    //AND ADD THAT TO STATE
    //IF NO USER EXISTS TAKE THEM TO THE SIGNUP PAGE
    const activeUser = JSON.parse(localStorage.getItem('userBioData'));
    if (activeUser) {
      setCurrentUser(activeUser);
    } else {
      navigate('/signup');
    }
  }, []);

  const handleLogout = () => {
    //remove data from local storage then redirect user to sign up page
    localStorage.removeItem('userBioData');
    navigate('/signup');
  };

  return (
    <main className={styles.homePage}>
      {currentUser ? (
        <section className={styles.content}>
          {/* GREET THE USER WITH WHAT WE ASSUME TO BE THE FIRST NAME */}
          <h1>Hi {currentUser.fullName.split(' ')[0]}!</h1>
          <h3>You can view your details below</h3>
          <p>Full Name: {currentUser.fullName}</p>
          <p>Email: {currentUser.email}</p>
          <p>Username: {currentUser.userName}</p>
          <p>Phone Number: {currentUser.phoneNumber}</p>
          <p>Password: {currentUser.password}</p>
          <p>Gender: {currentUser.gender}</p>
          <p>Date Of Birth: {currentUser.dateOfBirth}</p>
          <button onClick={handleLogout}>Logout</button>
        </section>
      ) : (
        <h1>No User Detected</h1>
      )}
    </main>
  );
};

export default Home;
