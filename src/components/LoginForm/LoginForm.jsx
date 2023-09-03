import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
       navigate("/");
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='login' style={{ backgroundImage: 'url("https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&w=800")', backgroundSize: 'cover',height: '100vh'}}>
     <div >
        <form className='row justify-content-center mt-5'autoComplete="off" onSubmit={handleSubmit}>
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className="m-2"style={{fontsize:"35px"}}>Log In</h2>
            <input type="text"className="form-control" name="email" value={credentials.email} onChange={handleChange} required placeholder='E-mail'/>
            <input type="password"className="form-control" name="password" value={credentials.password} onChange={handleChange} required placeholder='Password'/>
          
            <button type="submit" className="btn mt-3 mb-3" >Log In</button>
            <Link to="/createuser" className='m-4'style={{color:'black'}}>I'm a New User</Link>
            </div>
            
            
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}