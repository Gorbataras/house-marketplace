import {getAuth} from 'firebase/auth'
import {useEffect, useState} from 'react'

function Profile() {

  const [User, setUser] = useState(null)
  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])
  
  return User ? <h1>{User.displayName}</h1> : 'Not Logged In'

  return (
    <div>Profile</div>
  )
}

export default Profile