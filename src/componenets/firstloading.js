import React, { Component, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import img from "../sadsad.jpg";
import "../App.css";
const Container = styled.div`
  background-image: url(${img});
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 5px;
  padding: 18px 12px 0;
  border-radius: 6px;
  width: 100%;
`;
const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 15px;
  padding: 15px 32px;
  text-align: center;
  text-decaration: none;
  display: flex;
  fontsize: 16px;
  width: 50%;
  background-color: #4caf50;
  margin-top: 5px;
  bpx-shadow: 5 9px #999;
`;

const LınePageSıte = () => {
  const [data, setData] = useState([{}]);
  const handleData = (e) => {
    e.preventDefault();

    setData([
      {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.Password.value,
      },
    ]);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleData}>
          <Input
            required
            name="email"
            type="email"
            placeholder="Email..."
          ></Input>
          <Input
            required
            name="username"
            type="text"
            placeholder="Username..."
          ></Input>
          <Input
            required
            name="Password"
            type="password"
            placeholder="Password..."
          ></Input>
          <div>
            {" "}
            <Button>Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default LınePageSıte;
