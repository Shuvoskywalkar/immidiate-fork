import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App';

const PrivateRoutes = (props) => {
    // const {User}=props;
    // let auth = localStorage.getItem("user");
    const[Loggedin,setLoggedin,cartItems] = useContext(UserContext);
   console.log(Loggedin.email);
// const User=localStorage.getItem("User");
// console.log(User)
    return(
        Loggedin ?   <Outlet/>  : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;