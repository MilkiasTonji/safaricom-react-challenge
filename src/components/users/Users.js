import React from 'react'
import UsersDataTable from './UsersDataTable'

const Users = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center p-10'>
        <h1 className='text-2xl font-bold mb-4'>List of users</h1>
        <UsersDataTable />
    </div>
  )
}

export default Users