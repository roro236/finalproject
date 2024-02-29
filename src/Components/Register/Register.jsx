import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Signup() {

  let naviagte = useNavigate();
  const [isLoading, setLoading]= useState(false);
  const[errMsg, setErr] =useState(null);
  let validationSchema= Yup.object({
  name:Yup.string().min(3, 'min length is  3').max(15, 'max length is 15').required('This name is required'),
  email:Yup.string().required('Email is required').email('Enter a valid email'),
  phone:Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/,'Phone is required'),
  password:Yup.string().required('This password is required').matches(/^[A-Z][a-z0-9]{6,8}$/),
  rePassword:Yup.string().required('This is confirm password is required').oneOf([Yup.ref('password')])

  })
  async function signUp(values)
  {
    setLoading(true);
   let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', 
   values).catch((error)=>{
    console.log(error.response.data.message)
    setErr(error.response.data.message);
    setLoading(false);
   });
   
    console.log(data);
    if(data.message == 'success'){
      naviagte('/Login');
      setLoading(false);
    }
 
  }
  let formik =useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },
    onSubmit:signUp,
    validationSchema:validationSchema
    

  })

  return (
    <div className='my-4'>
      <h1 className='text-main my-3'>Register Form</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className='row gy-3 m-auto w-75 bg-light shadow p-1'>
          <div className="col-md-12 ">
            <label htmlFor="userName">Name</label>
            <input type="text" id='userName' name='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} className='form-control' />
            {
              formik.errors.name && formik.touched.name?
              <p className='text-danger'> {formik.errors.name} </p>:''
            }         
          </div>
          <div className="col-md-12">
            <label htmlFor="userEmail">Email</label>
            <input type="email" id='userEmail' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control' />
            {
              formik.errors.email && formik.touched.email?
              <p className='text-danger'> {formik.errors.email} </p>:''
            }  
          </div>
          <div className="col-md-12">
            <label htmlFor="userPhone">Phone</label>
            <input type="tel" id='userPhone' name='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' />
            {
              formik.errors.phone && formik.touched.phone?
              <p className='text-danger'> {formik.errors.phone} </p>:''
            }  
          </div>
          <div className="col-md-12">
            <label htmlFor="userPassword">Password</label>
            <input type="password" id='userPassword' name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' />
            {
              formik.errors.password && formik.touched.password?
              <p className='text-danger'> {formik.errors.password} </p>:''
            }  
          </div>
          <div className="col-md-12">
            <label htmlFor="userConfirm">rePassword</label>
            <input type="password" id='userConfirm' name='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' />
            {
              formik.errors.rePassword && formik.touched.rePassword?
              <p className='text-danger'> {formik.errors.rePassword} </p>:''
            }  
          </div>
          { errMsg !==null?
            <p className=' text-danger'>
            {errMsg}
          </p>:''

            }
          <div className="col-md-12 text-end my-3">
            <button disabled={!(formik.isValid && formik.dirty)} type='submit' className=' btn bg-main text-light'>Register  
            { isLoading?
            <span>
            <i className='mx-2 text-light fa-solid fa-spinner fa-spin'></i>
          </span>:''

            }
            </button>
           
          </div>
          <p className='text-muted'>I have account  <Link to="/Login" className='text-main px-2 fw-bold'>Login</Link></p>
         

        </div>
      </form>
    </div>
  )
}
