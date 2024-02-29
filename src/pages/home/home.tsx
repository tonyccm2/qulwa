import React from 'react'
import { useParams } from 'react-router-dom';

export const Home = () => {
  const { email, name, picture } = useParams();
  console.log(email, name, picture)
  return (
    <div className='flex justify-center'>
      <img src={picture} alt="icon perfil" />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}
