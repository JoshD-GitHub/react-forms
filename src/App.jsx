import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenitcate';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
};

export default App;
