import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "../SignUp/SignUp.css";

function SignIn() {
  return (
    <div className='vh-100'>
      <h2 className='createaccount'>Log In</h2>
      <p>If you have no account, <a href='#'>Sign Up</a> </p> 
    <div className='signup d-flex align-items-center justify-content-center '>
      
    <Form className='form_template'>
      
      

      <Form.Group className="mb-3  anthfield" controlId="formBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Type your email address here"  className='inputfield'/>
      </Form.Group>

      <Form.Group className="mb-3  anthfield" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='inputfield' />
      </Form.Group>


      
      <Button variant="primary" type="submit"  className='w-100 button'>
        <Link to="/dashboard">Log In</Link>
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default SignIn;