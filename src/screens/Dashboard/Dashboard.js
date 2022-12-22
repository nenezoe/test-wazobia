import { Link } from "react-router-dom";
import "./Dashboard.css";



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function TheModal(props) {
    // let departments = this.props.state.departments;
    // let optionItems = departments.map((department) =>
    //         <option key={department._id}>{department.name}</option>
    //     );
    console.log('New props run', props.departmentId);
    
  
  
    return (
      < >
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='whole-modal'    
        >
          
          <Modal.Header closeB    utton >
            <Modal.Title>Create Item</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form onSubmit={props.HandleSubmit} className='modal-content'>
            
            
                  <Form.Group className="mb-3" >
                <Form.Label> Name</Form.Label>
                <Form.Control
                  type="text"
                  id='firstName'
                  placeholder="Input item name here"
                  autoFocus
                  value={props.firstName}
                  onChange={(e) => props.setFirstName(e.target.value)}
                />
              </Form.Group>
                
                
              <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add Note</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Type Here" />
            </Form.Group>
                

  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => props.onHide()}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={(e) => props.HandleSubmit(e)}>
              Create Event
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }






const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div className="dashboard">
            <div className="topdashboard"> you have not verified your email address. Click <Link to="#">here</Link> to resend verification link</div>
            <div className="topdashboard2"><h5>Dashboard</h5><div>John Jones</div></div>

            <TheModal
        show={showModal}
        onHide={setShowModal}
        // email={email}
        // setEmail={setEmail}
        // setFirstName={setFirstName}
        // firstName={firstName}
       
      
        
      />

            <div className="allcards">
                <div className="card col-lg-4 col-md-6 col-sm-12">
                    <div>Name</div>
                    <h5>Item 1</h5>
                    <div>Description</div>
                    <div className="content">rrkgthkythlklrklggrtmk vbvvkkltrmbklmtlkmgt jtmklmltrkhmg jmngktrhl4 kmnll;kkgktlgkht;rrlkgh;t jlm4likghhoitho jkngtrl</div>
                    <div className='twobbtns'><button className="btnbtn1" onClick={setShowModal}>Edit</button>  <button className="btnbtn2">Delete</button></div>
                </div>
                <div></div>
                <div></div>
            </div>


            <div className="icon"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 0C15.4512 0.0669441 10.1486 2.30093 6.22478 6.22478C2.30093 10.1486 0.0669441 15.4512 0 21C0.0669441 26.5488 2.30093 31.8514 6.22478 35.7752C10.1486 39.6991 15.4512 41.9331 21 42C26.5488 41.9331 31.8514 39.6991 35.7752 35.7752C39.6991 31.8514 41.9331 26.5488 42 21C41.9331 15.4512 39.6991 10.1486 35.7752 6.22478C31.8514 2.30093 26.5488 0.0669441 21 0ZM33 22.5H22.5V33H19.5V22.5H9V19.5H19.5V9H22.5V19.5H33V22.5Z" fill="#004CBD"/>
</svg></div>
        </div>
    )
}

export default Dashboard;