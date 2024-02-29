import React from 'react';
import styles from './ForGetpassword.module.css';
import { formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
export default function ForGetpassword() {
  let validationSchema= Yup.object({
  
    email:Yup.string().required('Email is required').email('Enter a valid email'),
 
  
    })
   async function  sendCode( values){
let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,values)
console.log(data)
if( data.statusMsg =='success'){
  document.querySelector('.forgotpass').classList.add('d-none')
  document.querySelector('.verfilycode').classList.remove('d-none')

}

  }
  let formik=useFormik({
    initialValues:{
      email:''

    },validationSchema:validationSchema,
    onSubmit:sendCode
  })

  let validationSchema2= Yup.object({
  
    resetCode:Yup.string().required('Code is required').email('Enter a valid Code'),
 
  
    })
    let navigate =useNavigate()
  async function  sendData( values){
let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,values)
console.log(data)
if( data.status =='Success'){
navigate('/ResetCode')
}

  }
  let veryformik=useFormik({
    initialValues:{
      resetCode:''

    },validationSchema2:validationSchema2,
    onSubmit:sendData
  })
  return<>
   <div className='forgotpass'>
      <h4 className="text-main text-center my-5"> ForgetPassword:</h4>
   
    <form onSubmit={formik.handleSubmit} className="w-75 mx-auto my-5 container shadow">
    <div className="col-md-12">
            <label htmlFor="userEmail">Email</label>
            <input type="email"     onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} id='userEmail' name='email'  className='form-control' />
        
            {
              formik.errors.email && formik.touched.email?
              <p className='text-danger'> {formik.errors.email} </p>:''
            }  
<button type='Submit' disabled={!(formik.isValid&&formik.dirty)} className="btn bg-main text-light my-3 "> Send Code </button>
          </div>
          
    </form>
  </div>
   <div className='verfilycode d-none'>
  <h4 className="text-main text-center my-5"> verfilyCode:</h4>

<form onSubmit={veryformik.handleSubmit} className="w-75 mx-auto my-5 container shadow">
<div className="col-md-12">
        <label htmlFor="">Reset Code</label>
        <input type="text"     onBlur={veryformik.handleBlur} value={veryformik.values.resetCode} onChange={veryformik.handleChange} id='resetCode' name='resetCode'  className='form-control' />
    
        {
          veryformik.errors.resetCode && veryformik.touched.resetCode?
          <p className='text-danger'> {veryformik.errors.resetCode} </p>:''
        }  
<button type='Submit' disabled={!(veryformik.isValid&&veryformik.dirty)} className="btn bg-main text-light my-3 "> Send Code </button>
      </div>
      
</form>
</div></> 
 
}
