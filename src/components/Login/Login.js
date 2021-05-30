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
  
         const url = 'https://limitless-beyond-48550.herokuapp.com/addUsers';
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
           <div className="d-flex justify-content-center">
           <div className="pt-3 mb-3 pb-3">
                <svg width="260" height="32" viewBox="0 0 260 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M60.5949 11.8312H38.61L37.7954 12.4402V31.9945H43.8814V24.6617L44.4623 24.1413H60.5957C64.6692 24.1413 66.579 23.0455 66.579 20.2339V15.7441C66.5782 12.9278 64.6692 11.8312 60.5949 11.8312ZM60.5949 19.0605C60.5949 20.3851 59.7184 20.6603 57.8087 20.6603H44.529L43.8806 20.0301V15.8413L44.4615 15.3098H57.8087C59.7184 15.3098 60.5949 15.5818 60.5949 16.9128V19.0605Z" fill="#005288" />
                        <path d="M77.6768 15.5301L82.9138 23.2015L82.6237 23.9445H71.0421L68.0857 27.5808H85.3253L86.52 28.3082L89.1965 31.9992H96.1613L80.895 11.5811" fill="#005288" />
                        <path d="M146.931 28.0275V22.6003L147.557 22.0594H159.208V18.6035H140.742V31.9984H167.982V28.559H147.584" fill="#005288" />
                        <path d="M168.27 11.8312H140.742V15.6312H168.27V11.8312Z" fill="#005288" />
                        <path d="M110.039 15.4297H132.216C131.875 12.6103 130.125 11.828 125.686 11.828H109.803C104.795 11.828 103.197 12.8055 103.197 16.5953V27.228C103.197 31.0218 104.795 31.9992 109.803 31.9992H125.686C130.19 31.9992 131.915 31.1534 132.032 28.229H110.039L109.387 27.6152V15.8405" fill="#005288" />
                        <path d="M22.9963 19.6883H6.86295L6.38787 19.1655V15.7151L6.8606 15.3498H28.6096L28.9067 14.6232C28.1659 12.7177 26.2475 11.8288 22.6851 11.8288H7.57715C2.57149 11.8288 0.971397 12.8063 0.971397 16.5961V18.8253C0.971397 22.6199 2.57149 23.5957 7.57715 23.5957H23.6745L24.1801 24.0394V27.6466L23.7678 28.2094H5.35459V28.1921H0.531588C0.531588 28.1921 -0.0203295 28.4688 0.000837798 28.5982C0.412424 31.2491 2.2187 32 6.54309 32H22.9963C28.0012 32 29.6491 31.0226 29.6491 27.2288V24.4517C29.6491 20.6642 28.0012 19.6883 22.9963 19.6883Z" fill="#005288" />
                        <path d="M185.586 11.7481H176.53L176.039 12.6832L186.096 20.0128C188.001 18.91 190.074 17.7922 192.328 16.6894" fill="#005288" />
                        <path d="M193.7 25.5553L202.54 32H211.706L212.085 31.1464L198.886 21.4872C197.133 22.7735 195.401 24.1319 193.7 25.5553Z" fill="#005288" />
                        <path d="M184.238 31.9851H176.045L175.353 30.9011C180.924 25.5232 205.84 2.46986 260 0C260 0 214.54 1.53318 184.238 31.9851Z" fill="#A7A9AC" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="260" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
           </div>

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