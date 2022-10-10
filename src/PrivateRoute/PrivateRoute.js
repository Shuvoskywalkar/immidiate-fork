import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App';

const PrivateRoute = (props) => {
    const {User}=props;
    // let auth = localStorage.getItem("user");
    const[Loggedin,setLoggedin,cartItems] = useContext(UserContext);
   console.log(Loggedin);
   
//    !Loggedin.email && <Navigate to ="/login"/> 
   const user = Loggedin.email == 'shuvo@koiri.com'
// const User=localStorage.getItem("User")=='shuvo@koiri.com';
console.log(User)


return(
         user ?   <Outlet/> :<Navigate to="/login"/>   
    )
}

export default PrivateRoute;