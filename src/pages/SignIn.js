import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import styled from 'styled-components';
import { Form, Input, Title, Text, Button, Label } from "../components/Form.js";



export const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; 

  // console.log(watch("example")); // you can watch individual input by pass the name of the input
  return (
    <div>
    <Title>Form</Title>
    <Form onSubmit={e => e.preventDefault()}>
      
        <Label >Email *</Label>
        <Input

          {...register("email", {
            required: "Email please",
         
            message: "You type wrong email.did your forgot your email?",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
        />
 {errors.email && <p>{errors.email.message }</p>}
 {errors?.email?.type === "pattern" && (
        <p>Please enter a valid email</p>
      )}

      
      <Label>Password *</Label>
      <Input
        
        {...register( "password",{
          required: "Password please",
          minLength: {
            value: 8,
            message: "You type wrong Password.did You Forgot Your password?"
          }
        })}
      />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" onClick={handleSubmit(onSubmit)}>
                  <Link to="/profile">Submit</Link>
              </button>
      
    
    </Form>
      
    </div>
  );
};
