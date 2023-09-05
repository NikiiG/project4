import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default class SignUpForm extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
  
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);      
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='register'style={{ backgroundImage: 'url("https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&w=800")', backgroundSize: 'cover',height: '100vh'}}>
        <div>
          <form className='row justify-content-center mt-5' autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className="m-2"style={{fontsize:"35px"}}>Sign Up</h2>
           
            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} placeholder='name'required />
            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="E-mail"/>
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required placeholder="Password"/>
            <input type="password"className="form-control" name="confirm" value={this.state.confirm} onChange={this.handleChange} required placeholder="Confirm Password"/>
            <a href="/" className="btn mt-3 mb-3" onClick={this.handleSubmit}>SIGN UP</a>
            <Link to="/login" className=' m-4' style={{color:'black'}}>Click Here To Login</Link>
            

            </div>
        
          

          </form>
          </div>
       
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}