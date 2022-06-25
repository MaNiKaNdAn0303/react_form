import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { API_URL } from '../Const/URL';
import axios from 'axios';

function Update() {
  const [id, setID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailID, setEmailID] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const updateUser = async (id) =>{

    await axios.put(API_URL , {
      firstName,
      lastName,
      emailID,
      userName,
      password,
      phoneNumber,
      address,
      city,
      zipCode,
      checked
    })
    navigate('/erase');
  }

  useEffect (() =>{
    setID(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setEmailID(localStorage.getItem('emailID'))
    setUserName(localStorage.getItem('userName'))
    setPassword(localStorage.getItem('passWord'))
    setPhoneNumber(localStorage.getItem('phoneNumber'))
    setAddress(localStorage.getItem('address'))
    setCity(localStorage.getItem('city'))
    setzipCode(localStorage.getItem('zipCode'))
    setChecked(localStorage.getItem('checked'))
  
  }, [])
  return (
    <>
     <div className=" mt-20 bg-teal-600 text-gray-300">

<form class="container-md row g-3">
<div class="col-md-6">
 <label for="inputFirstname" class="form-label">First Name</label>
 <input type="firstname" value={firstName} 
 onChange={event => setFirstName (event.target.value)} class="form-control" id="inputFirstname"/>
</div>
<div class="col-md-6">
 <label for="inputLastname" class="form-label">Last Name</label>
 <input type="lastname" value={lastName}
 onChange={event => setLastName (event.target.value)} class="form-control" id="inputLastname"/>
</div>
<div class="col-md-6">
 <label for="inputEmail4" class="form-label">Email</label>
 <input type="email" value={emailID}
 onChange={event => setEmailID (event.target.value)} class="form-control" id="inputEmail4"/>
</div>
<div class="col-md-6">
 <label for="inputPassword4" class="form-label">Password</label>
 <input type="password" value={password}
 onChange={event => setPassword (event.target.value)} class="form-control" id="inputPassword4"/>
</div>
<div class="col-md-6">
 <label for="inputUsername" class="form-label">User Name</label>
 <input type="username" value={userName}
 onChange={event => setUserName (event.target.value)} class="form-control" id="inputUsername"/>
</div>
<div class="col-md-6">
 <label for="inputPhonenumber" class="form-label">Phone number</label>
 <input type="phonenumber" value={phoneNumber}
 onChange={event => setPhoneNumber (event.target.value)} placeholder="+91 123456789" class="form-control" id="inputPhonenumber"/>
</div>
<div class="col-12">
 <label for="inputAddress" class="form-label">Address</label>
 <input type="text" value={address} 
 onChange={event => setAddress (event.target.value)}class="form-control" id="inputAddress" placeholder="1234 Main St"/>
</div>

<div class="col-md-6">
 <label for="inputCity" class="form-label">City</label>
 <input type="text" value={city}
 onChange={event => setCity (event.target.value)} class="form-control" id="inputCity"/>
</div>

<div class="col-md-2">
 <label for="inputZip" class="form-label">Zip</label>
 <input type="text" value={zipCode}
 onChange={event => setzipCode (event.target.value)} class="form-control" id="inputZip"/>
</div>
<div class="col-12">
 <div class="form-check">
   <input class="form-check-input" value={checked}
   onChange={() => setChecked (!checked)} type="checkbox" id="gridCheck"/>
   <label  class="form-check-label" for="gridCheck">
     Check me out
   </label>
 </div>
</div>
<div class="col-12">
 <button type="submit" onClick={updateUser} class="btn submit btn-primary">UPDATE</button>
</div>
</form>
</div></>
  )
}

export default Update