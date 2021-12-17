import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/signup.module.scss';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState('');

  let navigate = useNavigate();
  useEffect(() => {
    //ON INITIAL RENDER OF THE SITE FIRST CHECK IF A USER IS LOGGED IN
    const activeUser = JSON.parse(localStorage.getItem('userBioData'));

    //IF USER EXISTS TAKE THEM TO THE HOME PAGE
    if (activeUser) navigate('/');
  }, []);
  return (
    <main className={styles.signup}>
      <div className={styles.logo}>
        <img src="/images/bet-relate-logo.webp" alt="Site Logo" />
      </div>
      <div className={styles.content}>
        <section className={styles.formSection}>
          <h1>Join Us Now</h1>
          <h5>Please provide the following information to signup</h5>
          <form autoComplete="off">
            <input
              autocomplete="false"
              name="hidden"
              type="text"
              style={{ display: 'none' }}
            />

            <div className={styles.formField}>
              <label>Full Name</label>
              <input type="text" placeholder="eg. John Doe" />
            </div>
            <div className={styles.formField}>
              <label>Email</label>
              <input type="text" placeholder="eg. johndoe@example.com" />
            </div>
            <div className={styles.formField}>
              <label>Username</label>
              <input
                type="text"
                placeholder="eg. Johndoe123"
                autoComplete="username"
              />
            </div>
            <div className={styles.formField}>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="eg. 10827994090"
                autoComplete="phonenumber"
              />
            </div>
            <div className={styles.formField}>
              <label>Password</label>
              <input
                type="password"
                placeholder="******"
                autoComplete="current-password"
              />
            </div>
            <div style={{ display: 'flex' }}>
              <span
                className={styles.formField}
                style={{ marginRight: '1.7rem' }}
              >
                <label>Gender</label>
                <select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </span>
              <span
                className={styles.formField}
                style={{ marginLeft: '1.7rem' }}
              >
                <label>Date Of Birth</label>
                <input type="text" placeholder="DD/MM/YYYY" />
              </span>
            </div>
            <button className={styles.signUpButton}>Signup</button>
            <p style={{ color: '#452461' }}>
              Already have an account <span>Login</span>
            </p>
            <p>Or</p>
            <button className={styles.facebookButton}>
              <img src="/svgs/facebookicon.svg" alt="Facebook Icon" />
              Continue with Facebook
            </button>
            <button className={styles.googleButton}>
              <img src="/svgs/googleicon.svg" alt="Google Icon" />
              Continue with Google
            </button>
          </form>
        </section>
        <section className={styles.imageSection}>
          <img src="/images/bet-relate-img.webp" alt="Poker Man" />
        </section>
      </div>
    </main>
  );
};

export default Signup;
