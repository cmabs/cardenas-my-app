import styled from 'styled-components';
import React, { useState } from 'react';
import { Form } from "react-bootstrap";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #e9f5f9; /* Light blue background color */
`;
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem;
background-color: #fff;
border-radius: 0.5rem;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
`;
const Label = styled.label`
font-size: 1.2rem;
margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
font-size: 1.2rem;
padding: 0.5rem 2rem;
background-color: #2596be;
color: #fff;
border: none;
border-radius: 0.5rem;
cursor: pointer;
&:hover {
background-color:#7cc0d8; /* Lighter pink button color on hover */
}
`;

function LoginPage() {
      const fields = [
        { label: "Email", type: "email", placeholder: "Enter email" },
        { label: "Password", type: "password", placeholder: "Enter password" }
      ];
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
      };

    return (
    <Container>
        <StyledForm onSubmit={handleSubmit}>
           {fields.map((field) => (
              <Form.Group key={field.label} className="mb-3">
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.label === "Email" ? email : password}
                    onChange={(e) =>
                    field.label === "Email"
                    ? setEmail(e.target.value)
                    : setPassword(e.target.value)
                    }
                    />
                      </Form.Group>
                    ))}          
              <div>
                {email && <p>Your email: {email}</p>}
                {password && <p>Your password: {password}</p>}
              </div>
              <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
    </Container>


    );
  };

  export default LoginPage;
    