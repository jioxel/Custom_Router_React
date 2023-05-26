import { Link } from "../Link"



const HomePage =()=>{
     console.log('A ')
     return <>
       <h1>Home Page</h1>
       <Link to={'/about'}> About </Link>
     </>
   }

export default HomePage