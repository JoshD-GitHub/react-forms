import { useState } from "react";

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        body: JSON.stringify(username, password),
        header: {
        'Content-Type':'application/json'
      }});
      const data = await response.json();
      console.log(data);
      setToken(data.token);
      setSuccessMessage(data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{''} <input value={username} onChange={(event) => {
            setUsername(event.target.value)
          }} minLength={8} required />
        </label>
        <label>
          Password:{''} <input value={password} onChange={(event) => {
            setPassword(event.target.value)
          }} minLength={8} required />
        </label>
        <button>Submit</button>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SignUpForm;
