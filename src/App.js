import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from 'pages/Signup';
import Home from 'pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
