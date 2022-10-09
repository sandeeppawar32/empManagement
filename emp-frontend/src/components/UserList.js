import {React, useContext, useEffect} from 'react';
import { ListGroup, ListGroupItem, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { GobalContext } from "../contextAPI/GobalState";
import axios from "axios";

export const UserList = () => {
    const {user, initalEmployee} = useContext(GobalContext); 
    async function getUserInfoHandler(){
        const allUser = await axios.get('http://localhost:8000/getEmpDetail');
        initalEmployee(allUser.data)
    }
    useEffect(() => {
        getUserInfoHandler();
      }, []);
     const deleteUserDetail = async (prid) => {
        await axios.delete(`http://localhost:8000/deleteEmp/${prid}`);
        const result = []
        user.forEach(el => {
            if(el.emp_prid != prid){
                result.push(el);
            };
            
        })
        initalEmployee(result)
     }; 
      const result = [];
      if(user.length > 0) {
        user.map((el, i) => {
            result.push(<ListGroupItem key={i}> 
                <div  style={{display: "flex"}}>
                    <Label>Emp name = </Label>
                    <strong style={{marginLeft:'1rem'}}> {el.emp_name} </strong>
                    <Label style={{marginLeft:'1rem'}}>Emp Email = </Label>
                    <strong style={{marginLeft:'1rem'}}> {el.emp_address} </strong>
                    <div style={{flex:1,marginLeft:'1rem'}}> 
                        <Link style={{marginLeft:'1rem'}} to={`/edit/${el.emp_prid}`} >edit</Link>
                        <Button style={{marginLeft:'1rem'}}onClick={()=> deleteUserDetail(el.emp_prid)} >Delete</Button>
                    </div>
                </div>
            </ListGroupItem>)
        })
      }
      
  return (
   <ListGroup>
      {result}  
   </ListGroup>  
  )
}
