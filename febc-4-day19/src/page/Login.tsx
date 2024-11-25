import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();

  const [bmi, setBMI] = useState<number>();

  
  

  const onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const onChangePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };


  const onSubmitBMI = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
  

    const bmi = weightNum / (heightNum * heightNum);
    setBMI(bmi)//SetState!!!!!!!!!!
    console.log("BMI:", bmi.toFixed(2));
};
  /*
const obj = {
  event:{
   target:{
     value: "abbad"
   }}
}
*/
const onSubmit = (event:React.ChangeEvent<HTMLInputElement>) =>{
  event.preventDefault(); // to prevent form submission
  console.log("Username:", username);
  console.log("Password:", password);
  


  //setUsername("");
  //setPassword("");  // reset form fields after submission
 // fetch("/api/login", {
}


  return (
    <>
    
      {/* <Form></Form> */}
      
      
    </>
  );
}

export default Login;
