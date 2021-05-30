import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };


const [userName, setUserName] = useState("");
const [userEmail, setUserEmail] = useState("");
const [gender, setGender] = useState("");

const handleUserName = (event) => {
    const name = event;
    setUserName(name);
}; 
const handleEmail = (event) => {
    const name = event;
    setUserEmail(name);
}; 
const handleUserGender = (event) => {
    const gender = event;
    setGender(gender);
}; 


    const handleUsers = () => {
        const userDetails = {
            userName: userName,
            userEmail: userEmail,
            gender: gender,
           
        };
        const signedInUser = {...loggedInUser ,...userDetails} 
        setLoggedInUser(signedInUser);
  
         const url = 'http://localhost:5500/addUsers';
        // console.log(orderData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => console.log('server side response', res))
        
        console.log(userDetails);
            history.push('/dashboard');
    }
    return (
        <Container className="p-5">
        <div className="pt-5 pb-5 mb-3">
            <h1>Please Sign Up Here</h1>
        </div>
        <Form className="mr-3 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onBlur={(event) => handleUserName(event.target.value)} type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={(event) => handleEmail(event.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Control onBlur={(event) => handleUserGender(event.target.value)} type="text" placeholder="Enter Your Gender" />
            </Form.Group>
             <Button onClick={handleUsers} variant="outline-info">Sign Up</Button>{' '}
        </Form>
    </Container>
    );
};

export default Login;