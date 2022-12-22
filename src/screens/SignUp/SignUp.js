import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./SignUp.css";

function SignUp() {
  return (
    <div className='vh-100 container-fluid '>
      <h2 className='createaccount'>Create an Account</h2>
      <p>Already have an account? <Link to='/signin'>Log In</Link> </p> 
    <div className='signup d-flex align-items-center justify-content-center '>
      
    <Form className='form_template'>
      <div className='firstfield'>
        <div className='w-100 anthfield' >
        <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label >First Name</Form.Label>
        <Form.Control type="text" placeholder="Type Here" className='inputfield' />

      </Form.Group>
        </div>

        <div className='w-100  anthfield'>
        <Form.Group className="mb-3   " controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Type Here"  className='inputfield'/>

      </Form.Group>
        </div>

      </div>
      

      <Form.Group className="mb-3  anthfield" controlId="formBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Type your email address here"  className='inputfield'/>
      </Form.Group>

      <Form.Group className="mb-3  anthfield" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='inputfield' />
      </Form.Group>


      
      <Button variant="primary" type="submit"  className='w-100 button'>
        Sign Up
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default SignUp;