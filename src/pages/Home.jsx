import { Link } from "../Link"



const HomePage =()=>{

     return <>
       <h1>Home Page</h1>
       <Link to={'/about'}> About </Link>
     </>
   }

export default HomePage