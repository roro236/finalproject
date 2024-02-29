import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
import Details from './Components/Details/Details';
import ResetCode from './Components/resetCode/resetCode';
import  Whislist  from './Components/whislist/whislist';
// import  CartContextProvider from './context/CartContext';
import ForGetpassword from './Components/ForGetpassword/ForGetpassword';

import UserContextProvider from './context/TokenContext';
// import UserContextProvider from './context/TokenContext'
import ProtedtRoute from './Components/ProtedtRoute/ProtedtRoute';
// import CartContextProvider from './Components/context/CartContext';

import SlideCategories from './Components/SlideCategories/SlideCategories';

let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<ProtedtRoute ><Home/></ProtedtRoute>},
    {path:'Products' , element: <ProtedtRoute><Products/></ProtedtRoute>},
    {path:'Cart' , element: <ProtedtRoute><Cart/></ProtedtRoute>},
    {path:'Categories' , element: <ProtedtRoute><Categories/></ProtedtRoute>},
    {path:'SlideCategories' , element: <ProtedtRoute><SlideCategories/></ProtedtRoute>},
     {path:' whislist ' , element: <ProtedtRoute>< whislist/></ProtedtRoute>},
    {path:'Brands' , element: <ProtedtRoute><Brands/></ProtedtRoute>},
    {path:'Details/:id' , element: <ProtedtRoute><Details/></ProtedtRoute>},
    {path:'ForGetpassword' , element:<ForGetpassword/> },
    {path:'ResetCode' , element:<ResetCode/> },
    {path:'Login' , element:<Login/> },
    {path:'Register' , element:<Register/>},
  ] }
])

function App() {
  return( 
    // n <CartContextProvider> </CartContextProvider>
        <UserContextProvider>
    <RouterProvider router={routes}></RouterProvider>
 </UserContextProvider>
  
    
  
     );
}

export default App;
