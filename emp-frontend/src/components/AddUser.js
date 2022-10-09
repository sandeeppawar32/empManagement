import React, {useState, useContext } from 'react';
import { GobalContext } from "../contextAPI/GobalState";
import {userSchema} from '../formValidation/userValidation';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { 
  Form,
  FormGroup,
  Label,
  Input,
  Button
 } from "reactstrap";
 

 import { Link, useNavigate } from "react-router-dom";

export const AddUser = () => {
  let navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    age: "",
    email: "",
    prid: uuidv4()
});
  const addNewUser = async (event) => {
    event.preventDefault();
    const isValid = await userSchema.isValid(selectedUser)
    if(isValid){
      const addNewUserRes = await axios.post('http://localhost:8000/addEmp', selectedUser);
      navigate("/")
    } 
  }
  
  const handleOnChange = (userKey, newValue) => {
     setSelectedUser({ ...selectedUser, [userKey]: newValue });
  }


  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Enter Emploee Name</Label>
          <Input
            value={selectedUser.name}
            onChange={(e) => handleOnChange("name", e.target.value)}
            type="text"
            required= {true} 
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter Emploee Age</Label>
          <Input
            value={selectedUser.age}
            onChange={(e) => handleOnChange("age", e.target.value)}
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter Emploee Email Address</Label>
          <Input
            value={selectedUser.email}
            onChange={(e) => handleOnChange("email", e.target.value)}
            type="text"
            required
          />
        </FormGroup>
      </Form>
      <Button type='submit' onClick ={addNewUser} style={{marginTop: "1rem"}}> Add User</Button>
      <Link to="/" style={{marginLeft: "1rem"}}>Cancel</Link>
    </div>
  )
}
