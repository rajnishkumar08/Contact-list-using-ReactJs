import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../api/contactList";
import { BsFillPersonVcardFill, BsXCircleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import Button from 'react-bootstrap/Button';



function ContactList() {
  const [post, setPost] = useState([]);

  function getContactList() {
    api.get("/users").then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }
  useEffect(() => {
    getContactList();
  }, []);

  function handleUpdate(id, name, email, phone, website,address,company) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("website", website)
    localStorage.setItem("address", address)
    localStorage.setItem("company", company)
  }


  function handleDelete(id) {
    api.delete(`/users/${id}`).then((response) => {
      console.log('Delete Contact', response.data);
    });
  }
  return (
    <>

      <div className="App mt-3 mb-3" >
        <h1 >Contact List</h1>
        <Link to="/add"><button className="btn btn-primary mx-auto" >Add Contact</button></Link>
      </div>


      <div className="container mt-4 mb-5">
        <div className="user-gallery">
          {post.map((post, i) => {

            return (

              <div className="pic place" key={i}>
                <div className=' p-2 mt-5'>
                  <span className="text-danger ms-4"><BsFillPersonVcardFill className="display-3" /></span>
                  <span className='id card-header h2 text-red'>{post.id}</span>
                  <div className='float-end shadow-sm me-2'>

                    <Link to="/update"> <Button variant='me-3'><FaPen className='icon' onClick={() => { handleUpdate(post.id, post.name, post.email, post.phone, post.website,post.address,post.company) }} /></Button></Link>
                    <Button variant='me-3' > <BsXCircleFill className='icon' onClick={() => { if (window.confirm(`Are you want to sure contact delete ${post.id}`)) { handleDelete(post.id) } }} />  </Button>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-10 ">
                      <h5 className="mt-2  mb-2 ">Name : {post.name}</h5>
                      <h5 className="mt-2  mb-2 ">Email Id : {post.email}</h5>
                      <h5 className="mt-2  mb-2 ">Address : {post.address.city}</h5>
                      <h5 className="mt-2  mb-2 ">Phone : {post.phone}</h5>
                      <h5 className="mt-2  mb-2 ">Website : {post.website}</h5>
                      <h5 className="mt-2  mb-2 ">Company : {post.company.name}</h5>
                     
                    </div>

                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>

  );
}

export default ContactList;
