import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList';
import UpdateContact from './UpdateContact';

function UserConatct() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<ContactList />}  ></Route>
        <Route path="/add" element={ <AddContact />} ></Route>
        <Route path="/update" element={ <UpdateContact />}></Route>
      </Routes>
    </div>
  )
}

export default UserConatct