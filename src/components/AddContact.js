import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function AddContact() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const navigate = useNavigate();
    // ************************   handle Input *******************************///
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case "id":
            setId(value);
            break;
          case "name":
            setName(value);
            break;
          case "email":
            setEmail(value);
            break;
          case "phone":
            setPhone(value);
            break;
          case "website":
            setWebsite(value);
            break;
          default:
            break;
        }
      }
    
    const handleSave = (e) => {
        e.preventDefault()
        const newContact = { id, name, email, phone, website };
        axios.post("https://jsonplaceholder.typicode.com/users/", newContact
        )
            .then(() => {
                alert("Contact  Added Successfully.");

                navigate("/");
            })
            .catch(() => {
                alert("Failed to add contact. Please try again later.");
              });
        setId(' ')
        setName(' ')
        setEmail(' ')
        setPhone(' ');
        setWebsite(' ')
    }

    return (
        <div
            className="modal show" style={{ display: 'block', position: 'initial' }}
        >
            <div className="App mt-3 mb-3" >
                <h1>Add Contact</h1>
                <Link to="/"><button className='btn btn-primary' >Home Page</button></Link>

            </div>
            <Modal.Dialog >
                <Modal.Header >
                    <Modal.Title className='text-primary'>Add Contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-group">
                        <label className='text-primary fw-bold'>I'd</label>
                        <input type="number" className="form-control mt-2 mb-3" value={id} onChange={handleChange} name="id" />
                    </div>
                    <div className="form-group">
                        <label className='text-primary fw-bold'>Name</label>
                        <input type="text" className="form-control mt-2 mb-3" value={name} onChange={handleChange} name="name" />
                    </div>
                    <div className="form-group">
                        <label className='text-primary fw-bold'>Email Id</label>
                        <input type="email" className="form-control mt-2 mb-3" value={email} onChange={handleChange} name="email" />
                    </div>
                    <div className="form-group">
                        <label className='text-primary fw-bold'>Phone</label>
                        <input type="tel" className="form-control mt-2 mb-3" value={phone} onChange={handleChange} name="phone" />
                    </div>
                    <div className="form-group">
                        <label className='text-primary fw-bold'>Website</label>
                        <input type="url" className="form-control mt-2 mb-3" value={website} onChange={handleChange} name="website" />
                    </div>
                    
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleSave}>
                        Add Contact
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default AddContact;