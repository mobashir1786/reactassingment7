import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Students } from "../Pages/Students";

import { NavLink } from 'react-router-dom';
import '../App.css';

export function Header(){
   return(
    <nav>
    <NavLink  to={'/'} element={<Home/>}>Home</NavLink>
    <NavLink to={'/Pages/Students'} element={<Students/>}>Students</NavLink>
    <NavLink to={'/Pages/Contact'} element={<Contact/>}>Contact us</NavLink>
  </nav>
   )
}