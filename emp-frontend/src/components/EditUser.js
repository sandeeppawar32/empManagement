import React, { useContext, useEffect, useState } from 'react';
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GobalContext } from "../contextAPI/GobalState";
import axios from 'axios';

export const EditUser = () => {
  let currentEmp = {}
  const currentUserId = useParams().id;
  let navigate = useNavigate();
  const { user, editCurrentEmp } = useContext(GobalContext);
  user.forEach(el => {
    if (el.emp_prid == currentUserId){
      currentEmp =  el;
    } 
  });
  const [editUserDetail, setEdituserDetail] = useState(currentEmp);
  const editUserDetails = async (event) => {
    event.preventDefault();
    const editUserRes = await axios.put(`http://localhost:8000/updateEmp/${currentUserId}`, editUserDetail);
    editCurrentEmp(currentEmp);
    navigate("/")
  };

  const handleOnChange = (userKey, newValue) => {
    setEdituserDetail({ ...editUserDetail, [userKey]: newValue });
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Enter Emploee Name</Label>
          <Input
            type='text'
            name='empName'
            placeholder='enter name'
            value={editUserDetail.emp_name}
            onChange={(e) => handleOnChange("emp_name", e.target.value)}
            required />
        </FormGroup>
        <FormGroup>
          <Label>Enter Emploee Email Address</Label>
          <Input type='email' 
          name='empEmail' 
          placeholder='enter email address' 
          value={editUserDetail.emp_address} 
          onChange={(e) => handleOnChange("emp_address", e.target.value)}
          required 
          />
        </FormGroup>
        </Form>
      <Button type='submit' onClick={editUserDetails} style={{ marginTop: "1rem" }}>Edit Emp Details</Button>
      <Link to='/' style={{ marginLeft: "1rem" }} >Cancel</Link>
    </div>
  )
}
