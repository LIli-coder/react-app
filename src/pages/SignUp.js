import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import styled from 'styled-components';
import { Form, Input, Title, Text, Button, Label } from "../components/Form.js";



export const SignUp = () => {
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
      <Label>First Name *</Label>
      <Input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <Label>Last Name *</Label>
      <Input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "pattern" && (
       <p>Alphabetical characters only</p>
      )}
              <Label >Email *</Label>
              <Input

                  {...register("email", {
                      required: "Email is Required",

                      message: "Invalid email address",
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              {errors?.email?.type === "pattern" && (
                  <p>Please enter a valid email</p>
              )}
      <Label>BirthDay *</Label>
      <Input
            type="date"
            name="BirthDay"
            {...register("birtDay" ,{
            required: "Birthday is required",
           })}
       
          />
      
          {errors.birtDay && errors.birtDay.message}
     
      
      <Label>Password *</Label>
      <Input
        
        {...register( "password",{
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
          {errors.password && <p>{errors.password.message}</p>}
     
      <Label>Repeat password *</Label>
      <Input
       
        {...register( "repeatPassword" ,{
          required: "please repeat the password",
          validate: (value) => value === password.current || "The passwords do not match",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
              <button type="submit" onClick={handleSubmit(onSubmit)}>
                  <Link to="/signin">Submit</Link>
              </button>
      {/* <Link to="/signin" className="btn btn-primary" >Submit</Link>    */}
              
          
    </Form>
      
    </div>
  );
};
