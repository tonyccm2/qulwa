import { Outlet, useLocation } from 'react-router-dom';
import emoticon from '../../assets/emoticon.svg';

export const Base = () => {
  const { state } = useLocation();
  const { picture, name } = state
  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex w-full max-w-screen-lg justify-center'>
          {
            picture
              ? <img className='w-6 h-6 rounded-full my-auto' src={picture} alt="icon perfil" />
              : <img src={emoticon} alt='perfil' />
          }
          <h1 className='text-white text-2xl font-bold p-2 truncate ... w-2/3 md:w-auto'>{name}</h1>
        </div>
      </div>
      <div className='flex w-full max-w-screen-lg justify-center'>
        <Outlet />
      </div>
    </div>
  )
}
