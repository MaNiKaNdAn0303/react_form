import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Table, Button} from 'semantic-ui-react';
import { API_URL } from '../Const/URL';
import '../css/erase.css';
import {useNavigate} from 'react-router-dom';

function Erase() {

const [apiData, setAPIData] = useState([]);
const navigate = useNavigate();

const updateUser =(firstName,lastName,emailID,userName,passWord,phoneNumber,address, city,zipCode,checked,id) =>{
 localStorage.setItem('ID', id) 
 localStorage.setItem('firstName', firstName) 
 localStorage.setItem('lastName', lastName) 
 localStorage.setItem('emailID', emailID) 
 localStorage.setItem('userName', userName) 
 localStorage.setItem('passWord', passWord) 
 localStorage.setItem('phoneNumber', phoneNumber) 
 localStorage.setItem('address', address) 
 localStorage.setItem('city', city) 
 localStorage.setItem('zipCode', zipCode) 
 localStorage.setItem('checked', checked) 
 navigate('/update')
}

const deleteUser = async (id) =>{
  await axios.delete(API_URL + id)
  callGetAPI();
}

 const callGetAPI = async () => {
  const resp = await axios.get(API_URL);
  setAPIData(resp.data)
   }

   useEffect(() => {
     callGetAPI();
  }, []);

  return (
    <>
 <Table singleLine className='erasebg'>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>First Name</Table.HeaderCell>
      <Table.HeaderCell>Last Name</Table.HeaderCell>
      <Table.HeaderCell>Email ID</Table.HeaderCell>
      <Table.HeaderCell>User Name</Table.HeaderCell>
      <Table.HeaderCell>PassWord</Table.HeaderCell>
      <Table.HeaderCell>Phone Number</Table.HeaderCell>
      <Table.HeaderCell>Address</Table.HeaderCell>
      <Table.HeaderCell>City</Table.HeaderCell>
      <Table.HeaderCell>ZipCode</Table.HeaderCell>
      <Table.HeaderCell>Checked</Table.HeaderCell>
      <Table.HeaderCell>Delete</Table.HeaderCell>
      <Table.HeaderCell>Update</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>

     {
      apiData.map( data => (
        <Table.Row key={data.id}>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        <Table.Cell>{data.emailID}</Table.Cell>
        <Table.Cell>{data.userName}</Table.Cell>
        <Table.Cell>{data.passWord}</Table.Cell>
        <Table.Cell>{data.phoneNumber}</Table.Cell>
        <Table.Cell>{data.address}</Table.Cell>
        <Table.Cell>{data.city}</Table.Cell>
        <Table.Cell>{data.zipCode}</Table.Cell>
        <Table.Cell>{data.checked ? 'Checked' : 'Not Checked'}</Table.Cell>
        <Table.Cell><Button className='buttuon btn btn-danger' onClick={()=>
        deleteUser(data.id)}>Delete</Button></Table.Cell>
         <Table.Cell><Button className='buttun btn btn-success' onClick={()=>
        updateUser(data.id)}>Update</Button></Table.Cell>
      </Table.Row>
      ))
    } 
   
  </Table.Body>
 </Table>
    </>
  )
}

export default Erase;