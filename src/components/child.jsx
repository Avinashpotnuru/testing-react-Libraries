import  { useContext } from 'react'

import { AuthContext } from '../AuthProvider'

const   ChildComponent = () => {
    const [auth,name]=useContext(AuthContext)

    console.log(useContext(AuthContext))

    
  return (
    <div>
        
           {!auth ?  <h1> hai {name}</h1>:<h1>get lost</h1>} 
       
      
    </div>
  )
}

export default ChildComponent
