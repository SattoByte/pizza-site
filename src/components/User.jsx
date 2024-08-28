import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLoading } from '../redux/slices/userSlice'

const User = () => {

  const { user, loading } = useSelector(state => state.user)
  const dispatch = useDispatch()





  const renameHandler = () => {
    // dispatch(setLoading(true))

    //new object

    let userData = {
      age: 42,
      name: 'Baxa'
    }

    userData.name.split(' ', 2);
    console.log(userData)

    dispatch(setUser(userData))

  }

  return (
    <>
      <div>{user?.name}</div>
      <div onClick={renameHandler}>Button</div>
    </>

  )
}

export default User