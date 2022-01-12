import React from 'react';
import './Create.css';
import axios from 'axios';

export default class Create extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        userEmail: '',
        phoneNumber: '',
        addressLine1: '',
        city:'',
        state:'',
        zip:''
      }
    
      handleChange=(event) => {
        this.setState({ 
          [event.target.name]: event.target.value,
        });
      };
      //once the form is submitted, an object is created. The values on the left should match the name.   
      handleSubmit = event => {
        event.preventDefault()
        let aUser ={
          first_name : this.state.firstName,
          last_name : this.state.lastName,
          username : this.state.userName,
          password : this.state.password,
          email : this.state.userEmail,
        }
        //The object we created is then passed into a function where we post the new user to the user
          this.addNewUser(aUser)
      };
      
      async addNewUser(newUser){
        await axios.post
      }
    
        const user = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          password: this.state.password,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          address: this.state.address
        };
        
    
        axios.post(`https://localhost:44394/api/authentication`, 
        { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        

      }
    
    


render(){
return (
        
        
            <div>
                
               
                
                <center><h3>Create New User</h3></center>
                    <form onSubmit={this.handleSubmit}>
                    <center><label for="firstName">Enter First Name:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="lastName">Enter Last Name:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="userName">Enter User Name:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="Password">Create Password:</label><input type="password" onChange={this.handleChange}></input></center>
                    <center><label for="Email">Enter Email Address:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="phoneNumber">Enter Phone Number:</label><input type="text" onChange={this.handleChange}></input></center>
                    <center><label for="address">Enter Address:</label><input type="type" onChange={this.handleChange}></input></center>
                    <center><input type="submit" /></center>
                    </form>
                   
            </div>
        
    )
}    

}