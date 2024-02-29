
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';
// // import { NavLink, useNavigate } from 'react-router-dom';

// // export default function Login() {
// //   const [ isLoading ,setLoading] = useState(false)
// //   const [errMsg,setErr]=useState(null)
// //   const navigate = useNavigate();



// //   let validationSchema= Yup.object({
// //     email:Yup.string().required('Email is required').email('Enter a valid email'),
// //     password:Yup.string().required('This password is required').matches(/^[A-Z][a-z0-9]{6,8}$/),
// //     })
// //   async function Login( values) 
// //   {
// //     setLoading (true);

// //    let { data}=  await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',
// //    values).catch((err)=>{
// //     console.log(err.response.data.message)
// //     setErr(err.response.data.message);
// //     setLoading (false);
// //   });
// //     console.log(data)
// //     if(data.message=='success'){
// //       navigate('/Home');
// //       setLoading (false);

    
// //     }

// //   }
// //  let formik = useFormik({
// //   initialValues:{
  
// //     email:'',
// //     password:'',

// //   },

// // onSubmit:Login,
// //  validationSchema:validationSchema,
// //   })
// //   return (
   
// //     <div>
// //       <h1 className=' fw-b  text-main text-center
// //       '> Login Form</h1>
// //        <form action="" onSubmit={formik.handleSubmit}>
// //         <div className='row  '>
// //        <div className="col-md-8  m-auto w-75 bg-light shadow p-4">
// //         <div className="row gy-4">
        
// //           <div className='col-md-12'>
// //             <label htmlFor='userEmail'>Email</label>
// //             <input type="text"   onBlur={formik.handleBlur} value={formik.values.email}   onChange={formik.handleChange} id="userEmail" name='email' className='form-control'  />
// //             {formik.errors.email&& formik.touched.email ?  <p className='text-danger'>{formik.errors.email}</p>:''}
// //           </div> 
         

// //           <div className='col-md-12'>
// //             <label htmlFor='userPassword'>Password</label>
// //             <input type="password"  onBlur={formik.handleBlur} value={formik.values.password}  onChange={formik.handleChange}  id="userPassword" name='password' className='form-control'  />
// //             {formik.errors.password&& formik.touched.password ?  <p className='text-danger'>{formik.errors.password}</p>:''}
// //           </div> 
       
// //           {errMsg !== null? <p className='text-danger'>{errMsg}</p>:''}
// //           <div className='col-md-12 py-4 text-end'>
// //           <button  disabled={!(formik.isValid&& formik.dirty)} type=' submit' className='btn bg-main text-light mx-2'>
// //           Login  {isLoading?<span><i className='fa-solid fa-spinner fa-spin'></i></span>:'' }</button>

// //           </div>
// //           <p> I have account<NavLink to="/Register" className=' text-main '>Register</NavLink> </p>
// //         </div>
// //        </div>
    
// //         </div>
      
// //       </form>
// //     </div>
// //   )


// import React from 'react'
// import axios from 'axios';
// import { useFormik } from 'formik'
//  import  {  useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// import { userContext } from '../../context/TokenContext';

// export default function Signin() {

//   let {userToken,setToken} = userContext(userContext)
 
//   let naviagte = useNavigate();
//   const [isLoading, setLoading]= useState(false);
//   const[errMsg, setErr] =useState(null);
//   let validationSchema= Yup.object({
  
//   email:Yup.string().required('Email is required').email('Enter a valid email'),
//   password:Yup.string().
//   required('This password is required').matches(/^[A-Z][a-z0-9]{6,8}$/),
 

//   })
//   async function signIn(values)
//   {
//     setLoading(true);
//    let {data} = await axios.post
//    ('https://ecommerce.routemisr.com/api/v1/auth/signin', 
//    values).catch((error)=>{
//     console.log(error.response.data.message)
//     setErr(error.response.data.message);
//     setLoading(false);
//    });
   
//     console.log(data);
//     if(data.message == 'success'){
//       setLoading(false);
//       naviagte('/Products');
//       console.log("zajha home")
//       setToken(data.token)
//       console.log(userToken)
//       localStorage.setItem('userToken', data.token)
//     }

//   }
//   let formik =useFormik({
//     initialValues:{
//       email:'',
//       password:''
//     },
//     onSubmit:signIn,
//     validationSchema:validationSchema
    

//   })

//   return (
//     <div className='my-4'>
//       <h1 className='text-main my-3'>Login Form</h1>
//       <form action="" onSubmit={formik.handleSubmit}>
//         <div className='row gy-3 m-auto w-75 bg-light shadow p-1'>
         
//           <div className="col-md-12">
//             <label htmlFor="userEmail">Email</label>
//             <input type="email" id='userEmail' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control' />
//             {
//               formik.errors.email && formik.touched.email?
//               <p className='text-danger'> {formik.errors.email} </p>:''
//             }  
//           </div>
        
//           <div className="col-md-12">
//             <label htmlFor="userPassword">Password</label>
//             <input type="password" id='userPassword' name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' />
//             {
//               formik.errors.password && formik.touched.password?
//               <p className='text-danger'> {formik.errors.password} </p>:''
//             }  
//           </div>
          
//           { errMsg !==null?
//             <p className=' text-danger'>
//             {errMsg}
//           </p>:''

//             }
//           <div className="col-md-12 text-end my-3">
//             <button disabled={!(formik.isValid && formik.dirty)} type='submit' className=' btn bg-main text-light'>Login  
//             { isLoading?
//             <span>
//             <i className='mx-2 text-light fa-solid fa-spinner fa-spin'></i>
//           </span>:''

//             }
//             </button>
      
//           </div>
//           <p className='text-muted'>Don't have an account  <Link to="/signup" className='text-main px-2 fw-bold'>Register</Link></p>
         

//         </div>
//       </form>
//     </div>
//   )
 
// }
//  import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import Home from '../Home/Home';
import UserContextProvider, { userContext } from '../../context/TokenContext';

export default function Signin() {
  

  let {userToken, setToken} = useContext(userContext);
  
  let naviagte = useNavigate();
  const [isLoading, setLoading]= useState(false);
  const[errMsg, setErr] =useState(null);
  let validationSchema= Yup.object({
  
  email:Yup.string().required('Email is required').email('Enter a valid email'),
  password:Yup.string().required('This password is required').matches(/^[A-Z][a-z0-9]{6,8}$/),
 

  })
  async function signIn(values)
  {
    setLoading(true);
   let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', 
   values).catch((error)=>{
    console.log(error.response.data.message)
    setErr(error.response.data.message);
    setLoading(false);

   });
   
    console.log(data);
    if(data.message == 'success'){
      
      console.log("zajha home")
      setToken(data.token)
      localStorage.setItem('userToken', data.token)
      console.log(userToken)
      setLoading(false);
       naviagte('/');
    }

  }
  let formik =useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:signIn,
    validationSchema:validationSchema
    

  })

  return (
    <div className='my-4'>
      <h1 className='text-main my-3'>Login Form</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className='row gy-3 m-auto w-75 bg-light shadow p-1'>
         
          <div className="col-md-12">
            <label htmlFor="userEmail">Email</label>
            <input type="email" id='userEmail' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control' />
            {
              formik.errors.email && formik.touched.email?
              <p className='text-danger'> {formik.errors.email} </p>:''
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
          
          { errMsg !==null?
            <p className=' text-danger'>
            {errMsg}
          </p>:''

            }
                    <Link className='mt-2 text-end text-muted text-main' to={`/ForGetpassword`}>ForgetPassword ?</Link>
                   
          <div className="col-md-12 text-end my-3">
            <button disabled={!(formik.isValid && formik.dirty)} type='submit' className=' btn bg-main text-light'>Login  
            { isLoading?
            <span>
            <i className='mx-2 text-light fa-solid fa-spinner fa-spin'></i>
          </span>:''

            }
            </button>
           
          </div>
          <p className='text-muted'>Don't have an account  <Link to="/Register" className='text-main text-muted px-2 fw-bold'>Register</Link></p>
         

        </div>
      </form>
    </div>
  )
 
}
