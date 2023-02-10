import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userById } from '../../services/users';
import { Loading } from '../Loading';

import './index.css'

const UserDetail = () => {


    const {id} = useParams()

    const [loading, setLoading] = useState(false);
    const [userDetail, setUserDetail] = useState({})

      // fetch all users from database
  useEffect(() => {
    getUserById(id);
  }, []);


  const getUserById = () => {
    setLoading(true);

    userById(id).then((result) => {
     if (result) {
         setUserDetail(result)
     }
     setLoading(false)
    })
}

if (loading) {
    return (
        <div className='container'>
            <Loading type='spokes' />
        </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center w-full container'>
        <div className='w-96 rounded-xl shadow-md content'>
            <h3>Personal Information</h3>
           <div className='content-inner'>
           <span>Name: {userDetail.name}</span>
            <span>Email: {userDetail.email}</span>
            <span>userName: {userDetail.username}</span>
            <span>phoneNumber: {userDetail.phone}</span>
            <span>Website: {userDetail.website}</span>
           </div>

           <h3>Company Information</h3>
           <div className='content-inner'>
           <span>Bs: {userDetail?.company.bs}</span>
           <span>catchPhrase: {userDetail?.company?.catchPhrase}</span>
            <span>companyName: {userDetail?.company?.name}</span>
           </div>

           <h3>Address Information</h3>
           <div className='content-inner'>
           <span>City: {userDetail?.address?.city}</span>
           <span>Street: {userDetail?.address?.street}</span>
            <span>zipCode: {userDetail?.company?.zipCode}</span>
           </div>
            
            
        </div>
    </div>
  )
}

export default UserDetail