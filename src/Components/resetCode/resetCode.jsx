import React from 'react';
// import styles from './ResetCode.module.css';
import {  useFormik } from 'formik';
import axios  from 'axios';

import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
export default function ResetCode() {
  let validationSchema= Yup.object({
  
    
    password:Yup.string().required('This password is required').matches(/^[A-Z][a-z0-9]{6,8}$/),
   
  
    })
 async function ResetPassword(values){
  let navigate= useNavigate()
    let {data}= await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,values)
    console.log(data)
    if(data.data.token){
      navigate('/Login')
    }
  }
  let formik = useFormik({
    initialValues:{
      email:'',
      newPassword:''

    },
    validationSchema:validationSchema,
    onSubmit: ResetPassword
  })
  return (<div>
    <h1 className='text-main my-3'>ResetPassword</h1>
    <form onSubmit={formik.handleSubmit} className='w-75 my-5 m-auto'>
    <div className='row gy-3 m-auto w-75 bg-light shadow p-1 container'>
    <label>Email:</label>
      {/* <iput type='email' className='form-control'id='email'value={email}></iput> */}
      <input type="email"     onBlur={formik.handleBlur} value={formik.values.email}
       onChange={formik.handleChange} id='userEmail' name='email'  className='form-control' />
      <div className="col-md-12">
            <label htmlFor="Password"> Reset Password</label>
            <input type="password" id='password' name='password' value={formik.values.password} onBlur={formik.handleBlur}
             onChange={formik.handleChange} className='form-control' />
     
            {
              formik.errors.password && formik.touched.password?
              <p className='text-danger'> {formik.errors.password} </p>:''
            }  
          </div>
     
     
      {/* <label>New Password:</label> 
      <iput type='password'   onBlur={formik.handleBlur} 
      value={formik.values.newPassword} onChange={formik.handleChange}  className='form-control my'id='password'></iput> */}
    <button type='Submit'  disabled={!(formik.isValid&&formik.dirty)}  className='btn text-light bg-main my-3'>ResetPassword</button>
      
    </div>
      
      
      
      </form>
      {/*  */}
  </div>)
}
